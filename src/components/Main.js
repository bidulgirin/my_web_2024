import React from 'react';
import styles from '../style/main.module.css';
import main_video from '../video/main.mp4';
import main_img from '../img/Monet_-_Impression,_Sunrise.jpg';
function Main() {
    return (
        <section className={styles.main}>
            <div className={styles.main_layout}>
                {/* <video className={styles.video} autoPlay muted loop playsInline>
                    <source src={main_video} type='video/mp4' />
                    Your browser does not support the video tag.
                </video> */}

                <img 
                    className={styles.video}
                    src={main_img} 
                    alt='main_video' 
                />
                <div className={(styles.gf_desc, styles.lf_til)}>- Claude Monet -</div>
                <div className={(styles.gf_title, styles.lf_title)}>
                Color is my day-long obsession,<br /> joy and torment.
                </div>
            </div>

            <div className='text_layout'></div>
        </section>
    );
}

export default Main;
