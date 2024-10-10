'use client'
import Breadcrumb from '@/components/breadCrumb/BreadCrumb';
import ProductGallary from '@/components/productGallary/ProductGallary';
import React from 'react'
import { useTranslation } from 'react-i18next';

const Production = () => {
    const {t}=useTranslation()
    return (
        <section>
          <Breadcrumb/>

            <div className='px-5 lg:px-16 py-10'>
                <div className='text-center'>
                    <h3 className='text-xl lg:text-3xl  font-semibold'>{t("Production")}</h3>
                    <div className='border-primary_color w-[20%] lg:w-[10%] border-t-4 rounded-lg m-auto my-5' />

                    {/* <p className='lg:w-[60%] m-auto py-3 text-slate-600'>Value technologies offers its customers the most comprehensive and professional after sales service, whether it is technical assistance or the rapid supply of spare parts.</p> */}
                </div>
                <ProductGallary />
            </div>
        </section>
    )
}

export default Production