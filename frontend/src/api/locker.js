import API from './axios';

// 보관함 예약
export const reserveLocker = (lockerId, userId) =>
  API.post("/locker/reserve", 
    { locker_id: lockerId }, 
    { params: { user_id: userId } 
  });

// 보관함 해제
export const releaseLocker = (lockerId, userId)  =>
  API.post("/locker/release", null, 
    {params: { locker_id: lockerId, user_id: userId},
  });

export const fetchLockerStatus = () =>
  API.get("/locker/status")