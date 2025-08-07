import React, { useState } from "react";
import { register } from "../api";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({ username: "", useremail: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      alert("회원가입 완료");
      navigate("/login");
    } catch (err) {
      alert("회원가입 실패");
    }
  };

  return (
<div style={{
  minHeight: "100vh",
  background: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 16
}}>
  <div style={{
    width: "100%",
    maxWidth: 400,
    display: "flex",
    flexDirection: "column",
    gap: 20
  }}>

    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "360px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <h1 style={{ fontSize: 30, fontWeight: 600, textAlign: "center", color: "black", fontFamily: "Inter" }}>회원가입</h1>
        <div style={{ background: "#F6F6F6", border: "1px solid #E8E8E8", borderRadius: 8 }}>
          <input
          placeholder="이름"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
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
          required
        />
        </div>

        <div style={{ background: "#F6F6F6", border: "1px solid #E8E8E8", borderRadius: 8 }}>
          <input
          placeholder="이메일 주소"
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
          required
        />
        </div>

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
          required
        />
        </div>

        <button
          type="submit"
          style={{
            padding: "16px",
            backgroundColor: "#4F525B",
            color: "white",
            border: "none",
            borderRadius: "100px",
            fontSize: "16px",
            fontWeight: "600",
            fontFamily: "Inter",
            cursor: "pointer",
          }}
        >
          가입하기
        </button>

        <div
          style={{
            textAlign: "center",
            marginTop: "8px",
            fontSize: "14px",
            color: "#666",
            cursor: "pointer",
            fontFamily: "Inter"
          }}
          onClick={() => navigate("/login")}
        >
          이미 계정이 있으신가요? <strong style={{ color: "#4F525B" }}>로그인</strong>
        </div>
      </form>
    </div>
  
  </div>
</div>
);
}