import React, { useState } from 'react';
import styles from '../style/project.module.css';
import noimg from '../img/noimg.jpg';
import { MdDelete } from 'react-icons/md';
import { FaPencilRuler } from 'react-icons/fa';

const ProjectListItem = ({
    project,
    token,
    openEditModal = (id) => {},
    onDeleteProjects = (id) => {},
}) => {
    const [activeModalId, setActiveModalId] = useState(null); // 수정 모달 상태를 프로젝트 ID로 관리

    return (
        <div className={`${styles.projectCard} gf_content`} key={project.id}>
            {token && (
                <div className={`${styles.adminControls} setting_btns`}>
                    <button
                        className='gf_btn gf_btn_modify'
                        onClick={() => openEditModal(project)}
                    >
                        <FaPencilRuler />
                    </button>
                    <button
                        className='gf_btn gf_btn_delete'
                        onClick={() => onDeleteProjects(project?.id)}
                    >
                        <MdDelete />
                    </button>
                </div>
            )}
            {project.link ? (
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
                        <div className={styles.projectInfoTxt}>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                        </div>
                    </div>
                </a>
            ) : (
                <div className={styles.projectLink}>
                    <div className={styles.imageWrapper}>
                        <img src={project?.imgUrl || noimg} alt='Project' />
                    </div>
                    <div className={styles.projectInfo}>
                        <div className={styles.projectInfoTxt}>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectListItem;
