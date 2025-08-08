from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime
from database import Base
from datetime import datetime

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, nullable=False)
    useremail = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)

class Locker(Base):
    __tablename__ = "lockers"
    id = Column(Integer, primary_key=True, index=True)
    is_reserved = Column(Boolean, default=False)
    reserved_by = Column(Integer, ForeignKey("users.id"), nullable=True)
    reserved_at = Column(DateTime, nullable=True)

class QRCode(Base):
    __tablename__ = "qrcodes"
    id = Column(Integer, primary_key=True, index=True)
    code = Column(String, unique=True, index=True)
    locker_id = Column(Integer, ForeignKey("lockers.id"))
    created_at = Column(DateTime, default=datetime.utcnow)
    expires_at = Column(DateTime)