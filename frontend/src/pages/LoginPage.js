import React, { useState } from "react";
import { login } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await login(form);
    localStorage.setItem("user_id", res.data.user_id);
    navigate("/locker");
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>로그인</h2>
      <input placeholder="아이디" onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <input placeholder="비밀번호" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button>로그인</button>
    </form>
  );
}