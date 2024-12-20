// 공통 네비게이션 작성
import React from 'react';

function Main() {
    return (
        <section style={styles.main}>
            <div className='gf_contentArea'>메인이다</div>
        </section>
    );
}

const styles = {
    main: {
        width: '100%',
        height: '100vh',
        background: 'var(--main-color)',
    },
};

export default Main;
