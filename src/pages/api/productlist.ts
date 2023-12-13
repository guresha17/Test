// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
    produtname: string, date: string
}




export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json({ produtname: 'John Doe', date: "2023-08-10" })  
}
