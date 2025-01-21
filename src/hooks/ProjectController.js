//프로젝트 등록 컴포넌트
import React, { useState } from 'react';
import {
    getProjects,
    createProjects,
    updateProjects,
    deleteProjectSoft,
} from '../apis/project.js';

const ProjectController = () => {
    const [projects, setProjects] = useState([]); // 프로젝트 데이터를 담을 상태
    const [loading, setLoading] = useState(true);

    // project 불러오기
    const onGetProjects = async () => {
        try {
            const projectResult = await getProjects();
            if (projectResult) setProjects(projectResult);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // project 생성하기
    const onCreateProject = async (title, desc, imgUrl, link) => {
        await createProjects({ title, desc, imgUrl, link });
        await onGetProjects();
    };

    // 프로젝트 수정
    const onUpdateProjects = async (id, title, desc, imgUrl, link) => {
        await updateProjects({ id, title, desc, imgUrl, link });
        await onGetProjects();
    };

    // 프로젝트 삭제 함수
    const onDeleteProjects = async (id) => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            await deleteProjectSoft(id);
            await onGetProjects();
        }
    };

    return {
        loading,
        projects,
        onGetProjects,
        onCreateProject,
        onUpdateProjects,
        onDeleteProjects,
    };
};

export default ProjectController;
