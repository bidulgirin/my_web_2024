import React from 'react';
import ProjectListItem from './ProjectListItem';

const ProjectList = ({
    projectData,
    loading,
    token = { token },
    openEditModal = { openEditModal },
    onDeleteProjects = (id) => {},
}) => {
    return (
        <div>
            {projectData?.length >= 1 ? (
                <ul className='flex flex-col gap-6'>
                    {(projectData ?? []).map((project) => {
                        return (
                            <ProjectListItem
                                project={project}
                                token={token}
                                key={project?.id}
                                openEditModal={openEditModal}
                                onDeleteProjects={onDeleteProjects}
                            />
                        );
                    })}
                </ul>
            ) : (
                <div>{loading ? 'Loading...' : '데이터가 없습니다'}</div>
            )}
        </div>
    );
};

export default ProjectList;
