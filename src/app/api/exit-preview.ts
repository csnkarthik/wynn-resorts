
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (_:NextApiRequest, res:NextApiResponse) => {
  res.clearPreviewData()
  res.writeHead(307, { Location: '/dining' })
  res.end()
}

export default handler