import API from './axios';

export const generateQR = (lockerId) =>
  API.post("/qr/generate", null, { params: { locker_id: lockerId } });

export const verifyQR = (code) =>
  API.post("/qr/verify", { code });