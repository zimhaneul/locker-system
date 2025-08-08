from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models import QRCode, Locker
from schemas import QRCodeResponse, QRCodeVerify, QRCodeVerifyResponse
from utils import generate_qr_code_string
from datetime import datetime, timedelta

router = APIRouter(
    prefix="/qr",
    tags=["QR"]
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# QR 생성 API
@router.post("/generate", response_model=QRCodeResponse)
def generate_qr(locker_id: int, db: Session = Depends(get_db)):
    locker = db.query(Locker).filter(Locker.id == locker_id).first()
    if not locker or not locker.is_reserved:
        raise HTTPException(status_code=400, detail="예약되지 않은 보관함입니다.")

    # 30초 이내 생성된 기존 QR이 있다면 삭제
    existing_qr = (
        db.query(QRCode)
        .filter(QRCode.locker_id == locker_id)
        .filter(QRCode.expires_at > datetime.utcnow())
        .first()
    )
    if existing_qr:
        db.delete(existing_qr)
        db.commit()

    # 새 QR 생성
    code = generate_qr_code_string()
    expires_at = datetime.utcnow() + timedelta(seconds=30)
    qr = QRCode(code=code, locker_id=locker_id, expires_at=expires_at)
    db.add(qr)
    db.commit()

    return QRCodeResponse(code=code, locker_id=locker_id)

# QR 검증 API (라즈베리파이용)
@router.post("/verify", response_model=QRCodeVerifyResponse)
def verify_qr(payload: QRCodeVerify, db: Session = Depends(get_db)):
    qr = db.query(QRCode).filter(QRCode.code == payload.code).first()
    if not qr:
        raise HTTPException(status_code=404, detail="유효하지 않은 QR 코드입니다.")
    if qr.expires_at < datetime.utcnow():
        db.delete(qr)
        db.commit()
        raise HTTPException(status_code=400, detail="QR 코드가 만료되었습니다.")

    locker_id = qr.locker_id
    db.delete(qr)  # 인증 성공 시 QR 삭제
    db.commit()

    return QRCodeVerifyResponse(valid=True, locker_id=locker_id)