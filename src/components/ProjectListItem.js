import React, { useState } from 'react';
import styles from '../style/project.module.css';
import noimg from '../img/noimg.jpg';

const ProjectListItem = ({
    project,
    token,
    openEditModal = (id) => {},
    onDeleteProjects = (id) => {},
}) => {
    const [activeModalId, setActiveModalId] = useState(null); // 수정 모달 상태를 프로젝트 ID로 관리

    return (
        <div className={`${styles.projectCard} }`} key={project.id}>
            {token && (
                <div className={styles.adminControls}>
                    <button
                        className='gf_btn gf_btn_modify'
                        onClick={() => openEditModal(project)}
                    >
                        수정하기
                    </button>
                    <button
                        className='gf_btn gf_btn_delete'
                        onClick={() => onDeleteProjects(project?.id)}
                    >
                        삭제하기
                    </button>
                </div>
            )}

            <a
                href={project.link}
                target='_blank'
                rel='noreferrer'
                className={styles.projectLink}
            >
                <div className={styles.imageWrapper}>
                    <img src={project?.imgUrl || noimg} alt='Project' />
                </div>
                <div className={styles.projectInfo}>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                </div>
            </a>
        </div>
    );
};

export default ProjectListItem;
