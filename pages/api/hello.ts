// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  return axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
    res.status(response.status)
    res.end(JSON.stringify(response.data))
  })
  // res.status(200).json({ name: 'John Doe' })
}
