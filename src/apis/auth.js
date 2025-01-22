import supabase from '../lib/supabase'; // supabase.js에서 설정한 supabase 클라이언트
import { removeToken } from './Token';

// 로그인
export const handleLogin = async (email, password) => {
    try {
        // Supabase의 signIn 메서드를 사용하여 로그인
        const result = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (result.error?.status == 400) {
            alert('올바른 계정을 입력해주세요');
            return false;
        }

        return result.data;
    } catch (error) {
        console.log(error);
    }
};
// 로그아웃 하기
export const handleLogout = async () => {
    // 사용자에게 로그아웃 확인 메시지 표시
    const confirmLogout = window.confirm('로그아웃 하시겠습니까?');

    if (confirmLogout) {
        try {
            // Supabase를 사용해 로그아웃 처리
            await supabase.auth.signOut();

            // 토큰 제거 및 페이지 새로고침
            removeToken();
            window.location.reload();
        } catch (error) {
            console.error('로그아웃 처리 중 오류가 발생했습니다:', error);
            alert('예기치 못한 오류가 발생했습니다. 다시 시도해주세요.');
        }
    }
};

let refreshTimer = null; // 타이머 저장용 변수

/**
 * 로그인 후 세션을 관리하고 토큰 갱신을 자동으로 처리
 * @param {function} onSessionUpdate - 세션 갱신 시 호출되는 콜백 (UI 업데이트에 사용)
 */
export const manageSession = async (onSessionUpdate) => {
    // 현재 세션 가져오기
    const {
        data: { session },
        error,
    } = await supabase.auth.getSession();

    if (error) {
        console.error('Failed to get session:', error);
        return;
    }

    if (session) {
        // 세션 갱신 타이머 시작
        startRefreshTimer(session, onSessionUpdate);
    }

    // 세션 변경 감지 (로그아웃, 로그인 등)
    supabase.auth.onAuthStateChange((event, updatedSession) => {
        if (updatedSession) {
            clearTimeout(refreshTimer); // 기존 타이머 제거
            startRefreshTimer(updatedSession, onSessionUpdate);
        } else {
            clearTimeout(refreshTimer);
        }
    });
};

/**
 * 세션 갱신 타이머를 설정
 * @param {object} session - Supabase 세션 객체
 * @param {function} onSessionUpdate - 세션 갱신 시 호출되는 콜백
 */
export const startRefreshTimer = (session, onSessionUpdate) => {
    const expiresIn = session.expires_in * 1000; // 만료 시간 (ms 단위)
    const refreshBefore = expiresIn - 60000; // 1분 전에 갱신

    console.log(`Token will refresh in ${refreshBefore / 1000}s`);

    // 타이머 설정
    refreshTimer = setTimeout(async () => {
        const { data, error } = await supabase.auth.refreshSession();
        if (error) {
            console.error('Failed to refresh session:', error);
            return;
        }

        console.log('Token refreshed successfully');
        if (onSessionUpdate) onSessionUpdate(data.session); // UI 업데이트 등 처리
        startRefreshTimer(data.session, onSessionUpdate); // 새 세션으로 타이머 재설정
    }, refreshBefore);
};

// supabase 리프레시 토큰 코드 주셈

// export const refreshAccessToken = async () => {
//     try {
//         const result = await supabase.auth.refreshSession();
//         console.log('연장됐냐?', result);
//         return result.data;
//     } catch (error) {
//         console.log(error);
//     }
// };
