//프로젝트 등록 컴포넌트
import React, { useState } from 'react';
import supabase from '../apis/supabase.js'; // supabase.js에서 설정한 supabase 클라이언트
import { uploadImage } from '../apis/uploadImage'; // 위에서 만든 이미지 업로드 함수

const CreateProject = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
  
  
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(''); // 업로드된 이미지의 URL 저장
  const [loading, setLoading] = useState(false); // 로딩 상태

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // 선택된 파일을 상태에 저장
  };
  
  // 이미지 업로드하면 url 리턴 받기
  const handleUpload = async () => {
    if (!file) {
      alert('파일을 선택해주세요.');
      return;
    }

    setLoading(true);
    try {
      const publicUrl = await uploadImage(file);
      setUrl(publicUrl); // 성공적으로 업로드된 이미지 URL 저장
      alert('파일 업로드 성공!');
    } catch (error) {
      alert('파일 업로드에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // 프로젝트 등록
  const createProject = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('project') // 'project' 테이블에 데이터 삽입
      .insert([{ title, content }]);
    console.log(data);
    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('Post created successfully!');
      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      <h1>프로젝트 등록할거임</h1>
      <form onSubmit={createProject}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <br />
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>이미지 업로드</h2>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload} disabled={loading}>
            {loading ? '업로드 중...' : '이미지 업로드'}
          </button>

          {url && (
            <div style={{ marginTop: '20px' }}>
              <p>업로드된 이미지 URL:</p>
              <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
              <div style={{ marginTop: '10px' }}>
                <img src={url} alt="Uploaded" style={{ maxWidth: '300px' }} />
              </div>
            </div>
          )}
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateProject;
