import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:8000", // docker-compose에서 backend 서비스 이름 사용
});

// 토큰 대신 userId 저장
export const register = (data) => API.post("/auth/register", data);
export const login = (data) => API.post("/auth/login", data);
export const reserveLocker = (lockerId, userId) =>
  API.post("/locker/reserve", { locker_id: lockerId }, { params: { user_id: userId } });
export const generateQR = (lockerId) =>
  API.post("/qr/generate", null, { params: { locker_id: lockerId } });
export const verifyQR = (code) => API.post("/qr/verify", { code });

export default API;