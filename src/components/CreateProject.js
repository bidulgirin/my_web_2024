//프로젝트 등록 컴포넌트
import React, { useState } from 'react';
import supabase from '../apis/supabase.js'; // supabase.js에서 설정한 supabase 클라이언트

const CreateProject = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const createProject = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('posts') // 'posts' 테이블에 데이터 삽입
      .insert([{ title, content }]);

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
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateProject;
