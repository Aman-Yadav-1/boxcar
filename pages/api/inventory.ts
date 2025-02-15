import { NextApiRequest, NextApiResponse } from 'next';

const inventoryData = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 25999,
    image: '/images/camry.jpg'
  },
  {
    id: '2',
    make: 'Honda',
    model: 'Accord',
    year: 2023,
    price: 27999,
    image: '/images/accord.jpg'
  },
  // Add more inventory items as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  return res.status(200).json(inventoryData);
}
