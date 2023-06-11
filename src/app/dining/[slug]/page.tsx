'use client'

import { client } from '@/lib/contentful/client'
import { handleSticky } from '@/lib/utils'
import PostBody from '@/components/dining/PostBody'
import PostHeader from '@/components/dining/PostHeader'
import Menu from '@/components/dining/Menu'

export const dynamicParams = true

const DiningDetail = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await getRestaurant(params)

  const handleMenuClick = (e: any) => {
    e.preventDefault()
    handleSticky();
  }

  return (
    <main>
      <PostHeader restaurant={restaurant} handleMenuClick={handleMenuClick} />
      <PostBody restaurant={restaurant} />
      <Menu />
    </main>
  )
}

export default DiningDetail

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: 'diningPage' })
  return res.items.map((post) => ({
    slug: post.fields.slug,
  }))
}


async function getRestaurant(params: any) {
  return client.getEntries({
    'content_type': 'diningPage',
    'fields.slug': params.slug,
  })
    .then(entries => entries.items[0])
    .catch(console.error);
}


