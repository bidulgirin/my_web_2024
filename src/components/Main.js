import React from 'react';
import '../style/main.css';
import main_video from '../video/main.mp4';

function Main() {
    return (
        <section className='main'>
            <div className='video_layout'>
                <video
                    className='video'
                    autoPlay
                    muted
                    loop
                    playsInline
                    reverse
                >
                    {/* 영상 파일 경로를 source 태그로 연결 */}
                    <source src={main_video} type='video/mp4' />
                    {/* 대체 메시지 */}
                    Your browser does not support the video tag.
                </video>
                <div className='gf_desc lf_til'>potential</div>
                <div className='gf_title lf_title'>
                    생각은 Heavy 하게
                    <br /> 결과는 Light 하게
                </div>
            </div>
            <div className='text_layout'></div>
        </section>
    );
}

export default Main;
