import React from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white', overflow: 'hidden', outline: '1px black solid', outlineOffset: '-1px' }}>
            <img style={{ width: 375, height: 668, left: 0, top: 88, position: 'absolute' }} src="https://placehold.co/375x668" />
            <div style={{ width: 377, height: 59, left: -1, top: 753, position: 'absolute', background: 'linear-gradient(180deg, #50525B 0%, #50525B 100%)' }} />
            <div style={{ width: 32, height: 32, left: 32, top: 756, position: 'absolute', overflow: 'hidden', borderRadius: 32 }}>
                <div style={{ width: 24, height: 24, left: 4, top: 4, position: 'absolute', overflow: 'hidden' }}>
                    <div style={{ width: 18, height: 20, left: 3, top: 2, position: 'absolute', outline: '1.50px #F4CD20 solid', outlineOffset: '-0.75px' }} />
                    <div style={{ width: 6, height: 10, left: 9, top: 12, position: 'absolute', outline: '1.50px #F4CD20 solid', outlineOffset: '-0.75px' }} />
                </div>
            </div>
            <div style={{ width: 32, height: 32, left: 105, top: 756, position: 'absolute', overflow: 'hidden' }}>
                <div style={{ width: 24, height: 24, left: 3.50, top: 4, position: 'absolute' }}>
                    <div style={{ width: 18, height: 18.50, left: 3, top: 3.50, position: 'absolute', outline: '1.50px white solid', outlineOffset: '-0.75px' }} />
                    <div style={{ width: 24, height: 24, left: 0, top: 0, position: 'absolute', opacity: 0 }} />
                    <div style={{ width: 1, height: 1, left: 15.20, top: 13.20, position: 'absolute', outline: '2px white solid', outlineOffset: '-1px' }} />
                    <div style={{ width: 1, height: 1, left: 15.20, top: 16.20, position: 'absolute', outline: '2px white solid', outlineOffset: '-1px' }} />
                    <div style={{ width: 1, height: 1, left: 11.50, top: 13.20, position: 'absolute', outline: '2px white solid', outlineOffset: '-1px' }} />
                    <div style={{ width: 1, height: 1, left: 11.50, top: 16.20, position: 'absolute', outline: '2px white solid', outlineOffset: '-1px' }} />
                    <div style={{ width: 1, height: 1, left: 7.80, top: 13.20, position: 'absolute', outline: '2px white solid', outlineOffset: '-1px' }} />
                    <div style={{ width: 1, height: 1, left: 7.80, top: 16.20, position: 'absolute', outline: '2px white solid', outlineOffset: '-1px' }} />
                </div>
            </div>
            <div style={{ width: 24, height: 24, left: 312, top: 760, position: 'absolute', overflow: 'hidden' }}>
                <div style={{ width: 16, height: 6, left: 4, top: 15, position: 'absolute', outline: '1.50px white solid', outlineOffset: '-0.75px' }} />
                <div style={{ width: 8, height: 8, left: 8, top: 3, position: 'absolute', outline: '1.50px white solid', outlineOffset: '-0.75px' }} />
            </div>
            <div style={{ width: 24, height: 24, left: 245, top: 760, position: 'absolute', overflow: 'hidden' }}>
                <div style={{ width: 17.14, height: 10.29, left: 5.14, top: 5, position: 'absolute', outline: '1.50px white solid', outlineOffset: '-0.75px' }} />
                <div style={{ width: 2.29, height: 2.29, left: 7.43, top: 18.71, position: 'absolute', outline: '1.50px white solid', outlineOffset: '-0.75px' }} />
                <div style={{ width: 2.29, height: 2.29, left: 17.71, top: 18.71, position: 'absolute', outline: '1.50px white solid', outlineOffset: '-0.75px' }} />
            </div>
            <div style={{ width: 20, height: 20.06, left: 180, top: 762, position: 'absolute', outline: '1.50px white solid', outlineOffset: '-0.75px' }} />
            <div style={{ width: 1, height: 1, left: 193.50, top: 770.50, position: 'absolute', outline: '2px white solid', outlineOffset: '-1px' }} />
            <div style={{ width: 1, height: 1, left: 189.50, top: 770.50, position: 'absolute', outline: '2px white solid', outlineOffset: '-1px' }} />
            <div style={{ width: 1, height: 1, left: 185.50, top: 770.50, position: 'absolute', outline: '2px white solid', outlineOffset: '-1px' }} />
            <div style={{ width: 24, height: 24, left: 178, top: 760, position: 'absolute', opacity: 0 }} />
            <div style={{ width: 49, left: 24, top: 788, position: 'absolute', textAlign: 'center', color: '#F4CD20', fontSize: 8, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>홈</div>
            <div style={{ width: 49, left: 235, top: 788, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 8, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word' }}>이용내역</div>
            <div style={{ width: 49, left: 300, top: 788, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 8, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word' }}>마이</div>
            <div style={{ width: 49, left: 96, top: 788, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 8, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word' }}>공지/이벤트</div>
            <div style={{ width: 49, left: 166, top: 788, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 8, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word' }}>캐리톡</div>
            <div style={{ width: 377, height: 35, left: -1, top: 718, position: 'absolute', background: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25 }} />
            <div style={{ width: 59, height: 7, left: 158, top: 732, position: 'absolute', background: '#50525B', borderRadius: 3.50 }} />
            <div style={{ width: 293, height: 43, left: 12, top: 98, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20 }} />
            <div style={{ width: 43, height: 43, left: 315, top: 98, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20 }} />
            <div style={{ width: 4, height: 4, left: 328.12, top: 111.02, position: 'absolute', outline: '2px black solid', outlineOffset: '-1px' }} />
            <div style={{ width: 0.01, height: 0.02, left: 336.07, top: 119.07, position: 'absolute', outline: '2px black solid', outlineOffset: '-1px' }} />
            <div style={{ width: 0.01, height: 0.02, left: 344.07, top: 119.12, position: 'absolute', outline: '2px black solid', outlineOffset: '-1px' }} />
            <div style={{ width: 0.01, height: 0.02, left: 336.05, top: 123.07, position: 'absolute', outline: '2px black solid', outlineOffset: '-1px' }} />
            <div style={{ width: 0.01, height: 0.02, left: 344.05, top: 123.12, position: 'absolute', outline: '2px black solid', outlineOffset: '-1px' }} />
            <div style={{ width: 0.01, height: 0.02, left: 344.02, top: 127.12, position: 'absolute', outline: '2px black solid', outlineOffset: '-1px' }} />
            <div style={{ width: 0.01, height: 0.02, left: 336.10, top: 115.07, position: 'absolute', outline: '2px black solid', outlineOffset: '-1px' }} />
            <div style={{ width: 0.01, height: 0.02, left: 336.12, top: 111.07, position: 'absolute', outline: '2px black solid', outlineOffset: '-1px' }} />
            <div style={{ width: 4, height: 4, left: 328.05, top: 123.02, position: 'absolute', outline: '2px black solid', outlineOffset: '-1px' }} />
            <div style={{ width: 4, height: 4, left: 340.12, top: 111.10, position: 'absolute', outline: '2px black solid', outlineOffset: '-1px' }} />
            <div style={{ width: 4, height: 4, left: 344.15, top: 107.12, position: 'absolute', outline: '2px black solid', outlineOffset: '-1px' }} />
            <div style={{ width: 4, height: 4, left: 344.02, top: 127.12, position: 'absolute', outline: '2px black solid', outlineOffset: '-1px' }} />
            <div style={{ width: 4, height: 4, left: 324.15, top: 107, position: 'absolute', outline: '2px black solid', outlineOffset: '-1px' }} />
            <div style={{ width: 4, height: 4, left: 324.02, top: 127, position: 'absolute', outline: '2px black solid', outlineOffset: '-1px' }} />
            <div style={{ width: 24, height: 24, left: 24, top: 107, position: 'absolute', overflow: 'hidden' }}>
                <div style={{ width: 16, height: 16, left: 3, top: 3, position: 'absolute', outline: '1.50px black solid', outlineOffset: '-0.75px' }} />
                <div style={{ width: 4.35, height: 4.35, left: 16.65, top: 16.65, position: 'absolute', outline: '1.50px black solid', outlineOffset: '-0.75px' }} />
            </div>
            <div style={{ left: 54, top: 112, position: 'absolute', color: '#BDBDBD', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>검색</div>
            <div style={{ padding: 8, left: 12, top: 147, position: 'absolute', background: 'white', borderRadius: 100, justifyContent: 'center', alignItems: 'flex-end', gap: 10, display: 'inline-flex' }}>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 12, fontFamily: 'Source Code Pro', fontWeight: '400', wordWrap: 'break-word' }}>🚅KTX역</div>
            </div>
            <div style={{ padding: 8, left: 161, top: 147, position: 'absolute', background: 'white', borderRadius: 100, justifyContent: 'center', alignItems: 'flex-end', gap: 10, display: 'inline-flex' }}>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 12, fontFamily: 'Source Code Pro', fontWeight: '400', wordWrap: 'break-word' }}>✈️공항</div>
            </div>
            <div style={{ padding: 8, left: 220, top: 147, position: 'absolute', background: 'white', borderRadius: 100, justifyContent: 'center', alignItems: 'flex-end', gap: 10, display: 'inline-flex' }}>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 12, fontFamily: 'Source Code Pro', fontWeight: '400', wordWrap: 'break-word' }}>🛳️항터미널</div>
            </div>
            <div style={{ padding: 8, left: 301, top: 147, position: 'absolute', background: 'white', borderRadius: 100, justifyContent: 'center', alignItems: 'flex-end', gap: 10, display: 'inline-flex' }}>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 12, fontFamily: 'Source Code Pro', fontWeight: '400', wordWrap: 'break-word' }}>⚾야구장</div>
            </div>
            <div style={{ padding: 8, left: 80, top: 147, position: 'absolute', background: 'white', borderRadius: 100, justifyContent: 'center', alignItems: 'flex-end', gap: 10, display: 'inline-flex' }}>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 12, fontFamily: 'Source Code Pro', fontWeight: '400', wordWrap: 'break-word' }}>🚃지하철역</div>
            </div>
            <div style={{ width: 40, height: 42, left: 265, top: 493, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', overflow: 'hidden' }}>
                <div style={{ width: 10, height: 21, left: 15, top: 10.50, position: 'absolute', outline: '1.50px #FF0004 solid', outlineOffset: '-0.75px' }} />
            </div>
            <div style={{ width: 36, height: 35, left: 204, top: 454, position: 'absolute', opacity: 0.59, background: 'white', backdropFilter: 'blur(13.59px)' }} />
            <div style={{ width: 27.60, height: 26.83, left: 208.20, top: 458.08, position: 'absolute', background: '#FF0004', backdropFilter: 'blur(13.59px)' }} />
            <div style={{ width: 9.60, height: 9.33, left: 217.20, top: 466.83, position: 'absolute', background: 'white' }} />
            <div style={{ width: 26.18, height: 32, left: 336, top: 426, position: 'absolute', background: '#0051FF', outline: '2px #0051FF solid', outlineOffset: '-1px' }} />
            <div style={{ width: 8.73, height: 8.73, left: 344.73, top: 434.73, position: 'absolute', background: 'white', outline: '2px white solid', outlineOffset: '-1px' }} />
            <div style={{ width: 375, height: 88, left: 0, top: 0, position: 'absolute', background: '#F4CD20', boxShadow: '0px 2px 48px rgba(0, 0, 0, 0.13)' }} />

            <div style={{ width: 18, height: 1.43, left: 18, top: 62.55, position: 'absolute', outline: '2px black solid', outlineOffset: '-1px' }} />
            <div style={{ width: 18, height: 1.43, left: 18, top: 54, position: 'absolute', outline: '2px black solid', outlineOffset: '-1px' }} />
            <div style={{ width: 18, height: 1.43, left: 18, top: 71.10, position: 'absolute', outline: '2px black solid', outlineOffset: '-1px' }} />
            <img style={{ width: 127, height: 43, left: 124, top: 42, position: 'absolute' }} src="https://placehold.co/127x43" />
            <img style={{ width: 30, height: 30, left: 328, top: 49, position: 'absolute', boxShadow: '0px 4px 20px rgba(100.94, 100.94, 100.94, 0.15)', border: '4px white solid' }} src="https://placehold.co/30x30" />
        </div>
    );
};

