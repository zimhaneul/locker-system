import API from './axios';

export const reserveLocker = (lockerId, userId) =>
  API.post("/locker/reserve", { locker_id: lockerId }, { params: { user_id: userId } });