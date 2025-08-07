import React, { useEffect } from "react";
import zimcarryLogo2 from "../img/zimcarry_logo2.png";
import zimcarryImg from "../img/zimcarry_img.png";

export default function MainPage() {

    useEffect(() => {
        const mapScript = document.createElement("script");
        mapScript.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=879af1b7dfe18593485b64114a4866d2&autoload=false";
        mapScript.async = true;

        mapScript.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById("map");

                // 기본 중심 좌표
                const options = {
                    center: new window.kakao.maps.LatLng(35.1151, 129.0415),
                    level: 3,
                };

                const map = new window.kakao.maps.Map(container, options);

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position) => {
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;
                        const locPosition = new window.kakao.maps.LatLng(lat, lng);

                        map.setCenter(locPosition);
                    });
                } else {
                    alert("하이");
                }
            });
        };
        document.head.appendChild(mapScript);
    });
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
                        background: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 16,
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            maxWidth: "480px",
                            aspectRatio: "9 / 16",
                            position: "relative",
                            background: "white",
                            overflow: "hidden",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                        }}
                        className="text-sm"
                    >
                        {/* 상단 노란 바 */}
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "10%",
                                backgroundColor: "#F4CD20",
                                boxShadow: "0px 2px 48px rgba(0, 0, 0, 0.13)",
                                zIndex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            {/* 로고 */}
                            <div>
                                <img
                                    src={zimcarryLogo2}
                                    alt="zimcarry logo"
                                    style={{ width: "50%", maxWidth: "280px", height: "auto", marginTop: "10px", marginLeft: "40%" }}
                                />
                            </div>

                            {/* 프로필 이미지 */}
                            <img
                                src={zimcarryImg}
                                alt="Profile"
                                style={{
                                    width: "50%",
                                    maxWidth: "40px",
                                    height: "auto"
                                }}
                            />
                        </div>

                        {/* 검색창 및 필터 버튼 */}

                        <input
                            type="text"
                            placeholder="원하는 위치를 검색하세요"
                            style={{
                                position: "absolute",
                                top: "10%",
                                left: 0,
                                width: "89%",
                                padding: "16px",
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.13)",
                                borderRadius: "100px",
                                border: "none",
                                color: "black",
                                fontSize: "16px",
                                fontWeight: "600",
                                margin: "2%",
                                zIndex: 2
                            }}
                        />

                        {/* 메인 지도 영역 */}
                        <div
                            id="map"
                            style={{
                                position: "absolute",
                                top: "10%",
                                left: 0,
                                width: "100%",
                                height: "82%",
                                zIndex: 1,
                            }}
                        ></div>

                        {/* 하단 바 */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                height: "8%",
                                backgroundColor: "#50525B",
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                zIndex: 2,
                                fontSize: "0.9rem",
                                fontFamily: "Inter"
                            }}
                        >
                            <div style={{ color: "#F4CD20", fontWeight: "bold" }}>홈</div>
                            <div style={{ color: "white" }}>공지</div>
                            <div style={{ color: "white" }}>이용내역</div>
                            <div style={{ color: "white" }}>마이</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}