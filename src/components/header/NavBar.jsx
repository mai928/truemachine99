'use client'
import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './Sidebar'
import { navbar } from '../../../data'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ResponsiveHeader from './ResponsiveHeader'
import LanguageChanger from '../languageChanger/LanguageChanger'
import { useTranslation } from 'react-i18next'
import { fetchData } from '../../../utils/api'

const NavBar = () => {

  const {t ,i18n}=useTranslation()

  const path = usePathname()

  const newpath = path.startsWith('/') ? path.slice(1) : path
  console.log(newpath)
  // const { t, i18n } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndexCatagory, setActiveIndexCatagory] = useState(null);

  const [activeLink, setActiveLink] = useState(1)


  const handleLink = (id) => {
    setActiveLink(id)
  }


  const handleMouseEnter = (id, type) => {
    if (type === 'category') {
      setActiveIndex(id);
    } else if (type === 'subcategory') {
      setActiveIndexCatagory(id);
    }
  };

  const handleMouseLeave = (type) => {
    if (type === 'category') {
      setActiveIndex(null);
    } else if (type === 'subcategory') {
      setActiveIndexCatagory(null);
    }
  };



  const [toggle, setToggle] = useState(false)
  const [showmenuIcon, setshowmenuIcon] = useState(false)
  const [isFixed, setIsFixed] = useState(false);
  const [data, setData] = useState('')
  const [slug, setSlug] = useState('')
  const sidebarRef = useRef(null);


  const handleClickOutside = (event) => {
    // If the sidebar is open and the click is outside of it, close the sidebar
    if (toggle && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  const handleFixed = () => {

    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }

  const generateLink = (basePath, title) => {
    return `${basePath}/${encodeURIComponent(title)}`;
  };

  useEffect(() => {

    if (window.scrollY >= 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }

    handleFixed()


    const handleSize = () => {
      if (window.innerWidth <= 1024) {
        setToggle(false)
        setshowmenuIcon(true)
      } else {
        setshowmenuIcon(false)

      }
    }


    handleSize()
    window.addEventListener('resize', handleSize)
    return () => {
      window.removeEventListener('resize', handleSize)
    }

  }, [])


  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const result = await fetchData(`api/settings`, i18n.language);
        setData(result?.data);
        // console.log('result::', result?.data)
      } catch (error) {
        console.error("Error fetching data:", error);
        // setError(error);
      }
    };

    fetchDataFromAPI();
  }, [])


  useEffect(() => {
    const fetchDataService = async () => {
      try {
        const response = await fetchData(`api/services`, i18n.language)
        // console.log(response?.data)
        setSlug(response?.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }


    }

    fetchDataService()
  }, [])

  useEffect(() => {
    // Add the event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Remove the event listener when the component is unmounted
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggle]);



  // api/categories

  useEffect(() => {
    const fetchDataService = async () => {
      try {
        const response = await fetchData(`api/categories`, i18n.language)
        // console.log(response?.data)
        setSlug(response?.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }


    }

    fetchDataService()
  }, [])





  return (
    <section className={`px-5 lg:px-16 z-10  top-0 left-0 right-0 bottom-0 bg-white py-4  ${isFixed && ' fixed top-0 left-0 shadow-xl  h-20  '}`}>

      <div>
        {
          showmenuIcon === true ?
            (
              <ResponsiveHeader setToggle={setToggle} toggle={toggle}/>
            ) : (
              <div className={`flex justify-between items-center   gap-20 `}>
                <Link href={'/'}>
                  <img width={150} height={'auto'} src={data?.logo} alt='Logo' />
                </Link>
                <div>
                  <div className='flex   gap-6 relative'>
                    {navbar.map((nav, index) => (
                      <div key={nav.id} className='' onMouseEnter={() => handleMouseEnter(nav.id, 'category')}  onMouseLeave={() =>handleMouseLeave('subcategory') } onClick={() => handleLink(nav.id)} >
                        <ul key={index} className=' flex items-center  '>
                          <li className='  text-sm font-semibold text-slate-900  relative  hover:bg-slate-300 py-2 px-3'>
                            <Link href={nav.path}>{t(nav.name)}</Link>
                          </li>
                          {/* <div
                      
                            key={index}
                            className="absolute  top-14  flex  transition-all duration-500 ease-in-out"
                        
                          >
                            {activeIndex === nav.id && nav.catagory && (
                              <div className="z-50  border-[1px] border-solid bg-slate-50   rounded-md">
                                {nav.catagory.map((item, subindex) => (
                                  <div
                                    className="relative hover:bg-slate-200 hover:bg-opacity-30 rounded-t-sm group"
                                    key={subindex}
                                    onMouseEnter={() => handleMouseEnter(item.id ,'subcategory')}
                                    onMouseLeave={() =>handleMouseLeave('category') }
                                  >
                                    <ul
                                      className="py-2 p-5"
                                      key={item.id}
                                    >
                                      <li
                                        className="text-black text-sm font-semibold  transition-all duration-500 ease-in-out"
                                      >

                                        <Link className='animatedText' href={generateLink(nav.path, slug[index]?.slug)} >{t(item.title)}</Link>
                                      </li>

                                   
                                    </ul>
                                    <div className="border-b-[1px] border-solid border-gray-200 text-white" />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div> */}

                          <div >


                          </div>

                          {
                            nav.catagory && (<svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} className='fill-black' viewBox="0 0 320 512"><path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" /></svg>)
                          }


                        </ul>
                      </div>
                    ))}

                   
                  </div>

                </div>

                <div className=''>
                      <LanguageChanger/>
                    </div>

              </div>
            )
        }
        {/* sidebar */}
        <div ref={sidebarRef}>
          <Sidebar t={t}  toggle={toggle} setToggle={setToggle} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} data={data} />
        </div>

      </div>

    </section>
  )
}

export default NavBar





