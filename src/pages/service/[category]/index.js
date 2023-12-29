import Layout from '@/components/ServiceLayout';
import List from '@/components/List'

import { useRouter } from 'next/router'

import { client } from '@/sanity'

export default function Page({ index, data }) {
    const router = useRouter()

    return (
        <Layout heading={index.heading} titles={[index.title1, index.title2, index.title3, index.title4]}>
            <List tag={ router.query.category } data={data.pageBuilder} />
        </Layout>
    )
}

export async function getStaticPaths() {
    return {
        paths: [], // indicates that no page needs be created at build time
        fallback: 'blocking' // indicates the type of fallback
    }
}

export async function getStaticProps({ params, locale }) {
    const data = await client.fetch(`*[_type == "page" && tag == "${ params.category }" && language == "${ locale }"][0]{
        pageBuilder[] {_key, _type, tag, heading, text, image, images, subPage[] { _key }}
    }`);
    const index = await client.fetch(`*[_type == "home" && language == "${ locale }"][0] {heading, title1, title2, title3, title4}`);

    return { props: { index, data } }
}