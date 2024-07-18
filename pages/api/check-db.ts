import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({ message: 'Connected to the database successfully!', users });
  } catch (error) {
    res.status(500).json({ message: 'Failed to connect to the database', error });
  }
}
