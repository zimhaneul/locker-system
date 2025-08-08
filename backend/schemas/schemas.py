from pydantic import BaseModel

class UserCreate(BaseModel):
    username: str
    useremail: str
    password: str

class UserLogin(BaseModel):
    useremail: str
    password: str

class LockerReserve(BaseModel):
    locker_id: int

class LockerResponse(BaseModel):
    message: str
    locker_id: int

class LockerStatus(BaseModel):
    locker_id: int
    is_reserved: bool

class QRCodeResponse(BaseModel):
    code: str
    locker_id: int

class QRCodeVerify(BaseModel):
    code: str

class QRCodeVerifyResponse(BaseModel):
    valid: bool
    locker_id: int