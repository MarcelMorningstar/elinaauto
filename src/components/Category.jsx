import useWindowSize from "@/utils/useWindowSize"

import Link from "next/link";
import Image from "next/image"

import useTranslation from "next-translate/useTranslation";

export default function Category(props) {
    const { t } = useTranslation()
    const windowSize = useWindowSize()

    return (
        <section id={ props.id }>
            {
                windowSize.width >= 1280 ? (
                    <div className={`flex ${ props.nr % 2 ? 'flex-row-reverse' : 'flex-row' } gap-12`}>
                        <div className='relative w-1/2 aspect-video'>
                            <Image className="bg-neutral-400 object-cover" src={ props.image } fill sizes="40vw" alt="service" />
                        </div>

                        <div className={`w-1/2 py-4 ${ props.nr % 2 ? 'text-right' : 'text-left' }`}>
                            <h3 className="mb-2">{ props.title }</h3>

                            <p className="mb-4">{ props.text }</p>
                            
                            {
                                props.subPage && (
                                    <Link href={`/service/${props.category}/${props.subcategory}`} className="px-2 py-1 text-lg font-medium text-black border-4 border-text transition-all hover:text-highlight hover:border-highlight">{t("common:more")}</Link>
                                )
                            }
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-3">
                        <h3 className="mb-1 text-center whitespace-break-spaces">{ props.title }</h3>

                        <div className='relative w-3/4 aspect-video'>
                            <Image className="bg-neutral-400 object-cover" src={ props.image } fill sizes="75vw" alt="service" />
                        </div>

                        <p className="text-center">{ props.text }</p>

                        {
                            props.subPage && (
                                <Link href={`/service/${props.category}/${props.subcategory}`} className="px-2 py-1 text-center text-lg font-medium text-black border-4 border-text transition-all hover:text-highlight hover:border-highlight">{t("common:more")}</Link>
                            )
                        }
                    </div>
                )
            }
        </section>
    )
}
