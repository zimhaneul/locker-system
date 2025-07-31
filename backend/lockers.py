from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Locker
from schemas import LockerReserve

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# 보관함 예약 API
@router.post("/reserve")
def reserve_locker(reserve: LockerReserve, user_id: int, db: Session = Depends(get_db)):
    locker = db.query(Locker).filter(Locker.id == reserve.locker_id).first()
    if not locker:
        raise HTTPException(status_code=404, detail="Locker not found")
    if locker.is_reserved:
        raise HTTPException(status_code=400, detail="Locker already reserved")
    locker.is_reserved = True
    locker.reserved_by = user_id
    db.commit()
    return {"message": "Locker reserved", "locker_id": reserve.locker_id}