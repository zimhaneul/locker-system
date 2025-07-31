from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models import QRCode, Locker
from schemas import QRCodeResponse
from utils import generate_qr_code_string

router = APIRouter()

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
        raise HTTPException(status_code=400, detail="Invalid or unreserved locker.")
    code = generate_qr_code_string()
    qr = QRCode(code=code, locker_id=locker_id)
    db.add(qr)
    db.commit()
    return {"code": code, "locker_id": locker_id}

# QR 검증 API (라즈베리파이용)
@router.post("/verify")
def verify_qr(code: str, db: Session = Depends(get_db)):
    qr = db.query(QRCode).filter(QRCode.code == code).first()
    if not qr:
        raise HTTPException(status_code=404, detail="Invalid QR")
    locker_id = qr.locker_id
    db.delete(qr)  # 1회용 QR 삭제
    db.commit()
    return {"valid": True, "locker_id": locker_id}