import { getToken, removeToken } from './Token'; // 토큰 유틸리티 가져오기
import supabase from './supabase'; // supabase.js 가져오기
/**
 * 로그아웃 시키기
 */

export const logout = async () => {
  // 사용자에게 로그아웃 확인 메시지 표시
  const confirmLogout = window.confirm("로그아웃 하시겠습니까?");
  
  if (confirmLogout) {
      try {
          // Supabase를 사용해 로그아웃 처리
          const { error } = await supabase.auth.signOut();
          
          if (error) {
              console.error("로그아웃 중 에러가 발생했습니다:", error.message);
              alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
              return;
          }

          // 토큰 제거 및 페이지 새로고침
          removeToken();
          window.location.reload();
      } catch (error) {
          console.error("로그아웃 처리 중 오류가 발생했습니다:", error);
          alert("예기치 못한 오류가 발생했습니다. 다시 시도해주세요.");
      }
  } else {
      // 사용자가 로그아웃을 취소했을 경우
      alert("로그아웃이 취소되었습니다.");
  }
};
