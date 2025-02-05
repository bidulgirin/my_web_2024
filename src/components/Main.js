import React from 'react';
import styles from '../style/main.module.css';
import main_img from '../img/main_logo.png';
function Main() {
    return (
        <section className={styles.main}>
            <div className={styles.main_img_layout}>
                <img src={main_img} alt='Lee.K.Y portfolio' />
            </div>
        </section>
    );
}

export default Main;
