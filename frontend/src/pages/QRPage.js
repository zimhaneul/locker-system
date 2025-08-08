import React, { useEffect, useState } from "react";
import { generateQR } from "../api/qr"; // 분리된 qr.js에서 가져왔다고 가정
import { QRCodeSVG } from "qrcode.react";
import { useParams } from "react-router-dom";

export default function QRPage() {
  const { lockerId } = useParams();
  const [qr, setQr] = useState(null);
  const [countdown, setCountdown] = useState(30);
  const [error, setError] = useState("");

  const fetchQR = async () => {
    try {
      const res = await generateQR(lockerId);
      setQr(res.data.code);
      setCountdown(30); // 만료 시간 리셋
      setError("");
    } catch (err) {
      setError("QR 코드를 생성할 수 없습니다.");
    }
  };

  // QR 최초 생성
  useEffect(() => {
    fetchQR();
  }, [lockerId]);

  // 1초 간격 타이머
  useEffect(() => {
    if (countdown <= 0) {
      fetchQR(); // 자동 갱신
      return;
    }
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

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
        <div>
          <h2>보관함 열기 QR</h2>
          {qr ? (
            <>
              <QRCodeSVG value={qr} size={256} />
              <p>QR을 보관함에 스캔해 주세요.</p>
              <p style={{ color: "#666", marginTop: 8 }}>
                남은 시간: <strong>{countdown}</strong>초
              </p>
            </>
          ) : (
            <p>QR을 불러오는 중...</p>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}