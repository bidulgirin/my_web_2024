// 공통 헤더 작성
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from '../style/about.module.css';

function About() {
    return (
        <div className={`gf_contentArea ${styles.lf_aboutLayout}`}>
            <div className={`gf_title`}>About me</div>
            <div className={styles.lf_aboutContents}>
                <div className={styles.lf_aboutText}>
                    <div className={styles.lf_abouts}>
                        <div className={styles.lf_subTitle}>Name</div>
                        <div>이경민</div>
                    </div>
                    <div className={styles.lf_abouts}>
                        <div className={styles.lf_subTitle}>관련경력</div>
                        <div>2년</div>
                    </div>
                    <div className={styles.lf_abouts}>
                        <div className={styles.lf_subTitle}>Work</div>
                        <div>html, css, javascript, React, sql</div>
                    </div>
                    <div className={styles.lf_abouts}>
                        <div className={styles.lf_subTitle}>studying</div>
                        <div>flutter, supabase, ...</div>
                    </div>
                </div>
                <div className={styles.lf_aboutAni}>
                    <div className={styles.lf_aboutBack}></div>
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
