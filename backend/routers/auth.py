from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from models import User
from schemas import UserCreate, UserLogin
from utils import hash_password, verify_password
from pydantic import BaseModel

router = APIRouter()

users ={}

class UserRegister(BaseModel):
    username: str
    useremail: str
    password: str

class UserLogin(BaseModel):
    useremail: str
    password: str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.useremail == user.useremail).first()
    if existing:
        raise HTTPException(status_code=400, detail="이미 존재하는 계정입니다.")
    hashed = hash_password(user.password)
    db_user = User(username=user.username, useremail=user.useremail, password=hashed)
    db.add(db_user)
    db.commit()
    return {"message": "회원가입 성공"}

@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.useremail == user.useremail).first()
    if not db_user or not verify_password(user.password, db_user.password):
        raise HTTPException(status_code=401, detail="이메일 또는 비밀번호가 틀렸습니다.")
    return {"message": "로그인 성공", "user_id": db_user.id}