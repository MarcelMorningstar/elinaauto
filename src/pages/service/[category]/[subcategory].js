import Layout from '@/components/ServiceLayout';
import Category from '@/components/Category';

import { client, imageUrlFor } from '@/sanity'

export default function Page({ index, data }) {
  return (
    <Layout heading={index.heading} titles={[index.title1, index.title2, index.title3, index.title4]}>
      {
        data.pageBuilder[0].subPage && data.pageBuilder[0].subPage.map((item, id) => {
          return <Category 
            nr={id} 
            key={item._key} 
            title={item.title} 
            text={item.text} 
            image={imageUrlFor(item.image).url()} 
          />
        })
      }
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
    pageBuilder[tag == "${ params.subcategory }"] { subPage[] }
  }`)
  const index = await client.fetch(`*[_type == "home" && language == "${ locale }"][0] {heading, title1, title2, title3, title4}`);

  if (!data.pageBuilder[0].subPage) {
    return {
      notFound: true, // triggers 404
    };
  }

  return { props: { index, data } }
}

