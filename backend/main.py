from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import auth, lockers, qrcode  # 우리가 리팩토링한 라우터들

app = FastAPI()

# CORS 설정
origins = [
    "http://localhost:3000",  # 프론트엔드 주소
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 라우터 등록
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(lockers.router, prefix="/locker", tags=["locker"])
app.include_router(qrcode.router, prefix="/qr", tags=["qr"])

# 기본 라우트
@app.get("/")
def root():
    return {"message": "FastAPI 서버 정상 작동 중"}