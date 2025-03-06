import React, { useState } from 'react';
import { uploadImage } from '../hooks/useUploadImage'; // 위에서 만든 이미지 업로드 함수

const ProjectForm = ({
    EditContent,
    closeModal,
    isEdit,
    loading,
    onCreateProject = (title, desc, imgUrl, link) => {},
    onUpdateProjects = (id, title, desc, imgUrl, link) => {},
}) => {
    // 등록, 수정 할때 필요한 값들
    const [id, setId] = useState(EditContent?.id ?? '');
    const [title, setTitle] = useState(EditContent?.title ?? '');
    const [desc, setDesc] = useState(EditContent?.desc ?? '');
    const [link, setLink] = useState(EditContent?.link ?? '');
    const [imgUrl, setImgUrl] = useState(EditContent?.imgUrl ?? '');
    const [file, setFile] = useState(EditContent?.file ?? null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // 선택된 파일을 상태에 저장
    };

    // 이미지 업로드하면 url 리턴 받기
    const handleUpload = async () => {
        if (!file) {
            alert('파일을 선택해주세요.');
            return;
        }
        try {
            const publicUrl = await uploadImage(file);
            setImgUrl(publicUrl); // 성공적으로 업로드된 이미지 URL 저장
        } catch (error) {
            console.error(error);
            alert('파일 업로드에 실패했습니다.');
        } finally {
        }
    };

    return (
        <form>
            <div className='gf_form'>
                <label>
                    <div className='gf_formTitle'>제목</div>
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
                    <div className='gf_formTitle'>설명</div>
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
                    <div className='gf_formTitle'>링크</div>
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
                    type='button'
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
            {isEdit ? (
                <div
                    className='gf_btn gf_btn_modify'
                    onClick={() => {
                        onUpdateProjects(id, title, desc, imgUrl, link);
                        closeModal();
                    }}
                >
                    수정하기
                </div>
            ) : (
                <div
                    className={`gf_btn gf_btn_normal`}
                    onClick={() => {
                        onCreateProject(title, desc, imgUrl, link);
                        closeModal();
                    }}
                >
                    등록하기
                </div>
            )}
        </form>
    );
};

export default ProjectForm;
