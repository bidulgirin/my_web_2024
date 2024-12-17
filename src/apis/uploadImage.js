// 이미지 업로드 api
import supabase from '../apis/supabase.js'; // supabase.js에서 설정한 supabase 클라이언트

/**
 * Supabase 스토리지에 파일 업로드 후 public URL 반환
 * @param {File} file - 업로드할 파일 객체
 * @param {string} bucketName - 스토리지 버킷 이름
 * @returns {Promise<string>} - 파일의 public URL
 */

const sanitizeFileName = (fileName) => {
  return fileName
    .replace(/[^a-zA-Z0-9._-]/g, '_') // 특수 문자 제거 (허용: a-z, A-Z, 0-9, ., _, -)
    .replace(/_{2,}/g, '_')           // 연속된 밑줄 제거
    .trim();
};

export const uploadImage = async (file, bucketName = process.env.REACT_APP_PUBLIC_STORAGE_BUCKET) => {
  const cleanedFileName = sanitizeFileName(file.name);
  const fileName = `${Date.now()}_${cleanedFileName}`; // 파일 이름 고유화
  const token = localStorage.getItem('access_token'); // 로컬 스토리지에서 토큰 가져오기
  try {
    console.log("bucketName", bucketName);
    // 파일을 Supabase Storage에 업로드
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file, {
        cacheControl: '3600', // 캐시 시간 설정
        upsert: false, // 덮어쓰기 하지 않음
        headers: {
          Authorization: `Bearer ${token}`, // Authorization 헤더에 JWT 토큰 추가
        },
      });

    if (error) {
      console.error('Upload Error:', error);
      throw error;
    }

    console.log('Upload Success:', data);

    // Public URL 가져오기
    const { data: publicUrlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(fileName);

    if (!publicUrlData || !publicUrlData.publicUrl) {
      throw new Error('Failed to retrieve the public URL');
    }

    return publicUrlData.publicUrl; // Public URL 반환
  } catch (error) {
    console.error('Error uploading file:', error.message);
    throw error; // 에러를 호출한 곳으로 반환
  }
};