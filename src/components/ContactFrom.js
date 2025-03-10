import React, { useState, useEffect } from 'react';
import styles from '../style/contactFrom.module.css';
import supabase from '../lib/supabase'; // supabase.js에서 설정한 supabase 클라이언트
import Cookies from 'js-cookie';
import point_video from '../assets/video/light.mp4';
import 'remixicon/fonts/remixicon.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: '',
        phone: '',
        email: '',
    });

    const [status, setStatus] = useState('');
    const [jobStatus, setJobStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 쿠키에서 중복 확인
        const hasSubmitted = Cookies.get(`submitted_${formData.email}`);
        if (hasSubmitted) {
            alert('메일 접수 완료되었습니다');
            return;
        }

        const { data, error } = await supabase
            .from('inquiry')
            .insert([formData]);

        if (error) {
            console.error('Insert Error:', error.message);
            alert(`삽입 실패: ${error.message}`);
        } else {
            alert('감사합니다');

            // 성공적으로 전송된 경우, 쿠키에 저장
            Cookies.set(`submitted_${formData.email}`, true, { expires: 1 }); // 쿠키 유효기간: 30일

            // Form 데이터 초기화
            setFormData({
                name: '',
                subject: '',
                message: '',
                phone: '',
                email: '',
            });
        }
    };

    // 구직중인지 데이터 가져오기
    useEffect(() => {
        const fetchProjects = async () => {
            const { data, error } = await supabase
                .from('job_status')
                .select('*');

            if (error) {
                console.error('Error fetching data:', error);
            } else {
                setJobStatus(data[0].job_status);
            }
        };

        fetchProjects();
    }, []);
    return (
        <section className={` ${styles.lf_contactContainer}`}>
            <video
                src={point_video}
                preload='auto'
                autoPlay='autoPlay'
                loop='loop'
                muted='muted'
                volume='0'
            ></video>
            <div className={`gf_contentArea ${styles.lf_contactFromLayout}`}>
                <div className='gf_title'>
                    Contace
                    <br /> Me
                </div>
                <div className={`${styles.section}`}>
                    <div className={`${styles.lf_input_mail}`}>
                        <p className={`${styles.lf_input_description_1}`}>
                            현재는
                            <br />
                            <span className='gf_point_color'>
                                {jobStatus ?? '구직중'}입니다
                            </span>
                        </p>
                        <p className={`${styles.lf_input_description_2}`}>
                            {jobStatus === '구직중' ? (
                                <>연락 주시면 빠른 시일내에 답장 드리겠습니다</>
                            ) : (
                                <>의뢰하실 프로젝트가 있다면 연락 남겨주세요!</>
                            )}
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className={`${styles.lf_input_form}`}
                        >
                            <div className={`${styles.lf_input_group}`}>
                                <div className={`gf_input__box`}>
                                    <input
                                        type='text'
                                        name='name'
                                        className={`${styles.lf_input}`}
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder='name'
                                    />
                                    <label
                                        htmlFor='name'
                                        className='gf_input_label'
                                    >
                                        name
                                    </label>
                                </div>
                                <div className={`gf_input__box`}>
                                    <input
                                        type='text'
                                        name='phone'
                                        className={`${styles.lf_input}`}
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder='phone'
                                    />
                                    <label
                                        htmlFor='subject'
                                        className='gf_input_label'
                                    >
                                        Phone
                                    </label>
                                </div>
                            </div>

                            <div className={`gf_input__box`}>
                                <input
                                    type='email'
                                    name='email'
                                    className={`${styles.lf_input}`}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder='Email Address'
                                />
                                <label
                                    htmlFor='email'
                                    className='gf_input_label'
                                >
                                    Email Address
                                </label>
                            </div>
                            <div className={`gf_input__box`}>
                                <input
                                    type='text'
                                    name='subject'
                                    className={`${styles.lf_input}`}
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder='Subject'
                                />
                                <label
                                    htmlFor='subject'
                                    className='gf_input_label'
                                >
                                    Subject
                                </label>
                            </div>

                            <div
                                className={`${styles.lf_input_group} ${styles.lf_input_area}`}
                            >
                                <textarea
                                    className={`${styles.lf_input}`}
                                    required
                                    placeholder='Message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <label
                                    htmlFor='message'
                                    className='gf_input_label'
                                >
                                    Message
                                </label>
                            </div>

                            <p className='gf_input_message'></p>

                            <button
                                type='submit'
                                className={`gf_input_button ${styles.button}`}
                            >
                                <i className='ri-send-plane-line'></i>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
