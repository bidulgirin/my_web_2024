//프로젝트 등록 컴포넌트
import React, { useState, useEffect } from 'react';
import supabase from '../apis/supabase.js'; // supabase.js에서 설정한 supabase 클라이언트
import { uploadImage } from '../apis/uploadImage.js'; // 위에서 만든 이미지 업로드 함수

const HandleProject = ({
    id: initialID,
    title: initialTitle,
    desc: initialDesc,
    link: initialLink,
    imgUrl: initialImgUrl,
    id,
    onSubmit,
}) => {
    const [projects, setProjects] = useState([]); // 프로젝트 데이터를 담을 상태
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [message, setMessage] = useState('');
    const [link, setLink] = useState('');
    const [file, setFile] = useState(null);
    const [imgUrl, setImgUrl] = useState('');
    const [loading, setLoading] = useState(false); // 로딩 상태

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // 선택된 파일을 상태에 저장
    };

    // 초기값 설정
    useEffect(() => {
        setTitle(initialTitle || '');
        setDesc(initialDesc || '');
        setLink(initialLink || '');
        setImgUrl(initialImgUrl || '');
    }, [initialTitle, initialDesc, initialLink, initialImgUrl]);

    useEffect(() => {
        const fetchProjects = async () => {
            const { data, error } = await supabase.from('project').select('*');
            if (error) {
                console.error('Error fetching data:', error);
            } else {
                setProjects(data); // 상태를 업데이트하여 UI 갱신
            }
        };
        fetchProjects(); // 프로젝트 가져오기
    }, [projects]); // projects 상태가 변경될 때마다 실행

    // 이미지 업로드하면 url 리턴 받기
    const handleUpload = async () => {
        if (!file) {
            alert('파일을 선택해주세요.');
            return;
        }

        setLoading(true);
        try {
            const publicUrl = await uploadImage(file);
            setImgUrl(publicUrl); // 성공적으로 업로드된 이미지 URL 저장
            alert('파일 업로드 성공!');
        } catch (error) {
            alert('파일 업로드에 실패했습니다.');
        } finally {
            setLoading(false);
        }
    };

    const refreshProjects = async () => {
        const { data, error } = await supabase.from('project').select('*');
        if (!error) {
            setProjects(data); // projects 상태를 새로 갱신
        }
    };

    // 프로젝트 등록 및 수정
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            // 수정 로직
            const { data, error } = await supabase
                .from('project')
                .update([{ title, desc, imgUrl, link }])
                .eq('id', id);

            if (error) {
                setMessage(`Error: ${error.message}`);
            } else {
                setMessage('수정이 완료되었습니다');
                console.log('data', id, title, desc, imgUrl, link);
                refreshProjects(); // 데이터 새로고침
            }
        } else {
            // 등록 로직
            const { data, error } = await supabase
                .from('project')
                .insert([{ title, desc, imgUrl, link }]);

            if (error) {
                setMessage(`Error: ${error.message}`);
            } else {
                setMessage('Project created successfully!');
                refreshProjects(); // 데이터 새로고침
            }
        }
    };

    // 프로젝트 삭제 함수
    const deleteProject = async (id) => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            const { error } = await supabase
                .from('project')
                .delete()
                .match({ id });
            if (error) {
                console.error('프로젝트 삭제 실패:', error);
            } else {
                // 로컬 상태에서 삭제
                console.log('프로젝트가 삭제되었습니다.');
            }
        }
    };

    return (
        <section className='gf_formLayout'>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className='gf_form'>
                    <label>
                        <span className='gf_formTitle'>제목</span>
                        <input
                            type='text'
                            value={title}
                            className='gf_input'
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className='gf_form'>
                    <label>
                        <span className='gf_formTitle'>설명</span>
                        <textarea
                            value={desc}
                            className='gf_input'
                            onChange={(e) => setDesc(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className='gf_form'>
                    <label>
                        <span className='gf_formTitle'>링크</span>
                        <input
                            className='gf_input'
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </label>
                </div>
                <div className='gf_form'>
                    <input type='file' onChange={handleFileChange} />
                    <br />
                    <button
                        className='gf_btn gf_btn_upload'
                        onClick={handleUpload}
                        disabled={loading}
                    >
                        {loading ? '업로드 중...' : '선택한 이미지 업로드'}
                    </button>

                    {imgUrl && (
                        <div>
                            <div className='gf_formTitle'>업로드된 이미지</div>
                            {/* <input 
                        type="text" 
                        value={imgUrl}
                        onChange={(e) => setImgUrl(e.target.value)}
                    /> */}
                            <div>
                                <img
                                    src={imgUrl}
                                    alt='Uploaded'
                                    style={{ maxWidth: '100px' }}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className='gf_form'>
                    <label>
                        <span className='gf_formTitle'>이미지url</span>
                        <input
                            className='gf_input'
                            value={imgUrl}
                            onChange={(e) => setImgUrl(e.target.value)}
                        />
                    </label>
                </div>
                <button
                    className={`gf_btn ${id ? 'gf_btn_modify' : 'gf_btn_normal'}`}
                    type='submit'
                >
                    {id ? '수정하기' : '등록하기'}
                </button>

                <button
                    className='gf_btn gf_btn_delete'
                    onClick={() => deleteProject(id)}
                >
                    삭제하기
                </button>
            </form>
        </section>
    );
};

export default HandleProject;
