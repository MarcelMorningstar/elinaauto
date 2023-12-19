import Layout from '@/components/ServiceLayout';
import List from '@/components/List'

import { client } from '@/sanity'

export default function shop({ shop, index }) {
  return (
    <Layout heading={index.heading} titles={[index.title1, index.title2, index.title3, index.title4]}>
      <List tag="shop" data={shop.pageBuilder} />
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  const shop = await client.fetch(`*[_type == "page" && tag == "shop" && language == "${ locale }"][0]{
    pageBuilder[] {_key, _type, tag, heading, text, image, subPage[] { _key }}
  }`);
  const index = await client.fetch(`*[_type == "home" && language == "${ locale }"][0] {heading, title1, title2, title3, title4}`);
 
  return { props: { shop, index } }
}