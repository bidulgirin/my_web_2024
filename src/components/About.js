// 공통 헤더 작성
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from '../style/about.module.css';

function About() {
    return (
        <div className={`gf_contentArea ${styles.lf_aboutLayout}`}>
            <div className={`gf_title ${styles.lf_mainTitle}`}>About me</div>
            <div className={styles.lf_aboutContents}>
                <div className={styles.lf_aboutText}>
                    <div className={`${styles.lf_abouts} ${styles.fadeInUp}`}>
                        <div className={styles.lf_subTitle}>Name</div>
                        <div className={styles.lf_content}>이경민</div>
                    </div>
                    <div className={`${styles.lf_abouts} ${styles.fadeInUp}`}>
                        <div className={styles.lf_subTitle}>Experience</div>
                        <div className={styles.lf_content}>2년</div>
                    </div>
                    <div className={`${styles.lf_abouts} ${styles.fadeInUp}`}>
                        <div className={styles.lf_subTitle}>Work</div>
                        <div className={styles.lf_skillContainer}>
                            {['HTML', 'CSS', 'JavaScript', 'React', 'SQL'].map((skill, index) => (
                                <span key={index} className={styles.lf_skillBadge}>{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className={`${styles.lf_abouts} ${styles.fadeInUp}`}>
                        <div className={styles.lf_subTitle}>studying</div>
                        <div className={styles.lf_content}>flutter, supabase, ...</div>
                    </div>
                </div>
                <div className={styles.lf_aboutAni}>
                    <div className={styles.lf_aboutBack}></div>
                    <DotLottieReact
                        src="https://lottie.host/2be86129-cc4b-431a-b843-80860c47a29f/Aed3bMIs7r.lottie"
                        loop
                        autoplay
                    />

                </div>
            </div>
        </div>
    );
}

export default About;
