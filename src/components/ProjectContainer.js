// 프로젝트 리스트
import React, { useState, useEffect } from 'react';
import { token } from '../apis/Token.js';
import useModal from '../apis/useModal.js';
import Modal from './Modal.js';
import styles from '../style/project.module.css';
import ProjectList from './ProjectList.js';
import ProjectForm from './ProjectForm.js';
// controller
import ProjectController from '../hooks/ProjectController.js';

// const 는 Dom 이 반복되는 구조에서 사용한다잉
const ProjectContainer = () => {
    // project controller
    const {
        projects,
        onGetProjects,
        onCreateProject,
        onUpdateProjects,
        onDeleteProjects,
    } = ProjectController();

    // modal
    const {
        isOpen: isCreateModalOpen,
        openModal: openCreateModal,
        closeModal: closeCreateModal,
    } = useModal();

    const [isEdit, setIsEdit] = useState(false); // 수정 모달 상태를 프로젝트 ID로 관리
    const [EditContent, isEditContent] = useState({});
    // 프로젝트 등록 모달
    const onOpenCreateModal = () => {
        setIsEdit(false);
        openCreateModal();
        isEditContent({});
    };
    const openEditModal = (project) => {
        setIsEdit(true);
        openCreateModal();
        isEditContent(project);
    };

    // 수정 모달 닫기
    const closeEditModal = () => {
        setIsEdit(false);
        closeCreateModal();
    };

    useEffect(() => {
        onGetProjects();
    }, []);

    return (
        <div className={`${styles.projectContainer}`}>
            <div className='gf_contentArea'>
                <div className='gf_title'>기여한 프로젝트</div>
                {token && (
                    <>
                        <button
                            className='gf_btn gf_btn_normal'
                            onClick={onOpenCreateModal}
                        >
                            등록하기
                        </button>
                    </>
                )}
                <ProjectList
                    projectData={projects}
                    loading
                    token={token}
                    openEditModal={(id) => {
                        openEditModal(id);
                    }}
                    onDeleteProjects={(id) => {
                        onDeleteProjects(id);
                    }}
                />
                {token && (
                    <>
                        {/* 등록시에 사용할 컴포넌트 */}
                        <Modal
                            isOpen={isCreateModalOpen}
                            closeModal={closeCreateModal}
                        >
                            <ProjectForm
                                isEdit={isEdit}
                                EditContent={EditContent}
                                onCreateProject={(
                                    title,
                                    desc,
                                    imgUrl,
                                    link
                                ) => {
                                    onCreateProject(title, desc, imgUrl, link);
                                }}
                                onUpdateProjects={(
                                    id,
                                    title,
                                    desc,
                                    imgUrl,
                                    link
                                ) => {
                                    onUpdateProjects(
                                        id,
                                        title,
                                        desc,
                                        imgUrl,
                                        link
                                    );
                                }}
                                onDeleteProjects={(id) => {
                                    onDeleteProjects(id);
                                }}
                            />
                        </Modal>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProjectContainer;
