import React, { useState } from "react";
import { login } from "../api/api";
import { useNavigate } from "react-router-dom";
import naverLogo from "../img/naver_logo.png";
import kakaoLogo from "../img/kakao_logo.png";
import googleLogo from "../img/google_logo.png";

export default function LoginPage() {
  const [form, setForm] = useState({ useremail: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      localStorage.setItem("user_id", res.data.user_id);
      navigate("/main");
    } catch (err) {
      console.error("로그인 실패:", err);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "white", display: "flex", justifyContent: "center", alignItems: "center", padding: 16 }}>
      <form onSubmit={handleLogin} style={{ width: "100%", maxWidth: 400, display: "flex", flexDirection: "column", gap: 20 }}>
        {/* 타이틀 */}
        <h1 style={{ fontSize: 30, fontWeight: 600, textAlign: "center", color: "black", fontFamily: "Inter" }}>로그인</h1>

        {/* 이메일 */}
        <div style={{ background: "#F6F6F6", border: "1px solid #E8E8E8", borderRadius: 8 }}>
          <input
            type="text"
            placeholder="이메일"
            value={form.useremail}
            onChange={(e) => setForm({ ...form, useremail: e.target.value })}
            style={{
              width: "100%",
              height: 50,
              padding: "0 16px",
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: 16,
              fontFamily: "Inter",
              color: "#333"
            }}
          />
        </div>

        {/* 비밀번호 */}
        <div style={{ background: "#F6F6F6", border: "1px solid #E8E8E8", borderRadius: 8 }}>
          <input
            type="password"
            placeholder="비밀번호"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            style={{
              width: "100%",
              height: 50,
              padding: "0 16px",
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: 16,
              fontFamily: "Inter",
              color: "#333"
            }}
          />
        </div>

        {/* 로그인 버튼 */}
        <button
          type="submit"
          style={{
            height: 50,
            background: "#4F525B",
            color: "white",
            fontSize: 16,
            fontFamily: "Inter",
            fontWeight: 600,
            borderRadius: 100,
            border: "none",
            cursor: "pointer"
          }}
        >
          로그인
        </button>

        {/* 아이디/비번 찾기 */}
        <div style={{ 
          textAlign: "center",
          color: "#4F525B",
          fontFamily: "Inter",
          fontSize: 16,
          fontWeight: 600,
          cursor: "pointer"
          }}
          // onClick={() => navigate("/find")}
          onClick={() => alert("아직 구현되지 않았습니다.")}
          >
          아이디/비밀번호 찾기
        </div>

        {/* 소셜 로그인 버튼들 */}
        {[
          { 
            text: "카카오 로그인", 
            icon: kakaoLogo, 
            bg: "#FEE500", 
            color: "#000"
            // 로그인 API 링크
            // url: "https://kauth.kakao.com/oauth/authorize?client_id=YOUR_KAKAO_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code"
          },
          { 
            text: "네이버 로그인", 
            icon: naverLogo, 
            bg: "#03C75A", 
            color: "#fff"
            // 로그인 API 링크               
            // url: "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=YOUR_NAVER_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&state=RANDOM_STATE"
          },
          { 
            text: "구글 로그인", 
            icon: googleLogo, 
            bg: "#4285F4", 
            color: "#fff"
            // 로그인 API 링크
            // // url: "https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=profile email"
          },
        ].map((btn, i) => (
          <button
            key={i}
            type="button"
            onClick={() => alert("아직 구현되지 않았습니다.")}
            // onClick={() => window.location.href = btn.url}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 16px",
              background: btn.bg,
              color: btn.color,
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "600",
              borderRadius: 100,
              border: "none",
              cursor: "pointer"
            }}
          >
            <img src={btn.icon} alt="icon" style={{ width: 30, height: 30, borderRadius: 6 }} />
            {btn.text}
          </button>
        ))}
      </form>
    </div>
  );
}