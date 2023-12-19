import { useState, useEffect } from "react";
import useWindowSize from "@/utils/useWindowSize"
import { useRouter } from "next/router";
import Head from "next/head"
import Link from "next/link";
import LinkToHash from "./LinkToHash";
import { Inter } from 'next/font/google'
import useTranslation from 'next-translate/useTranslation'
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { MdMenu, MdClose  } from "react-icons/md";

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children, heading, titles }) {
  const { t } = useTranslation()

  const router = useRouter()
  const { pathname, locale, locales, asPath, query } = router

  const windowSize = useWindowSize()

  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState()

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

  const toogleMenu = () => {
    setOpen(!open)
  }

  return (
    <main className={`relative ${inter.className}`}>
      <Head>
        <title>{ heading }</title>
      </Head>

      {
        windowSize.width > 900 ? (
          <nav className="relative flex flex-row justify-between items-end py-4 px-24 after:block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-11/12 after:h-[2px] after:bg-text">
            <div className="flex flex-row items-end gap-2.5">
              <h1 className="text-3xl font-semibold text-text capitalize"><Link href="/">{ heading }</Link></h1>

              <div className="flex flex-row gap-1.5">
                {
                  locales.map(item => (
                    <button key={item} className={`transition-all duration-300 text-sm font-medium text-text hover:text-highlight uppercase ${ locale === item ? 'underline !text-highlight' : '' }`} value={item} onClick={handleLanguage}>{ item }</button>
                  ))
                }
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <LinkToHash to="/#about-us" className="relative font-medium text-text after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-1/3 after:h-[2px] after:bg-text after:transition-all after:duration-300 cursor-pointer uppercase">{t("common:section1")}</LinkToHash>
              <LinkToHash to="/#contact-us" className="relative font-medium text-text after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-1/3 after:h-[2px] after:bg-text after:transition-all after:duration-300 cursor-pointer uppercase">{t("common:section2")}</LinkToHash>
              
              <Menu open={openMenu} handler={setOpenMenu} allowHover>
                <MenuHandler>
                  <span className="relative font-medium text-text after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-1/3 after:h-[2px] after:bg-text after:transition-all after:duration-300 cursor-pointer uppercase">{t("common:section3")}</span>
                </MenuHandler>
                <MenuList className="w-auto">
                  <ul className="w-full focus:outline-none">
                    <Link href='/service/shop'>
                      <MenuItem>
                        <span className="capitalize">{ titles[0] }</span>
                      </MenuItem>
                    </Link>
                    <Link href='/service/car-repair'>
                      <MenuItem>
                        <span className="capitalize">{ titles[1] }</span>
                      </MenuItem>
                    </Link>
                    <Link href='/service/body-repair'>
                      <MenuItem>
                        <span className="capitalize">{ titles[2] }</span>
                      </MenuItem>
                    </Link>
                    <Link href='/service/body-repair'>
                      <MenuItem>
                        <span className="capitalize">{ titles[3] }</span>
                      </MenuItem>
                    </Link>
                  </ul>
                </MenuList>
              </Menu>
            </div>
          </nav>
        ) : (
          <nav className="relative flex flex-row items-center after:block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[96%] after:h-[2px] after:bg-text">
            <div className="flex flex-row justify-between w-full px-6 py-2">
              <h1 className="text-3xl font-semibold text-text" style={{ fontSize: 'clamp(1.25rem, 1.1111rem + 2.2222vw, 1.875rem)' }}><Link href="/">{ heading }</Link></h1>

              <MdMenu id="menuBtn" className="block w-8 h-8 sm:w-10 sm:h-10 text-text cursor-pointer" onClick={toogleMenu} />
            </div>
            
            <div className={`${open ? 'fixed top-0 h-screen transition-all duration-500' : 'absolute -top-[100vh] h-0 transition-none' } z-[9999] w-full bg-text/75`}>
              <MdClose className="absolute top-3 right-5 w-8 h-8 sm:w-10 sm:h-10 text-background cursor-pointer" onClick={toogleMenu} />

              <div className="absolute top-3 left-5 flex flex-row gap-3">
                {
                  locales.map(item => (
                    <button key={item} className={`transition-all duration-300 text-lg font-medium text-background hover:text-highlight uppercase ${ locale === item ? 'underline text-highlight' : '' }`} value={item} onClick={handleLanguage}>{ item }</button>
                  ))
                }
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5">
                <Link href="/" className="text-xl font-medium text-center text-background hover:text-highlight transition-all uppercase" onClick={toogleMenu}>{ heading }</Link>
                <LinkToHash to="/#about-us" className="text-xl font-medium text-center text-background hover:text-highlight transition-all uppercase" onClick={toogleMenu}>{t("common:section1")}</LinkToHash>
                <LinkToHash to="/#contact-us" className="text-xl font-medium text-center text-background hover:text-highlight transition-all uppercase" onClick={toogleMenu}>{t("common:section2")}</LinkToHash>
                <Link href='/service/shop' className="text-xl font-medium text-center text-background hover:text-highlight transition-all uppercase" onClick={toogleMenu}>{ titles[0] }</Link>
                <Link href='/service/car-repair' className="text-xl font-medium text-center text-background hover:text-highlight transition-all uppercase" onClick={toogleMenu}>{ titles[1] }</Link>
                <Link href='/service/body-repair' className="text-xl font-medium text-center text-background hover:text-highlight transition-all uppercase" onClick={toogleMenu}>{ titles[2] }</Link>
                <Link href='/service/car-glass-repair' className="text-xl font-medium text-center text-background hover:text-highlight transition-all uppercase" onClick={toogleMenu}>{ titles[3] }</Link>
              </div>
            </div>
          </nav>
        )
      }

      <div className="pb-14">
        { children }
      </div>
      
      <footer className='absolute bottom-0 w-full h-14 flex flex-row justify-center items-center'>
        <span className='text-sm capitalize'>{ heading }</span>
      </footer>
    </main>
  )
}
