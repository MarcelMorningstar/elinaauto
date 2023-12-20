import { useEffect, useRef } from "react";
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
  }

  return (
    <div id="modal" className={`fixed top-0  z-[9999] w-full h-screen bg-text/75 ${ visible ? 'block' : 'hidden' }`} onClick={ (e) => { if (e.target.id === 'modal') close() } }>
      <MdClose className="absolute top-3 right-5 w-8 h-8 sm:w-10 sm:h-10 text-background cursor-pointer" onClick={() => close()} />

      {
        type === 'image' ? (
          <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto max-w-[90%] max-h-[66vh] object-contain" src={url} alt="about us image" />
        ) : type === 'video' && (
          <video className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto max-w-[90%] max-h-[66vh]" ref={videoRef} autoPlay loop controls><source src={url} type="video/mp4" /></video>
        )
      }
    </div>
  )
}
