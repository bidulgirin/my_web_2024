/**
 * 로컬 스토리지에서 토큰 객체 가져오기
 * @returns {object | null} - 저장된 토큰 객체 { accessToken, refreshToken }
 */
export const getToken = () => {
    const tokenString = localStorage.getItem('tokens');
    return tokenString ? JSON.parse(tokenString) : null;
};

/**
 * 로컬 스토리지에 토큰 객체 저장하기
 * @param {object} tokens - 저장할 토큰 객체 { accessToken, refreshToken }
 */
export const setToken = ({ accessToken, refreshToken }) => {
    const tokenData = {
        accessToken,
        refreshToken,
    };
    localStorage.setItem('tokens', JSON.stringify(tokenData));
};

/**
 * 로컬 스토리지에서 토큰 삭제하기
 */
export const removeToken = () => {
    localStorage.removeItem('tokens');
};

/**
 * 로컬 스토리지에서 Access Token 가져오기
 * @returns {string | null} - 저장된 Access Token
 */
export const getAccessToken = () => {
    const tokens = getToken();
    return tokens?.accessToken || null;
};

/**
 * 로컬 스토리지에서 Refresh Token 가져오기
 * @returns {string | null} - 저장된 Refresh Token
 */
export const getRefreshToken = () => {
    const tokens = getToken();
    return tokens?.refreshToken || null;
};

// 현재 Access Token 가져오기
export const token = getAccessToken();

//console.log('token', token);
