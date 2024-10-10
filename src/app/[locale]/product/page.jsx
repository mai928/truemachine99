import React from "react";
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';
import { productCatagory } from "../../../../data";
import Breadcrumb from "@/components/breadCrumb/BreadCrumb";
import { fetchData } from "../../../../utils/api";
import initTranslations from "@/app/i18n";
const PageProduct =async ({params}) => {

    // api/categories
    const i18nNamespaces = ["home"];
    const { locale } = params
    const { t } =  await initTranslations(locale, i18nNamespaces)
    const productData = await fetchData(`api/categories`,locale)
    const productCatagory =  productData?.data;

    const truncateText = (text, wordCount) => {
        return text?.split(' ').slice(0, wordCount).join(' ') + '...';
    };

    return (
        <>
            <Breadcrumb/>
        <div className="lg:px-16 px-5 pt-5 py-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 p-4 ">
                    {productCatagory?.map((items, index) => (
                            <div key={index} className="shadow-md rounded-md">
                                <div className="">
                                    <div className='overflow-hidden'>
                                        <img className='mx-auto  w-full h-[250px] rounded-md object-cover  duration-300 hover:scale-105  cursor-pointer' alt={'img'} src={items?.photo} />

                                    </div>
                                    <div className="p-2">
                                    <h2 className="text-xl font-bold text-slate-800  mb-2 mt-5">{t(items.title)}</h2>
                                    <div className=" text-[15px] text-gray-600  font-[500] " dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t(truncateText(items?.details || '', 20))) }} />
                                    <div className='my-8'>
                                        <Link href={`/product/${items.slug}`}  className={'hover:bg-primary_color text-slate-700 font-semibold  border-[1px] rounded-md border-gray-400 hover:text-white hover py-3 px-7'} >
                                            {t("Read More")}
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
        </div>
        </>
    )
}
export default PageProduct;
