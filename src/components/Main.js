import React from 'react';

import main_video from '../video/main.mp4';

function Main() {
    return (
        <section style={styles.main}>
            <video style={styles.video} autoPlay muted loop playsInline reverse>
                {/* 영상 파일 경로를 source 태그로 연결 */}
                <source src={main_video} type='video/mp4' />
                {/* 대체 메시지 */}
                Your browser does not support the video tag.
            </video>
            <div className='gf_contentArea' style={styles.overlay}>
                <div>
                    <div className='gf_title'>이게 바로 케찹체?</div>
                    <div className='gf_desc'>어쩌구저쩌구저쩌구용</div>
                </div>
            </div>
        </section>
    );
}

const styles = {
    main: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
    },
    video: {
        width: '100%',
        height: '100%',
        objectFit: 'cover', // 영상이 영역에 맞게 꽉 차도록 설정
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1, // 콘텐츠 뒤로 배치
    },
    overlay: {
        position: 'relative',
        display: 'flex',
        color: '#fff',
        zIndex: 1,
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
    },
};

export default Main;
