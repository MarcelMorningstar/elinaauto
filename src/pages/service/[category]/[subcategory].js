import Layout from '@/components/ServiceLayout';
import { useRouter } from 'next/router'

import { client } from '@/sanity'

export default function Page({ index }) {
  const router = useRouter()

  return (
    <Layout heading={index.heading} titles={[index.title1, index.title2, index.title3, index.title4]}>
      {router.query.subcategory}
    </Layout>
  )
}

export async function getStaticPaths({ id }) {
  return {
    paths: [], // indicates that no page needs be created at build time
    fallback: 'blocking' // indicates the type of fallback
  }
}

export async function getStaticProps({ category, subcategory, locale }) {
  const data = await client.fetch(`*[_type == "page" && tag == "${ category }" && language == "${ locale }"][0]{
    pageBuilder[tag == "${ subcategory }"] { subPage[] }
  }`)
  const index = await client.fetch(`*[_type == "home" && language == "${ locale }"][0] {heading, title1, title2, title3, title4}`);

  return { props: { index, data } }
}

