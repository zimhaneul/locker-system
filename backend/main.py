from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import uuid

app = FastAPI()

# CORS 설정
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- 간단한 메모리 DB 예시 ---
users = {}
lockers = {1: None, 2: None, 3: None, 4: None}  # locker_id: user_id or None
reservations = {}  # user_id: locker_id
qr_codes = {}      # code: locker_id

# --- Pydantic 모델 ---

class UserRegister(BaseModel):
    username: str
    password: str

class UserLogin(BaseModel):
    username: str
    password: str

class LockerReserveRequest(BaseModel):
    locker_id: int

class QRCodeRequest(BaseModel):
    code: str

# --- 회원가입 ---
@app.post("/auth/register")
def register(user: UserRegister):
    if user.username in users:
        raise HTTPException(status_code=400, detail="이미 존재하는 사용자입니다.")
    users[user.username] = {"password": user.password, "id": len(users) + 1}
    return {"message": "회원가입 성공"}

# --- 로그인 ---
@app.post("/auth/login")
def login(user: UserLogin):
    if user.username not in users or users[user.username]["password"] != user.password:
        raise HTTPException(status_code=400, detail="아이디 또는 비밀번호가 틀렸습니다.")
    user_id = users[user.username]["id"]
    return {"user_id": user_id}

# --- 보관함 예약 ---
@app.post("/locker/reserve")
def reserve_locker(reserve_req: LockerReserveRequest, user_id: int):
    locker_id = reserve_req.locker_id
    if lockers.get(locker_id) is not None:
        raise HTTPException(status_code=400, detail="이미 예약된 보관함입니다.")
    lockers[locker_id] = user_id
    reservations[user_id] = locker_id
    return {"message": f"{locker_id}번 보관함 예약 완료"}

# --- QR 코드 생성 ---
@app.post("/qr/generate")
def generate_qr(locker_id: int):
    if lockers.get(locker_id) is None:
        raise HTTPException(status_code=400, detail="예약되지 않은 보관함입니다.")
    code = str(uuid.uuid4())
    qr_codes[code] = locker_id
    return {"code": code}

# --- QR 코드 검증 ---
@app.post("/qr/verify")
def verify_qr(qr_req: QRCodeRequest):
    code = qr_req.code
    if code not in qr_codes:
        raise HTTPException(status_code=400, detail="유효하지 않은 QR 코드입니다.")
    locker_id = qr_codes.pop(code)  # 한 번 사용 후 제거
    # 보관함 열기 로직 연결 가능
    return {"locker_id": locker_id, "message": "QR 인증 성공"}

# --- 기본 라우트 (테스트용) ---
@app.get("/")
def root():
    return {"message": "FastAPI 서버 정상 작동 중"}