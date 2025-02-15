import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import { FaTachometerAlt, FaGasPump, FaCogs, FaArrowRight } from 'react-icons/fa'

interface Car {
  id: string
  brand: string
  model: string
  spec: string
  image: string
  mileage: { icon: string, value: string }
  transmission: { icon: string, value: string }
  fuel: { icon: string, value: string }
  price: { original: number, discounted: number }
  feature: string
}

interface CarCardProps {
  car: Car
}

export function CarCard({ car }: CarCardProps) {
  return (
    <Card className="overflow-hidden max-w-full sm:max-w-[280px] bg-[#050B20] text-white">
      <div className="relative pt-2 px-2">
        <span className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-medium
          ${car.feature === 'Low Mileage' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
          {car.feature}
        </span>
        <Image
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="h-40 w-full object-cover rounded-lg"
          width={600}
          height={400}
        />
      </div>
      <CardContent className="pt-4">
        <h3 className="font-bold text-base mb-1">{car.brand}</h3>
        <p className="text-sm text-gray-400 mb-3">{car.spec}</p>
        <div className="grid grid-cols-3 gap-2 text-xs text-gray-400">
          <div className="flex flex-col items-center">
            <FaTachometerAlt className="h-4 w-4 mb-1" />
            <span>{car.mileage.value}</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGasPump className="h-4 w-4 mb-1" />
            <span>{car.fuel.value}</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCogs className="h-4 w-4 mb-1" />
            <span>{car.transmission.value}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">${car.price.original}</span>
          <span className="text-lg font-bold">${car.price.discounted}</span>
        </div>
        <div className="flex items-center text-sm text-white hover:text-gray-300 cursor-pointer">
          View Details
          <FaArrowRight className="ml-1 h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}