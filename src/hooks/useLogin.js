import {
    handleLogin,
    handleLogout,
    manageSession,
    startRefreshTimer,
} from '../apis/auth';
import { token, setToken, removeToken, setExpireTime } from '../apis/Token'; // 토큰 유틸리티 가져오기
import { useNavigate } from 'react-router-dom';

const LoginController = () => {
    const navigate = useNavigate();

    // 로그인 시키는 함수
    const onLogin = async (email, password) => {
        const result = await handleLogin(email, password);

        if (result) {
            console.log('onLogin result>>>> ', result);
            const accessToken = result?.session.access_token;
            const refreshToken = result?.session.refresh_token;
            const expiresIn = result?.session.expires_in;

            setToken({ accessToken, refreshToken }); // 토큰 로컬 저장
            // 세션 관리 및 자동 토큰 갱신 타이머 시작
            manageSession(expiresIn, refreshToken, (newSession) => {
                if (newSession) {
                    setToken({
                        accessToken: newSession.access_token,
                        refreshToken: newSession.refresh_token,
                    });
                    const expiresAt = result?.session.expires_at;
                    setExpireTime(expiresAt); // 로컬스토리지에 만료 시간 알려주기
                } else {
                    console.log('Failed to refresh token.');
                    onLogout();
                }
            });
            navigate('/');
            window.location.reload();
        }
    };
    // 로그인 하고 회원 정보 세션에 저장하는 함수
    const onLogout = async () => {
        await handleLogout();
        removeToken();
    };
    // 로그인 만료 알려주는 함수

    // 로그인 만료 시 갱신해주는 함수

    return {
        onLogin,
        onLogout,
    };
};
export default LoginController;
