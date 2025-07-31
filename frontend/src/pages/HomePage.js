import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>무인보관함 서비스</h1>
      <p>QR 코드를 통해 보관함을 예약하고 이용하세요.</p>
      <div style={{ marginTop: "30px" }}>
        <button onClick={() => navigate("/login")} style={buttonStyle}>
          로그인
        </button>
        <button onClick={() => navigate("/auth/register")} style={buttonStyle}>
          회원가입
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  margin: "10px",
  padding: "12px 24px",
  fontSize: "16px",
  cursor: "pointer",
};

export default HomePage;