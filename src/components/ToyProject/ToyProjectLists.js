import React from 'react';

const ToyProjectLists = () => {
    const exampleData = [
        {
            id: 1,
            name: 'React 포트폴리오 사이트',
            description:
                'React와 TailwindCSS를 활용한 개인 포트폴리오 웹사이트.',
            tech_stack: ['React', 'TailwindCSS', 'Supabase'],
            status: '완료',
            created_at: '2024-12-01',
        },
        {
            id: 2,
            name: 'Vue Task Manager',
            description: 'Vue3와 Pinia 상태 관리를 활용한 작업 관리 앱.',
            tech_stack: ['Vue3', 'Pinia', 'Firebase'],
            status: '진행 중',
            created_at: '2025-01-10',
        },
        {
            id: 3,
            name: 'AI 챗봇',
            description: 'OpenAI API를 활용한 간단한 AI 챗봇 개발.',
            tech_stack: ['Next.js', 'GPT-4 API', 'Prisma'],
            status: '아이디어 단계',
            created_at: '2025-02-05',
        },
        {
            id: 4,
            name: 'Markdown 블로그',
            description: 'Markdown 기반의 정적 블로그 사이트 제작.',
            tech_stack: ['Next.js', 'MDX', 'Vercel'],
            status: '완료',
            created_at: '2024-11-15',
        },
        {
            id: 5,
            name: '게임 리더보드 시스템',
            description: '실시간 점수 랭킹을 지원하는 게임 리더보드 API.',
            tech_stack: ['Node.js', 'Express', 'PostgreSQL'],
            status: '진행 중',
            created_at: '2025-01-20',
        },
    ];
    return (
        <ul>
            {exampleData &&
                exampleData.map((project) => (
                    <li key={project.id}>
                        <strong>{project.name}</strong> - {project.description}
                        <br />
                        <small>
                            기술 스택: {project.tech_stack.join(', ')}
                        </small>
                        <br />
                        <small>
                            상태: {project.status} | 생성일:{' '}
                            {project.created_at}
                        </small>
                    </li>
                ))}
        </ul>
    );
};

export default ToyProjectLists;
