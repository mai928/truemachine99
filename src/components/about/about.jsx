'use client'
import Link from "next/link";
import { fetchData } from '../../../utils/api'
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DOMPurify from "isomorphic-dompurify";

const About =  () => {

  const truncateText = (text, wordCount) => {
    return text?.split(' ').slice(0, wordCount).join(' ') + '...';
};

 const [data , setData]=useState('')

     const {t ,i18n} = useTranslation()
     useEffect(()=>{
            const AboutFetch= async ()=>{
              const aboutData = await fetchData(`api/about-us`,i18n.language)
                 setData(aboutData.data)
               
            }
            AboutFetch()
     },[])
  return (
    <section className="bg-white py-16 lg:px-16 px-5">

      <div className="  gap-10 flex flex-col md:flex-row  pt-10 ">
        <div className="w-full md:w-1/2">
          <img
            src={`${data.photo}`}
            className="rounded-lg w-full h-[400px] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2  ">
          <h2 className="text-xl lg:text-3xl  text-center lg:text-start font-semibold">{t(data?.title)}</h2>
          <div className="my-5">
            <div className='border-primary_color  w-[20%] lg:w-[15%] border-t-4 rounded-lg m-auto  lg:m-0  ' />
          </div>

          <div className='text-slate-600 mb-4 mt-10 leading-10 text-center lg:text-start ' dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(t(truncateText(data.details, 50)), {
                                                ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'li', 'ol', 'span'],
                                                ALLOWED_ATTR: ['href', 'target', 'style']
                                            })
                                        }}/>

          <div className='my-10  lg:block flex justify-center'>
            <Link href={`/about`} className={'hover:bg-primary_color text-slate-700 font-semibold  border-[1px] rounded-md border-gray-400 hover:text-white hover py-3 px-7'} >
              {t("Read More")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
