'use client'
import React, { useEffect, useState } from 'react'
import { fetchData } from '../../../utils/api'
import { useTranslation } from "react-i18next";
import { ImageGallery } from 'react-image-grid-gallery';
import { Productgallery } from '../../../data';

const ProductGallary = () => {

  const [data, setData] = useState(Productgallery)
  const [loading, setLoader] = useState(true)

  const { i18n } = useTranslation()
  useEffect(() => {
    const ProductionFetch = async () => {
      const Production = await fetchData(`api/galleries`, i18n.language)
      setData(Production.data)
      setLoader(false)

    }
    ProductionFetch()
  }, [])

  console.log(data)

  const images = data.map((image) => ({
    src: image?.photo,
    alt: image?.alt || '',
    caption: image?.caption,
    customOverlay: (
      <div className="custom-overlay__caption">
        <div className='text-2xl font-bold'>{image?.caption}</div>
      </div>
    ),
  }));
  return (
    <section className='py-10'>
      {
        loading ? (<div><p className='text-center font-bold'>No Production Data</p></div>) : (<ImageGallery imagesInfoArray={images} columnWidth={300} columnCount={3} gapSize={10} />
        )
      }
    </section>
  )
}

export default ProductGallary