import Category from '@/components/Category'
import Gallery from '@/components/Gallery'

import { imageUrlFor } from '@/sanity'

export default function List({ tag, data }) {
    return (
        <div>
            {
                data && data.map((item, id) => {
                    if (item._type === 'category') {
                        return <Category 
                            category={tag}
                            nr={id} 
                            key={item._key} 
                            subcategory={item.tag} 
                            title={item.heading} 
                            text={item.text} 
                            image={imageUrlFor(item.image).url()} 
                            subPage={item.subPage} 
                        />
                    } else if (item._type === 'gallery') {
                        return <Gallery 
                            category={tag}
                            key={item._key} 
                            title={item.heading} 
                            text={item.text} 
                            images={item.images}
                        />
                    }
                })
            }
        </div>
    )
}
