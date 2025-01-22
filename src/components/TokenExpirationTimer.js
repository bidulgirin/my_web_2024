// 세션 만료를 알려주는 고마운 녀석
import React, { useEffect, useState } from 'react';
import { refreshAccessToken } from '../apis/auth';

const TokenExpirationTimer = ({ expirationTime }) => {
    const [timeLeft, setTimeLeft] = useState(expirationTime);
    const [expired, setExpired] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const timeRemaining =
                expirationTime - Math.floor(Date.now() / 1000); // 남은 시간 (초 단위)
            if (timeRemaining <= 0) {
                clearInterval(intervalId); // 타이머 종료
                setExpired(true); // 만료된 상태로 업데이트
            } else {
                setTimeLeft(timeRemaining);
            }
        }, 1000); // 1초마다 갱신

        return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 타이머 정리
    }, [expirationTime]);

    // 남은 시간을 `mm:ss` 형식으로 변환
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    // 토큰 연장하는 함수
    // const onExtendRefreshToken = () => {
    //     console.log('아 연장해달라~');
    //     refreshAccessToken();
    // };

    return (
        <div>
            {expired ? (
                <p>토큰이 만료되었습니다.</p>
            ) : (
                <p>다음갱신까지 남은시간 {formatTime(timeLeft)}</p>
            )}
            {/* 비효율적일것같아서 뺌 */}
            {/* <div
                onClick={() => {
                    onExtendRefreshToken();
                }}
            >
                연장하기
            </div> */}
        </div>
    );
};

export default TokenExpirationTimer;
