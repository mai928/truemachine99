import React from "react";
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';
import { Product } from "../../../../../data";
import Breadcrumb from "@/components/breadCrumb/BreadCrumb";
import initTranslations from "@/app/i18n";
import { fetchData } from "../../../../../utils/api";
const Products = async ({ params }) => {

    const truncateText = (text, wordCount) => {
        return text?.split(' ').slice(0, wordCount).join(' ') + '...';
    };

    const i18nNamespaces = ["home"];
    const slug = params.fslug
    const { locale } = params
    const { t } = await initTranslations(locale, i18nNamespaces)
    const productData = await fetchData(`api/single-category/${slug}`, locale)
    const productsDetails = productData?.data;


    return (
        <>

            <Breadcrumb />
            <div className="lg:px-16 px-5 pt-5 py-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {productsDetails?.products?.map((items, index) => (
                        <div key={index} className="shadow-md rounded-md">
                            <div className="">
                                <div className='overflow-hidden'>
                                    <img className='mx-auto  h-[250px] rounded-md object-cover  duration-300 hover:scale-105  cursor-pointer' alt={'img'} src={items.photo} />

                                </div>
                                <div className="p-2">
                                    <h2 className="text-xl font-bold text-slate-800  mb-2 mt-5">{t(items.title)}</h2>
                                    <div className=" text-[15px] text-gray-600  font-[500] " dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t(truncateText(items.details || '', 20))) }} />
                                    <div className='my-8'>
                                        <Link href={`/product/${slug}/${items.slug}`} className={'bg-transparent  text-primary_color rounded-md border-solid border-primary_color border-[1px] hover:bg-primary_color hover:ease-in-out hover:text-white hover:delay-200  py-3 px-7'} >
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
export default Products;
