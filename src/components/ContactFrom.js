import React, { useState, useEffect } from 'react';
import styles from '../style/contactFrom.css';
import supabase from '../lib/supabase'; // supabase.js에서 설정한 supabase 클라이언트
import Cookies from 'js-cookie';
import point_video from '../video/light.mp4';
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
            alert('보내기 성공');

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
        <section className='lf_contactContainer'>
            <video
                src={point_video}
                preload='auto'
                autoplay='autoplay'
                loop='loop'
                muted='muted'
                volume='0'
            ></video>
            <div className='gf_contentArea'>
                <div className='gf_title'>Contace Me</div>
                <div className='contact section' id='contact'>
                    <div className='contact__mail'>
                        <p className='contact__description-1'>
                            현재는
                            <br />
                            <span className='gf_point_color'>
                                {jobStatus ?? '구직중'} 상태입니다
                            </span>
                        </p>
                        <p className='contact__description-2'>
                            {jobStatus == '구직중' ? (
                                <div>
                                    적극적으로 구직중입니다 연락 남겨주세요!
                                </div>
                            ) : (
                                <div>
                                    의뢰하실 프로젝트가 있다면 연락 남겨주세요!
                                </div>
                            )}
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className='contact__form'
                            id='contact-form'
                        >
                            <div className='contact__group'>
                                <div className='contact__box'>
                                    <input
                                        type='text'
                                        name='name'
                                        className='contact__input'
                                        id='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder='name'
                                    />
                                    <label
                                        htmlFor='name'
                                        className='contact__label'
                                    >
                                        이름
                                    </label>
                                </div>
                                <div className='contact__box'>
                                    <input
                                        type='text'
                                        name='phone'
                                        className='contact__input'
                                        id='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder='phone'
                                    />
                                    <label
                                        htmlFor='subject'
                                        className='contact__label'
                                    >
                                        Phone
                                    </label>
                                </div>
                            </div>

                            <div className='contact__box'>
                                <input
                                    type='email'
                                    name='email'
                                    className='contact__input'
                                    id='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder='Email Address'
                                />
                                <label
                                    htmlFor='email'
                                    className='contact__label'
                                >
                                    Email Address
                                </label>
                            </div>
                            <div className='contact__box'>
                                <input
                                    type='text'
                                    name='subject'
                                    className='contact__input'
                                    id='subject'
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder='Subject'
                                />
                                <label
                                    htmlFor='subject'
                                    className='contact__label'
                                >
                                    Subject
                                </label>
                            </div>

                            <div className='contact__box contact__area'>
                                <textarea
                                    id='message'
                                    className='contact__input'
                                    required
                                    placeholder='Message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <label
                                    htmlFor='message'
                                    className='contact__label'
                                >
                                    Message
                                </label>
                            </div>

                            <p
                                className='contact__message'
                                id='contact-message'
                            ></p>

                            <button
                                type='submit'
                                className='contact__button button'
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
