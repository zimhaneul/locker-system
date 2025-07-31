# backend/serial_server.py

import serial
import requests

# 시리얼 포트 설정 (ex: /dev/ttyUSB0 또는 COM3)
SERIAL_PORT = '/dev/ttyUSB0'
BAUDRATE = 9600

# FastAPI 서버 주소
SERVER_URL = 'http://localhost:8000/qr/verify'

def main():
    ser = serial.Serial(SERIAL_PORT, BAUDRATE, timeout=1)
    print(f"Listening on {SERIAL_PORT}...")

    buffer = ""
    while True:
        if ser.in_waiting > 0:
            byte = ser.read().decode('utf-8', errors='ignore')
            if byte == '\n':
                code = buffer.strip()
                print(f"Received QR code: {code}")

                try:
                    response = requests.post(SERVER_URL, json={"code": code})
                    if response.status_code == 200:
                        locker_id = response.json()["locker_id"]
                        print(f"[✓] Valid code. Open locker #{locker_id}")
                        # 👉 여기서 GPIO로 신호 보낼 예정
                    else:
                        print(f"[✗] Invalid code: {response.text}")
                except Exception as e:
                    print(f"Error: {e}")

                buffer = ""
            else:
                buffer += byte

if __name__ == "__main__":
    main()