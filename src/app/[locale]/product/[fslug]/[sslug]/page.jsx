import React from "react";
import Breadcrumb from "@/components/breadCrumb/BreadCrumb";
import initTranslations from "@/app/i18n";
import { fetchData } from "../../../../../../utils/api";
import DOMPurify from "isomorphic-dompurify";
const Description = async ({ params }) => {


  const i18nNamespaces = ["home"];
  const slug = params.sslug
  console.log('params:::', params)
  const { locale } = params
  const { t } = await initTranslations(locale, i18nNamespaces)
  const productData = await fetchData(`api/single-service/${slug}`, locale)
  const productsDetails = productData?.data;


  return (
    <>

      <Breadcrumb />
      <section className="bg-white pt-7 mb-10">

        <div className="lg:px-16 px-5 mx-auto gap-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:mt-0 md:ml-10 mb-6">
            <h2 className="text-xl lg:text-3xl  font-semibold">{t(productsDetails?.title)}</h2>
            <div className='border-primary_color w-[20%] lg:w-[20%] border-t-8 rounded-lg my-4' />
           

            <div
              className="text-slate-600 mb-4"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(t(productsDetails?.details))
              }}
            />
    
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={productsDetails?.photo}
              className="rounded-lg h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}
export default Description;