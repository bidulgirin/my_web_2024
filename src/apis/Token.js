
/**
 * 로컬 스토리지에서 JWT 토큰 가져오기
 * @returns {string | null} - 저장된 JWT 토큰
 */
export const getToken = () => {
  return localStorage.getItem('access_token');
};

/**
 * 로컬 스토리지에 JWT 토큰 저장하기
 * @param {string} token - 저장할 JWT 토큰
 */
export const setToken = (token) => {
  localStorage.setItem('access_token', token);
};

/**
 * 로컬 스토리지에서 JWT 토큰 삭제하기
 */
export const removeToken = () => {
  localStorage.removeItem('access_token');
};

export const token = getToken();