import React, { useEffect, useState } from "react";
import { generateQR } from "../api/api";
import { QRCodeSVG } from "qrcode.react";
import { useParams } from "react-router-dom";

export default function QRPage() {
  const { lockerId } = useParams();
  const [qr, setQr] = useState(null);

  useEffect(() => {
    const fetchQR = async () => {
      const res = await generateQR(lockerId);
      setQr(res.data.code);
    };
    fetchQR();
  }, [lockerId]);

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
      {qr && <QRCodeSVG value={qr} size={256} />}
      <p>QR을 보관함에 스캔해 주세요.</p>
    </div>
  
  </div>
</div>
);
}