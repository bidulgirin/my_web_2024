// 공통 헤더 작성
import React from 'react';
import styles from '../style/about.module.css';
import point_img from '../assets/img/contact_img.png';
import point_gradientImg from '../assets/img/gradient.png';
function About() {
    return (
        <section className={styles.lf_aboutLayoutContainer}>
            <img
                src={point_gradientImg}
                className={styles.lf_background}
                alt='gradient'
            />
            <div className={`${styles.lf_aboutLayout} gf_contentArea`}>
                <div className='gf_title'>
                    <div>About</div>
                    <div>Me</div>
                </div>
                <div className={styles.lf_work_experience_contents}>
                    <div className={styles.lf_work_experience_txt}>
                        <div className={styles.txt}>
                            <div className={styles.txt_title}>introduce</div>웹
                            프론트엔드 개발자로서, 단순한 UI 구현을 넘어 디자인
                            감각을 살린 인터페이스를 만드는 데 강점을 가지고
                            있습니다. SVG 그래픽 활용, 간단한 배너 제작 등
                            디자인 작업도 무리 없이 진행할 수 있으며, 개발과
                            디자인을 조화롭게 결합하는 것이 저의 장점입니다.
                            프론트엔드 개발자로서의 역량을 키우기 위해 React,
                            Vue 등 최신 프레임워크를 학습하고 있으며, 사용자
                            경험(UX)을 고려한 UI 설계에도 관심을 갖고 있습니다.
                            디자인과 개발의 경계를 허물고, 보다 세련되고
                            직관적인 웹 환경을 만드는 것을 목표로 하고 있습니다.
                            <div className={styles.txt_title}>studying</div>
                            Next.js : 서버 사이드 렌더링(SSR)과 정적 사이트
                            생성(SSG)을 지원하는 Next.js에 대한 이해가 있으며,
                            페이지 기반 라우팅 시스템을 활용한 효율적인 페이지
                            구성이 가능합니다.
                            <br />
                            Vue.js : 템플릿 문법과 반응형 데이터 모델을 이해하고
                            있으며, Vue Router 및 Pinia 상태 관리를 활용할 수
                            있습니다. <br />
                            Svelte : Svelte의 컴파일러 기반 접근 방식을 이해하고
                            있으며, Reactivity 시스템을 활용해 상태 관리와 UI
                            업데이트를 효율적으로 처리할 수 있습니다. 앞으로의
                            프로젝트에서 점차적으로 더 활용할 예정입니다. 🖥️🚀
                        </div>
                        <div className={styles.txt}>
                            <div className={styles.txt_title}>Stack</div>
                            CSS : Flexbox, Grid를 활용한 레이아웃 구성에
                            익숙하며, 반응형 디자인 및 기본적인 애니메이션을
                            구현할 수 있습니다. <br />
                            JavaScript (ES6+) : 최신 JavaScript 문법을 사용하여
                            동적인 UI를 구현할 수 있으며, 비동기 처리(Promise,
                            async/await) 및 이벤트 기반 프로그래밍에 대한 이해가
                            있습니다. <br />
                            React : 컴포넌트 기반 아키텍처에 익숙하며, 상태
                            관리(Context API, Zustand)를 활용한 UI 개발 경험이
                            있습니다. <br />
                            TypeScript : 정적 타입 시스템을 통해 코드의 안정성을
                            높이고, 인터페이스와 유틸리티 타입을 활용할 수
                            있습니다. <br />
                            SVG & 디자인 툴 : SVG를 활용한 아이콘 및 그래픽
                            제작이 가능하며, 간단한 배너 디자인 작업도 수행할 수
                            있습니다. <br />
                            API 통신 : Fetch API 및 Axios를 활용한 RESTful API
                            통신이 가능하며, 데이터 페칭과 상태 관리의 개념을
                            이해하고 있습니다. Git & 협업 툴 : Git을 사용한 버전
                            관리를 경험했으며, GitHub 및 GitLab을 활용한 협업
                            경험이 있습니다. <br />
                            UI 라이브러리 : Tailwind CSS, MUI, Ant Design 등의
                            UI 프레임워크를 활용하여 빠르고 일관된 디자인을
                            적용할 수 있습니다.
                        </div>
                    </div>
                    <div className={styles.lf_work_experience_img}>
                        <img src={point_img} alt='about_me' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
