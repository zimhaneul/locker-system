import React from "react";
import { useNavigate } from "react-router-dom";
import zimcarryImg from "../img/zimcarry_img.png";
import zimcarryLogo from "../img/zimcarry_logo.png";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      {/* 상단 이미지 */}
      <img
        src={zimcarryImg}
        alt="zimcarry img"
        style={{
          width: "50%",
          maxWidth: "180px",
          height: "auto",
          marginTop: "20px",
        }}
      />

      {/* 로고 */}
      <img
        src={zimcarryLogo}
        alt="zimcarry logo"
        style={{ width: "70%", maxWidth: "280px", height: "auto", marginTop: "20px" }}
      />

      {/* 텍스트 */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <div
          style={{
            color: "#4F525B",
            fontSize: "20px",
            fontWeight: "700",
            fontFamily: "Inter",
            marginBottom: "8px",
          }}
        >
          여행과 일상을 자유롭게,
        </div>
        <div
          style={{
            color: "#4F525B",
            fontSize: "12px",
            fontWeight: "700",
            fontFamily: "Inter",
          }}
        >
          Journey Freely, Live Lightly!
        </div>
      </div>

      {/* 로그인 / 회원가입 버튼 */}
      <div style={{ width: "100%", maxWidth: "360px", marginTop: "30px" }}>
        <button
          onClick={() => navigate("/login")}
          style={{
            width: "100%",
            padding: "16px",
            backgroundColor: "#4F525B",
            borderRadius: "100px",
            border: "none",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            fontFamily: "Inter",
            marginBottom: "16px",
            cursor: "pointer",
          }}
        >
          로그인
        </button>
        <button
          onClick={() => navigate("/register")}
          style={{
            width: "100%",
            padding: "16px",
            backgroundColor: "#4F525B",
            borderRadius: "100px",
            border: "none",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            fontFamily: "Inter",
            cursor: "pointer",
          }}
        >
          회원가입
        </button>
      </div>

      {/* 하단 카피라이트 */}
      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
          color: "#666666",
          fontSize: "10px",
          fontFamily: "Inter",
        }}
      >
        Copyright 2025. ZIM CARRY All right reserved.
      </div>
    </div>
  );
};

export default HomePage;