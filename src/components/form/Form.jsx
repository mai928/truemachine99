"use client"
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

const Form = () => {
    const { t, i18n } = useTranslation()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [responseMessage, setResponseMessage] = useState('');

    const ResponseMessage = ({ message }) => {
        if (!message) return null;

        return (
            <div className="mt-6 text-center">
                <p className={`text-lg ${message === 'Message sent successfully!' ? 'text-green-900' : 'text-red-500'}`}>
                    {message}
                </p>
            </div>
        );
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Accept-Language", i18n.language);
        myHeaders.append("Cookie", "laravel_session=s6nUvmjKMgjI2tPykME78BDtmtw9qsvOWeGTjjpE");


        try {
            const response = await fetch('http://api.truemachinecnc.com/api/contact-submit', {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            console.log(result.data)

            if (response.status) {
                setResponseMessage('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            } else {
                console.error('Failed to send message. Please try again.');

                setResponseMessage('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setResponseMessage('An error occurred. Please try again.');
        }

        setTimeout(() => {
            setResponseMessage('')
        }, 3000)


    };
    return (
        <section className='py-10 px-10 rounded-3xl bg-white '>
             <div>
                <h3 className='text-3xl '>Send Us Message </h3>
                <p className='text-sm py-2 text-slate-500'>if you have Question , Fill this form </p>
             </div>
         
            <form onSubmit={handleSubmit}>
                <input type='text' id='name' name='name' onChange={handleChange} value={formData.name} placeholder='Name' className='block py-3 border-[1px] my-3  rounded-sm ps-7 w-full' />
                <input type='email' id='email' name='email' onChange={handleChange} value={formData.email} placeholder='Email' className='block py-3 border-[1px] my-3  rounded-sm ps-7 w-full' />
                <input type='number' id='phone' name='phone' onChange={handleChange} value={formData.phone} placeholder='Phone' className='block py-3 border-[1px] my-3  rounded-sm ps-7 w-full' />
                <textarea placeholder='Message' name='message' onChange={handleChange} id='message' value={formData.message} className='block py-3 border-[1px] my-3  rounded-sm ps-7 w-full' />
                <div className='flex justify-end'>
                    <button type='submit' className='border-slate-200 hover:bg-blue_Color bg-btn_color text-white rounded-sm border-[1px] px-7 py-2'>
                        Send
                    </button>
                </div>
                <div><ResponseMessage message={responseMessage}/></div>

            </form>
        </section>
    )
}

export default Form