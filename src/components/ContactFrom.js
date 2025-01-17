import React, { useState, useEffect } from 'react';
import styles from '../style/contactFrom.css';
import supabase from '../apis/supabase.js';
import Cookies from 'js-cookie';

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
        <div className={`gf_light_background ${styles.lf_contactFromLayout}`}>
            {status && <p>{status}</p>}
            <section className='contact section' id='contact'>
                <div className='contact__container grid'>
                    <div className='contact__data'>
                        <h2 className='section__title-2'>
                            <span>Contact Me.</span>
                        </h2>

                        <p className='contact__description-1'>
                            현재는
                            <br />
                            <span className='gf_point_color'>{jobStatus}</span>
                        </p>

                        <p className='contact__description-2'>
                            I need your <b>Name</b> and <b>Email Address</b>,
                            but you won't receive anything other than your
                            reply.
                        </p>

                        <div className='geometric-box'></div>
                    </div>

                    <div className='contact__mail'>
                        <h2 className='contact__title'>Send Me A Message</h2>

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

                    <div className='contact__social'>
                        <img
                            src='assets/img/curved-arrow.svg'
                            alt=''
                            className='contact__social-arrow'
                        />

                        <div className='contact__social-data'>
                            <div>
                                <p className='contact__social-description-1'>
                                    Does not send emails
                                </p>

                                <p className='contact__social-description-2'>
                                    Write me on my social networks
                                </p>
                            </div>

                            <div className='contact__social-links'>
                                <a
                                    href='https://www.facebook.com/'
                                    target='_blank'
                                    className='contact__social-link'
                                    rel='noreferrer'
                                >
                                    <i className='ri-facebook-circle-line'></i>
                                </a>

                                <a
                                    href='https://www.instagram.com/'
                                    target='_blank'
                                    className='contact__social-link'
                                    rel='noreferrer'
                                >
                                    <i className='ri-instagram-line'></i>
                                </a>

                                <a
                                    href='https://www.linkedin.com/'
                                    target='_blank'
                                    className='contact__social-link'
                                    rel='noreferrer'
                                >
                                    <i className='ri-linkedin-box-line'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactForm;
