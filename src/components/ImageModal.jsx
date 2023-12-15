import { useEffect, useRef } from "react";
import { enableScroll } from "@/utils/scroll";
import Image from "next/image"
import { MdClose } from "react-icons/md";

export default function ImageModal({ visible, setVisible, url, type }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const menuBtn = document.getElementById('menuBtn')

    if (visible) {
      menuBtn.style.display = 'none'
    } else {
      menuBtn.style.display = 'block'
    }

    if (visible && type === 'video') {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [visible])

  const close = () => {
    if (type === 'video') {
      videoRef.current.pause();
    }

    setVisible(false); 
    enableScroll()
  }

  return (
    <div className={`fixed top-0 z-20 w-full h-screen bg-text/75 ${ visible ? 'block' : 'hidden' }`}>
      <MdClose className="absolute top-3 right-5 w-8 h-8 sm:w-10 sm:h-10 text-background cursor-pointer" onClick={() => close()} />

      {
        type === 'image' ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 sm:w-4/5 h-[66vh]"><Image className="object-contain" src={url} fill sizes="(max-width: 768px) 60vw, 80vw" alt="about us image" /></div>
        ) : type === 'video' && (
          <video className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-[66vh]" ref={videoRef} autoPlay loop controls><source src={url} /></video>
        )
      }
    </div>
  )
}
