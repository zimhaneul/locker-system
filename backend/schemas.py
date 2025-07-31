from pydantic import BaseModel

class UserCreate(BaseModel):
    username: str
    password: str

class UserLogin(BaseModel):
    username: str
    password: str

class LockerReserve(BaseModel):
    locker_id: int

class QRCodeResponse(BaseModel):
    code: str
    locker_id: int