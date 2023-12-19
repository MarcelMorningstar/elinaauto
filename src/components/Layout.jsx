import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import LinkToHash from "./LinkToHash";
import { Inter } from 'next/font/google'
import useTranslation from 'next-translate/useTranslation'
import { MdMenu, MdClose  } from "react-icons/md";

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children, heading, titles }) {
  const { t } = useTranslation()

  const router = useRouter()
  const { pathname, locale, locales, asPath, query } = router

  const [open, setOpen] = useState(false)
  const [color, setColor] = useState('#EBEBEB')

  const handleLanguage = (e) => {
    const language = e.target.value;

    router.push({ pathname, query }, asPath, { locale: language })
  }

  useEffect(() => {
    const hash = sessionStorage.getItem("to");

    if (hash) {
      const element = document.querySelector(hash)

      if (element) {
        const rect = element.getBoundingClientRect();
        const padding = window.getComputedStyle(element, null).getPropertyValue('padding-top')
  
        window.scrollTo(0, rect.top + window.scrollY - parseInt(padding) * 2);
      }

      sessionStorage.removeItem("to")
    }
  }, [])

  useEffect(() => {
    function changeMenuColor() {
      var positionY = document.getElementById('header').clientHeight / 1.05;
  
      if (window.scrollY >= positionY) {
        setColor('#252525');
      }
      else {
        setColor('#EBEBEB');
      }
    }

    window.addEventListener('scroll', changeMenuColor);

    return () => {
      window.removeEventListener('scroll', changeMenuColor);
    };
  }, [])

  const toogleMenu = () => {
    setOpen(!open)
  }
  
  return (
    <main className={`${inter.className}`}>
      <Head>
        <title>{ heading }</title>
      </Head>

      <nav className="fixed z-[9999] w-full transition-all duration-500" style={open ? { height: '100vh' } : { height: '0' }}>
        <MdMenu id="menuBtn" className="block absolute top-3 right-5 w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-500 cursor-pointer" color={color} style={open ? {display: 'none'} : {display: 'block'}} onClick={toogleMenu} />

        <div className="absolute w-full h-full bg-text/75" style={open ? {display: 'block'} : {display: 'none'}}>
          <MdClose className="absolute top-3 right-5 w-8 h-8 sm:w-10 sm:h-10 text-background cursor-pointer" onClick={toogleMenu} />

          <div className="absolute top-3 left-5 flex flex-row gap-3">
            {
              locales.map(item => (
                <button key={item} className={`transition-all duration-300 text-lg font-medium text-background hover:text-highlight uppercase ${ locale === item ? 'underline text-highlight' : '' }`} value={item} onClick={handleLanguage}>{ item }</button>
              ))
            }
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5">
            <LinkToHash to="/#header" className="text-xl font-medium text-center text-background hover:text-highlight transition-all uppercase" onClick={toogleMenu}>{ heading }</LinkToHash>
            <LinkToHash to="/#about-us" className="text-xl font-medium text-center text-background hover:text-highlight transition-all uppercase" onClick={toogleMenu}>{t("common:section1")}</LinkToHash>
            <LinkToHash to="/#contact-us" className="text-xl font-medium text-center text-background hover:text-highlight transition-all uppercase" onClick={toogleMenu}>{t("common:section2")}</LinkToHash>
            <Link href='/service/shop' className="text-xl font-medium text-center text-background hover:text-highlight transition-all uppercase" onClick={toogleMenu}>{ titles[0] }</Link>
            <Link href='/service/car-repair' className="text-xl font-medium text-center text-background hover:text-highlight transition-all uppercase" onClick={toogleMenu}>{ titles[1] }</Link>
            <Link href='/service/body-repair' className="text-xl font-medium text-center text-background hover:text-highlight transition-all uppercase" onClick={toogleMenu}>{ titles[2] }</Link>
            <Link href='/service/car-glass-repair' className="text-xl font-medium text-center text-background hover:text-highlight transition-all uppercase" onClick={toogleMenu}>{ titles[3] }</Link>
          </div>
        </div>
      </nav>

      { children }
      
      <footer className='flex flex-row justify-center items-center h-14'>
        <span className='text-sm'>{ heading }</span>
      </footer>
    </main>
  )
}
