import React, { useState } from 'react';
import styles from '../style/contactFrom.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        to: 'de05164@gmail.com',
        subject: '',
        html: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                'https://<YOUR_SUPABASE_PROJECT>.functions.supabase.co/send-email',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            const data = await response.json();
            setStatus('Email sent successfully!');
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
            setStatus('Failed to send email. Please try again.');
        }
    };

    return (
        <div classNameName={`gf_contentArea ${styles.lf_contactFromLayout}`}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    To:
                    <input
                        type='email'
                        name='to'
                        value={formData.to}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Subject:
                    <input
                        type='text'
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Message:
                    <textarea
                        name='html'
                        value={formData.html}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                <br />
                <button type='submit'>Send</button>
            </form>
            {status && <p>{status}</p>}

            <section className='contact section' id='contact'>
                <div className='contact__container grid'>
                    <div className='contact__data'>
                        <h2 className='section__title-2'>
                            <span>Contact Me.</span>
                        </h2>

                        <p className='contact__description-1'>
                            메일을 보내면 확인하는대로 답장하겠습니다
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
                            action=''
                            className='contact__form'
                            id='contact-form'
                        >
                            <div className='contact__group'>
                                <div className='contact__box'>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='contact__input'
                                        id='name'
                                        required
                                        placeholder='First name'
                                    />
                                    <label
                                        for='name'
                                        className='contact__label'
                                    >
                                        First Name
                                    </label>
                                </div>

                                <div className='contact__box'>
                                    <input
                                        type='email'
                                        name='user_email'
                                        className='contact__input'
                                        id='email'
                                        required
                                        placeholder='Email Address'
                                    />
                                    <label
                                        for='email'
                                        className='contact__label'
                                    >
                                        Email Address
                                    </label>
                                </div>
                            </div>

                            <div className='contact__box'>
                                <input
                                    type='email'
                                    name='user_subject'
                                    className='contact__input'
                                    id='subject'
                                    required
                                    placeholder='Subject'
                                />
                                <label for='subject' className='contact__label'>
                                    Subject
                                </label>
                            </div>

                            <div className='contact__box contact__area'>
                                <textarea
                                    name='user_message'
                                    id='message'
                                    className='contact__input'
                                    required
                                    placeholder='Message'
                                ></textarea>
                                <label for='message' className='contact__label'>
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
                                <i className='ri-send-plane-line'></i> Send
                                Message
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
