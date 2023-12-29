import { useState } from "react"
import Layout from "@/components/Layout"
import ImageModal from "@/components/ImageModal"
import useWindowSize from "@/utils/useWindowSize"

import Link from "next/link";
import Image from "next/image"
import dynamic from 'next/dynamic'

import { client, imageUrlFor, fileUrlFor } from '@/sanity'

import useTranslation from 'next-translate/useTranslation'

import { MdOutlinePlayCircle } from "react-icons/md";

import headerStyle from '@/styles/header.module.css'
import aboutusStyle from '@/styles/aboutus.module.css'

import img from "../images/repair.png"

export default function Home({ home }) {
  const { t } = useTranslation()
  const [zoomImage, setZoomImage] = useState(false)
  const [imagePreview, setImagePreview] = useState('')
  const [imageType, setImageType] = useState('image')
  const windowSize = useWindowSize()

  const Map = dynamic(
    () => import('../components/Map'),
    { ssr: false }
  )

  const previewImage = (url, type) => {
    setImagePreview(url)
    setImageType(type)
    setZoomImage(true)
  }

  return (
    <Layout heading={home.heading} titles={[home.title1, home.title2, home.title3, home.title4]}>
      {
        windowSize.width >= 1280 ? (
          <header id="header" className="overflow-hidden flex flex-row w-full h-screen">
            <Link href='/service/shop' className={headerStyle.category1}>
              <div className={headerStyle.subcategory} style={{backgroundImage: `url(${ imageUrlFor(home.headerImage1).url() })`}}></div>
              <div className={headerStyle.heading}>
                <Image src={img} width={160} alt="icon" />
                <h2 className="w-44 text-background text-center">{ home.title1 }</h2>
              </div>
            </Link>
            <Link href='/service/car-repair'  className={headerStyle.category2}>
              <div className={headerStyle.subcategory} style={{backgroundImage: `url(${ imageUrlFor(home.headerImage2).url() })`}}></div>
              <div className={headerStyle.heading}>
                <Image src={img} width={160} alt="icon" />
                <h2 className="w-44 text-background text-center">{ home.title2 }</h2>
              </div>
            </Link>
            <Link href='/service/body-repair' className={headerStyle.category3}>
              <div className={headerStyle.subcategory} style={{backgroundImage: `url(${ imageUrlFor(home.headerImage3).url() })`}}></div>
              <div className={headerStyle.heading}>
                <Image src={img} width={160} alt="icon" />
                <h2 className="w-44 text-background text-center">{ home.title3 }</h2>
              </div>
            </Link>
            <Link href='/service/car-glass-repair' className={headerStyle.category4}>
              <div className={headerStyle.subcategory} style={{backgroundImage: `url(${ imageUrlFor(home.headerImage4).url() })`}}></div>
              <div className={headerStyle.heading}>
                <Image src={img} width={160} alt="icon" />
                <h2 className="w-44 text-background text-center">{ home.title4 }</h2>
              </div>
            </Link>
          </header>
        ) : windowSize.width >= 700 ? (
          <header id="header">
            <div className="overflow-hidden flex flex-row w-full h-[50vh]">
              <Link href='/service/shop' className={headerStyle.category1}>
                <div className={headerStyle.subcategory} style={{backgroundImage: `url(${ imageUrlFor(home.headerImage1).url() })`}}></div>
                <div className={headerStyle.heading}>
                  <Image src={img} width={160} alt="icon" />
                  <h2 className="w-44 text-background text-center">{ home.title1 }</h2>
                </div>
              </Link>
              <Link href='/service/car-repair' className={headerStyle.category2}>
                <div className={headerStyle.subcategory} style={{backgroundImage: `url(${ imageUrlFor(home.headerImage2).url() })`}}></div>
                <div className={headerStyle.heading}>
                  <Image src={img} width={160} alt="icon" />
                  <h2 className="w-44 text-background text-center">{ home.title2 }</h2>
                </div>
              </Link>
            </div>
            <div className="overflow-hidden flex flex-row w-full h-[50vh]">
              <Link href='/service/body-repair' className={headerStyle.category3}>
                <div className={headerStyle.subcategory} style={{backgroundImage: `url(${ imageUrlFor(home.headerImage3).url() })`}}></div>
                <div className={headerStyle.heading}>
                  <Image src={img} width={160} alt="icon" />
                  <h2 className="w-44 text-background text-center">{ home.title3 }</h2>
                </div>
              </Link>
              <Link href='/service/car-glass-repair' className={headerStyle.category4}>
                <div className={headerStyle.subcategory} style={{backgroundImage: `url(${ imageUrlFor(home.headerImage4).url() })`}}></div>
                <div className={headerStyle.heading}>
                  <Image src={img} width={160} alt="icon" />
                  <h2 className="w-44 text-background text-center">{ home.title4 }</h2>
                </div>
              </Link>
            </div>
          </header>
        ) : (
          <header id="header" className="overflow-hidden flex flex-col w-full h-screen">
            <Link href='/service/shop' className={headerStyle.category1}>
              <div className={headerStyle.subcategory} style={{backgroundImage: `url(${ imageUrlFor(home.headerImage1).url() })`}}></div>
              <div className={headerStyle.heading}>
                <div className="relative w-full h-[10vh]">
                  <Image src={img} className="object-contain" fill alt="icon" />
                </div>
                
                <h2 className="text-background text-center">{ home.title1 }</h2>
              </div>
            </Link>
            <Link href='/service/car-repair' className={headerStyle.category2}>
              <div className={headerStyle.subcategory} style={{backgroundImage: `url(${ imageUrlFor(home.headerImage2).url() })`}}></div>
              <div className={headerStyle.heading}>
                <div className="relative w-full h-[10vh]">
                  <Image src={img} className="object-contain" fill alt="icon" />
                </div>

                <h2 className="text-background text-center">{ home.title2 }</h2>
              </div>
            </Link>
            <Link href='/service/body-repair' className={headerStyle.category3}>
              <div className={headerStyle.subcategory} style={{backgroundImage: `url(${ imageUrlFor(home.headerImage3).url() })`}}></div>
              <div className={headerStyle.heading}>
                <div className="relative w-full h-[10vh]">
                  <Image src={img} className="object-contain" fill alt="icon" />
                </div>

                <h2 className="text-background text-center">{ home.title3 }</h2>
              </div>
            </Link>
            <Link href='/service/car-glass-repair' className={headerStyle.category4}>
              <div className={headerStyle.subcategory} style={{backgroundImage: `url(${ imageUrlFor(home.headerImage4).url() })`}}></div>
              <div className={headerStyle.heading}>
                <div className="relative w-full h-[10vh]">
                  <Image src={img} className="object-contain" fill alt="icon" />
                </div>

                <h2 className="text-background text-center">{ home.title4 }</h2>
              </div>
            </Link>
          </header>
        )
      }

      <div className='flex items-center justify-center h-52' style={{ padding: '0 clamp(20px, 20%, 400px)' }}><Image className="object-contain" src={imageUrlFor(home.logo).url()} width={300} height={104} alt="logo" /></div>

      <section id="about-us">
        <style jsx>{`
          .play-icon:hover + img {
            transform: scale(1.1);
          }
        `}</style>

        <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16'>
          <div className='grid grid-cols-3 grid-rows-3 gap-2 sm:gap-3 md:gap-4 w-full sm:w-4/5 md:w-2/3 lg:w-1/2 h-min'>
            <div className='overflow-hidden relative aspect-square bg-neutral-400 cursor-pointer' onClick={() => previewImage(imageUrlFor(home.aboutUsImage1).url(), 'image')}>
              <Image className="object-cover hover:scale-110 transition-all" src={imageUrlFor(home.aboutUsImage1).url()} fill sizes="200px" alt="about us image"/>
            </div>
            <div className='overflow-hidden relative aspect-square bg-neutral-400 cursor-pointer' onClick={() => previewImage(fileUrlFor(home.aboutUsVideo1).url, 'video')}>
              <MdOutlinePlayCircle className={`${aboutusStyle.playIcon} absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 h-2/5 text-background/90 drop-shadow-lg`} />
              <Image className="object-cover hover:scale-110 transition-all" src={imageUrlFor(home.aboutUsVideoThumbnail1).url()} fill sizes="200px" alt="about us image"/>
            </div>
            <div className='overflow-hidden relative aspect-square bg-neutral-400 cursor-pointer' onClick={() => previewImage(imageUrlFor(home.aboutUsImage2).url(), 'image')}>
              <Image className="object-cover hover:scale-110 transition-all" src={imageUrlFor(home.aboutUsImage2).url()} fill sizes="200px" alt="about us image"/>
            </div>
            <div className='overflow-hidden relative aspect-square bg-neutral-400 cursor-pointer' onClick={() => previewImage(fileUrlFor(home.aboutUsVideo2).url, 'video')}>
              <MdOutlinePlayCircle className={`${aboutusStyle.playIcon} absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 h-2/5 text-background/90 drop-shadow-lg`} />
              <Image className="object-cover hover:scale-110 transition-all" src={imageUrlFor(home.aboutUsVideoThumbnail2).url()} fill sizes="200px" alt="about us image"/>
            </div>
            <div className='overflow-hidden relative aspect-square bg-neutral-400 cursor-pointer' onClick={() => previewImage(imageUrlFor(home.aboutUsImage3).url(), 'image')}>
              <Image className="object-cover hover:scale-110 transition-all" src={imageUrlFor(home.aboutUsImage3).url()} fill sizes="200px" alt="about us image"/>
            </div>
            <div className='overflow-hidden relative aspect-square bg-neutral-400 cursor-pointer' onClick={() => previewImage(imageUrlFor(home.aboutUsImage4).url(), 'image')}>
              <Image className="object-cover hover:scale-110 transition-all" src={imageUrlFor(home.aboutUsImage4).url()} fill sizes="200px" alt="about us image"/>
            </div>
            <div className='overflow-hidden relative aspect-square bg-neutral-400 cursor-pointer' onClick={() => previewImage(imageUrlFor(home.aboutUsImage5).url(), 'image')}>
              <Image className="object-cover hover:scale-110 transition-all" src={imageUrlFor(home.aboutUsImage5).url()} fill sizes="200px" alt="about us image"/>
            </div>
            <div className='overflow-hidden relative aspect-square bg-neutral-400 cursor-pointer' onClick={() => previewImage(imageUrlFor(home.aboutUsImage6).url(), 'image')}>
              <Image className="object-cover hover:scale-110 transition-all" src={imageUrlFor(home.aboutUsImage6).url()} fill sizes="200px" alt="about us image"/>
            </div>
            <div className='overflow-hidden relative aspect-square bg-neutral-400 cursor-pointer' onClick={() => previewImage(fileUrlFor(home.aboutUsVideo2).url, 'video')}>
              <MdOutlinePlayCircle className={`${aboutusStyle.playIcon} absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 h-2/5 text-background/90 drop-shadow-lg`} />
              <Image className="object-cover hover:scale-110 transition-all" src={imageUrlFor(home.aboutUsVideoThumbnail3).url()} fill sizes="200px" alt="about us image"/>
            </div>
          </div>

          <div className='w-full lg:w-1/2 py-6 text-center lg:text-left'>
            <h3 className="mb-2 whitespace-nowrap">{t("common:section1")}</h3>

            <p>{ home.aboutUs }</p>
          </div>
        </div>
      </section>

      <ImageModal visible={zoomImage} setVisible={setZoomImage} url={imagePreview} type={imageType} />

      <section id="contact-us">
        <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 xl:gap-16'>
          <div className='flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2 py-6 text-center lg:text-right'>
            <h3>{t("common:section2")}</h3>

            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <h4 className='leading-6 text-2xl font-light uppercase'>{t("common:subsection2.1")}</h4>
                <span className='leading-5 text-lg drop-shadow-md'>{ home.address }</span>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='leading-6 text-2xl font-light uppercase'>{t("common:subsection2.2")}</h4>
                <span className='leading-5 text-lg capitalize drop-shadow-md'>{`${ home.title1 }: `}<a href={`tel:${ home.phone1 }`} className="hover:text-highlight whitespace-nowrap">{ home.phone1 }</a></span>
                <span className='leading-5 text-lg capitalize drop-shadow-md'>{`${ home.title2 }: `}<a href={`tel:${ home.phone2 }`} className="hover:text-highlight whitespace-nowrap">{ home.phone2 }</a></span>
                <span className='leading-5 text-lg capitalize drop-shadow-md'>{`${ home.title3 }: `}<a href={`tel:${ home.phone3 }`} className="hover:text-highlight whitespace-nowrap">{ home.phone3 }</a></span>
                <span className='leading-5 text-lg capitalize drop-shadow-md'>{`${ home.title4 }: `}<a href={`tel:${ home.phone4 }`} className="hover:text-highlight whitespace-nowrap">{ home.phone4 }</a></span>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='leading-6 text-2xl font-light uppercase'>{t("common:subsection2.3")}</h4>

                {
                  home.businessHours.map((item, id) => (
                    <span key={id} className="leading-5 text-lg drop-shadow-md capitalize">{`${ item.day }: ${ item.hours } `}</span>
                  ))
                }
              </div>
            </div>
          </div>

          <div className='flex justify-center w-full lg:w-1/2'>
            <div className='block w-full lg:h-[500px] aspect-square lg:aspect-auto bg-neutral-400 rounded-3xl shadow-lg'>
              <Map />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  const home = await client.fetch(`*[_type == "home" && language == "${ locale }"][0]`);

  return { props: { home } }
}
