from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Locker
from schemas import LockerReserve, LockerResponse, LockerStatus
from typing import List

router = APIRouter(
    prefix="/locker",
    tags=["Locker"]
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# 보관함 예약 API
@router.post("/reserve", response_model=LockerResponse)
def reserve_locker(reserve: LockerReserve, user_id: int, db: Session = Depends(get_db)):
    locker = db.query(Locker).filter(Locker.id == reserve.locker_id).first()
    if not locker:
        raise HTTPException(status_code=404, detail="Locker not found")
    if locker.is_reserved:
        raise HTTPException(status_code=400, detail="Locker already reserved")
    locker.is_reserved = True
    locker.reserved_by = user_id
    db.commit()
    return LockerResponse(message="보관함이 예약되었습니다.", locker_id=reserve.locker_id)

# 보관함 예약 해제 API
@router.post("/release", response_model=LockerResponse)
def release_locker(locker_id: int, user_id: int, db: Session = Depends(get_db)):
    locker = db.query(Locker).filter(Locker.id == locker_id).first()
    if not locker:
        raise HTTPException(status_code=404, detail="Locker not found")
    if locker.reserved_by != user_id:
        raise HTTPException(status_code=403, detail="You do not own this locker")

    locker.is_reserved = False
    locker.reserved_by = None
    db.commit()

    return LockerResponse(message="Locker released", locker_id=locker_id)

# 보관함 status API
@router.get("/status", response_model=List[LockerStatus])
def get_locker_status(db: Session = Depends(get_db)):
    lockers = db.query(Locker).all()
    return [
        LockerStatus(locker_id=locker.id, is_reserved=locker.is_reserved)
        for locker in lockers
    ]