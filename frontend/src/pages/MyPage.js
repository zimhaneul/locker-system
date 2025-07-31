import React from "react";

export default function MyPage() {
  const userId = localStorage.getItem("user_id");
  return <div>사용자 #{userId} 의 마이페이지 (예약 내역 등)</div>;
}