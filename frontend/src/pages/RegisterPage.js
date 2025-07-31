import React, { useState } from "react";
import { register } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    alert("회원가입 완료");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>회원가입</h2>
      <input placeholder="아이디" onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <input placeholder="비밀번호" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button>가입</button>
    </form>
  );
}