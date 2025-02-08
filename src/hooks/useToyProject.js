// 토이 프로젝트 불러오기
import React, { useState } from 'react';
import {
    getToyProjects,
    createToyProjects,
    updateToyProjects,
    deleteToyProjectSoft,
} from '../apis/ToyProject.js';

const ToyProjectController = () => {
    const [projects, setProjects] = useState([]); // 프로젝트 데이터를 담을 상태
    const [loading, setLoading] = useState(true);

    // project 불러오기
    const onGetToyProjects = async () => {
        try {
            const projectResult = await getToyProjects();
            if (projectResult) setProjects(projectResult);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // project 생성하기
    const onCreateProject = async (title, desc, imgUrl, link) => {
        await createToyProjects({ title, desc, imgUrl, link });
        await onGetToyProjects();
    };

    // 프로젝트 수정
    const onUpdateProjects = async (id, title, desc, imgUrl, link) => {
        await updateToyProjects({ id, title, desc, imgUrl, link });
        await onGetToyProjects();
    };

    // 프로젝트 삭제 함수
    const onDeleteProjects = async (id) => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            await deleteToyProjectSoft(id);
            await onGetToyProjects();
        }
    };

    return {
        loading,
        projects,
        onGetToyProjects,
        onCreateProject,
        onUpdateProjects,
        onDeleteProjects,
    };
};

export default ToyProjectController;
