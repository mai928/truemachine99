import initTranslations from '@/app/i18n';
import Breadcrumb from '@/components/breadCrumb/BreadCrumb'
import Form from '@/components/form/Form'
import React from 'react'
import { fetchData } from '../../../../utils/api';
import Link from 'next/link';

const Contact = async({params}) => {

    const i18nNamespaces = ["home"];
    const { locale } = params
    const { t } = await initTranslations(locale, i18nNamespaces)
    const settingData = await fetchData(`api/settings`, locale)
    const settings = settingData?.data;


    return (
        <section className='bg-gray-100'>

          <Breadcrumb/>

            <div className='lg:flex  py-20 px-5 lg:px-16'>
                <div className='lg:w-1/2'>
                    <div className='' >

                        <h3 className='text-4xl'>Get in touch </h3>
                        <div className='border-primary_color my-3 w-[20%] lg:w-[13%] border-t-8 rounded-lg ' />

                        <p className='text-[16px] text-slate-600 w-[80%] py-4'>Please contact us using the information below to locate contacts in the business office closest to you , or visit our office site</p>
                    </div>
                    <div>
                        <div className='text-white flex py-3 gap-5 items-start'>
                            {/* address */}
                            <svg className='fill-primary_color' width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
                        
                            <div className='block'>
                                {
                                    settings?.addresses?.map((item ,index) => (
                                        <p key={index} className='text-gray-600 font-semibold'>{item}</p>

                                    ))
                                }
                            </div>

                        </div>

                        <div className='text-white flex py-3 gap-5 items-start'>
                            {/* Email */}
                            <svg className='fill-primary_color' width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                           
                            <div className='block'>
                                {
                                    settings?.emails?.map((item ,index) => (
                                        <Link key={index} href={`mailto:${item}`} className='text-gray-600 font-semibold '>{item}</Link>

                                    ))
                                }
                            </div>

                        </div>

                        <div className='text-white flex py-3 gap-5 items-start'>
                            {/* phone */}
                            <svg className='fill-primary_color' width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                            <div className='block'>
                                {
                                    settings?.phones?.map((item ,index) => (
                                        <Link key={index} href={`tel:${item}`} className='block text-gray-600 font-semibold'>{item}</Link>

                                    ))
                                }
                            </div>

                        </div>

                    </div>


                </div>

                <div className='lg:w-1/2'>
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Contact