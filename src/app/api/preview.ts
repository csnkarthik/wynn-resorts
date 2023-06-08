import { previewClient } from '@/lib/contentful/client'
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { secret, slug, slug1 } = req.query
  if (secret !== process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const dining = await previewClient.getEntries({
    content_type: 'diningPage',
    'fields.slug': slug
  })

  // const landingPage = await previewClient.getEntries({
  //   content_type: 'landingPage',
  //   'fields.slug1': slug1
  // })

  const diningData = dining?.items?.[0]
  // const landingData = landingPage?.items?.[0]
  let url = ''

  if(diningData){
    res.setPreviewData({})
    url = `/dining/${slug}`
    res.writeHead(307, { Location: url })
    return res.end()

  }

  // if(landingData){
  //   const urlTemp:any = landingData?.fields
  //   res.setPreviewData({})
  //   url = `/landing/${urlTemp.slug1}`
  //   res.writeHead(307, { Location: url })
  //   return res.end()
  // }

}

export default handler

