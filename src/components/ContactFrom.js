import React, { useState } from 'react';

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
        <div>
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
        </div>
    );
};

export default ContactForm;
