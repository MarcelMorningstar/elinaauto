import { useState } from 'react'
import ImageModal from '@/components/ImageModal'
import Image from 'next/image'

import { imageUrlFor } from '@/sanity'


export default function Gallery(props) {
    const [zoomImage, setZoomImage] = useState(false)
    const [imageID, setPreviewimageID] = useState(null)
    const [image, setPreviewImage] = useState(null)

    const previewImage = (url, id) => {
        setPreviewImage(url)
        setPreviewimageID(id)
        setZoomImage(true)
    }

    const setNextPreviewImage = (id) => {
        setPreviewImage(imageUrlFor(props.images[++id]).url())
        setPreviewimageID(id++)
    }

    const setPrevPreviewImage = (id) => {
        setPreviewImage(imageUrlFor(props.images[--id]).url())
        setPreviewimageID(id++)
    }

    return (
        <section>
            <h3 className="mb-3 text-center">{ props.title }</h3>

            <p className="md:px-5 lg:px-40 xl:px-56 2xl:px-60 mb-6 text-center">{ props.text }</p>

            <div className='flex flex-row flex-wrap justify-center gap-5'>
                {
                    props.images.map((item, id) => (
                        <div key={item._key} className='relative w-28 sm:w-40 md:w-44 lg:w-52 h-28 sm:h-40 md:h-44 lg:h-52 cursor-pointer' onClick={() => previewImage(imageUrlFor(item).url(), id)}><Image src={imageUrlFor(item).url()} fill sizes="208px" className='object-cover' alt='car' /></div>
                    ))
                }
            </div>

            <ImageModal visible={zoomImage} setVisible={setZoomImage} url={image && image} imageID={imageID} lastImageID={props.images.length - 1} next={setNextPreviewImage} prev={setPrevPreviewImage} type='image' />
        </section>
    )
}
