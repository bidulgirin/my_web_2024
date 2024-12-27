// 공통 헤더 작성
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from '../style/about.module.css';

function About() {
    return (
        <div className={` ${styles.lf_aboutLayout}`}>
            <div className={styles.lf_aboutText}>왼쪽 컨텐츠</div>
            <div className={styles.lf_aboutAni}>
                <div style={{ width: '300px', height: '300px' }}>
                    <DotLottieReact
                        src='https://lottie.host/d4bdba7c-9c60-403d-9754-9f32a5f964c2/iFHVJVJor9.json'
                        loop
                        autoplay
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
