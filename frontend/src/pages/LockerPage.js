import React from "react";
import { reserveLocker } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function LockerPage() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("user_id");

  const handleReserve = async (lockerId) => {
    await reserveLocker(lockerId, userId);
    alert(`${lockerId}번 보관함 예약 완료`);
    navigate("/qr/" + lockerId);
  };

  return (
    <div>
      <h2>보관함 예약</h2>
      {[1, 2, 3, 4].map((id) => (
        <button key={id} onClick={() => handleReserve(id)}>
          {id}번 보관함 예약
        </button>
      ))}
    </div>
  );
}