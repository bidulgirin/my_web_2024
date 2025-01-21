// 이메일 보내기
import React, { useState } from 'react';
import supabase from '../lib/supabase'; // supabase.js에서 설정한 supabase 클라이언트

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
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
            <h1>이메일보낼거임</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type='text'
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
                <button type='submit'>Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreatePost;
