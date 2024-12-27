// 프로젝트 리스트
import React, { useState, useEffect } from 'react';
import supabase from '../apis/supabase.js'; // supabase.js에서 설정한 supabase 클라이언트
import { token } from '../apis/Token.js';
import useModal from '../apis/useModal';
import Modal from './Modal';
import CreateProject from './CreateProject.js';
import NoData from '../components/NoData.js';
import noimg from '../img/noimg.jpg';
// css
import styles from '../style/project.module.css';

// const 는 Dom 이 반복되는 구조에서 사용한다잉
const Project = () => {
    const [projects, setProjects] = useState([]); // 프로젝트 데이터를 담을 상태
    const [activeModalId, setActiveModalId] = useState(null); // 수정 모달 상태를 프로젝트 ID로 관리
    const {
        isOpen: isCreateModalOpen,
        openModal: openCreateModal,
        closeModal: closeCreateModal,
    } = useModal();

    // 프로젝트등록한 데이터 가져오기
    useEffect(() => {
        const fetchProjects = async () => {
            const { data, error } = await supabase.from('project').select('*');

            if (error) {
                console.error('Error fetching data:', error);
            } else {
                setProjects(data);
            }
        };

        fetchProjects();
    }, []);

    // 특정 프로젝트 수정 모달 열기
    const openEditModal = (projectId) => {
        setActiveModalId(projectId);
    };

    // 수정 모달 닫기
    const closeEditModal = () => {
        setActiveModalId(null);
    };

    // 삭제 기능 만들어야함

    return (
        <div className={styles.lf_projectLayout}>
            <h1>PROJECT</h1>
            <ul className='gf_contents'>
                {projects?.length > 0
                    ? projects?.map((project) => (
                          <li className='gf_content' key={project.id}>
                              {token && (
                                  <>
                                      <button
                                          className='gf_btn'
                                          onClick={() =>
                                              openEditModal(project.id)
                                          }
                                      >
                                          수정하기
                                      </button>
                                      <button className='gf_btn gf_btn_delete'>
                                          삭제하기
                                      </button>
                                      <Modal
                                          isOpen={activeModalId === project.id}
                                          closeModal={closeEditModal}
                                      >
                                          <CreateProject
                                              id={project?.id || null}
                                              title={project?.title || ''}
                                              desc={project?.desc || ''}
                                              link={project?.link || ''}
                                              imgUrl={project?.imgUrl || ''}
                                          />
                                      </Modal>
                                  </>
                              )}
                              <a
                                  href={project.link}
                                  target='_blank'
                                  rel='noreferrer'
                              >
                                  <div className='gf_contentImgArea'>
                                      <img
                                          className='gf_project_img'
                                          src={project?.imgUrl || noimg}
                                          alt='Project'
                                      />
                                  </div>
                                  <div className='title'>{project.title}</div>
                                  <div>{project.desc}</div>
                              </a>
                          </li>
                      ))
                    : NoData('프로젝트')}
            </ul>
            {/* 관리자만 보이도록 설정 ( 토큰 유무 ) */}
            {token && (
                <>
                    <button className='gf_btn' onClick={openCreateModal}>
                        프로젝트 등록하기
                    </button>
                    <Modal
                        isOpen={isCreateModalOpen}
                        closeModal={closeCreateModal}
                    >
                        <CreateProject />
                    </Modal>
                </>
            )}
        </div>
    );
};

export default Project;
