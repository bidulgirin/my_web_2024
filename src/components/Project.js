// src/Project.js

import React, { useState, useEffect } from 'react';
import supabase from '../apis/supabase.js'; // supabase.js에서 설정한 supabase 클라이언트

const Project = () => {
  const [projects, setProjects] = useState([]); // 프로젝트 데이터를 담을 상태

  // 컴포넌트가 마운트되었을 때 데이터 가져오기
  useEffect(() => {
    const fetchProjects = async () => {
      // 'project' 테이블에서 모든 데이터를 가져옵니다.
      const { data, error } = await supabase
        .from('project') // 'project' 테이블에서 데이터 가져오기
        .select('*'); // 모든 필드 선택

      console.log("data!", data);

      if (error) {
        console.error('Error fetching data:', error); // 에러 처리
      } else {
        setProjects(data); // 데이터를 상태에 저장
      }
    };

    fetchProjects(); // 데이터 가져오기 함수 호출
  }, []); // 빈 배열로 두어 컴포넌트가 처음 렌더링될 때만 실행

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.length > 0 ? (
          projects.map((project) => (
            <li key={project.id}>{project.title}</li> // 프로젝트 이름을 리스트로 표시
          ))
        ) : (
          <p>No projects available.</p> // 데이터가 없을 경우 메시지 표시
        )}
      </ul>
    </div>
  );
};

export default Project;
