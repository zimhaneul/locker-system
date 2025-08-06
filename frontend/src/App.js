import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LockerPage from "./pages/LockerPage";
import QRPage from "./pages/QRPage";
import MyPage from "./pages/MyPage";
import MainPage from "./pages/MainPage";
import FindPage from "./pages/FindPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/locker" element={<LockerPage />} />
        <Route path="/qr/:lockerId" element={<QRPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/find" element={<FindPage />} />
      </Routes>
    </Router>
  );
}

export default App;