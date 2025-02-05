// 공통 헤더 작성
import React from 'react';
import styles from '../style/about.module.css';
import point_img from '../img/contact_img.png';
import point_gradientImg from '../img/gradient.png';
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
                            <div className={styles.txt_title}>introduce</div>
                            어쩌구 저쩌구 저는 이런 경험이 있고 이걸 지향하는
                            개발자이며 어디까지 목표를 삼고 있다는 포부가 담긴
                            메세지... 어쩌구 저쩌구 저는 이런 경험이 있고 이걸
                            지향하는 개발자이며 어디까지 목표를 삼고 있다는
                            포부가 담긴 메세지... 어쩌구 저쩌구 저는 이런 경험이
                            있고 이걸 지향하는 개발자이며 어디까지 목표를 삼고
                            있다는 포부가 담긴 메세지... 어쩌구 저쩌구 저는 이런
                            경험이 있고 이걸 지향하는 개발자이며 어디까지 목표를
                            삼고 있다는 포부가 담긴 메세지... 어쩌구 저쩌구 저는
                            이런 경험이 있고 이걸 지향하는 개발자이며 어디까지
                            목표를 삼고 있다는 포부가 담긴 메세지...
                        </div>
                        <div className={styles.txt}>
                            <div className={styles.txt_title}>Stack</div>
                            주로 다룰수있는게 뭐 있냐주로 다룰수있는게 뭐 있냐
                            주로 다룰수있는게 뭐 있냐 주로 다룰수있는게 뭐
                            있냐주로 다룰수있는게 뭐 있냐 주로 다룰수있는게 뭐
                            있냐 주로 다룰수있는게 뭐 있냐주로 다룰수있는게 뭐
                            있냐 주로 다룰수있는게 뭐 있냐 주로 다룰수있는게 뭐
                            있냐주로 다룰수있는게 뭐 있냐 주로 다룰수있는게 뭐
                            있냐 주로 다룰수있는게 뭐 있냐주로 다룰수있는게 뭐
                            있냐 주로 다룰수있는게 뭐 있냐 주로 다룰수있는게 뭐
                            있냐주로 다룰수있는게 뭐 있냐 주로 다룰수있는게 뭐
                            있냐 주로 다룰수있는게 뭐 있냐주로 다룰수있는게 뭐
                            있냐 주로 다룰수있는게 뭐 있냐 주로 다룰수있는게 뭐
                            있냐주로 다룰수있는게 뭐 있냐 주로 다룰수있는게 뭐
                            있냐
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
