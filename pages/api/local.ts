// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const relativeFolder = 'img'

  const imgDirectory = path.resolve ('./public', relativeFolder)
  const filenames = fs.readdirSync(imgDirectory)

  const images = filenames.map (filename => path.join ('/', imgDirectory, filename))
  res.status(200).json(images)
}
