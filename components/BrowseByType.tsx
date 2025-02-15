import Image from 'next/image'
  import { LiaCarSideSolid } from "react-icons/lia";
  import { 
    PiCarProfile ,
    PiTruckLight 
  } from 'react-icons/pi'
  import Van from '@/app/images/van.png'
  import Coupe from '@/app/images/coupe.png'
  import Hybrid from '@/app/images/hybrid.png'
  import Convertible from '@/app/images/convertible.png'
  import Electric from '@/app/images/electric.png'
  import { TbCar, TbCarSuv } from 'react-icons/tb' 

  const categories = [
    { name: 'SUV', icon: TbCarSuv  },
    { name: 'Sedan', icon: PiCarProfile  },
    { name: 'Hatchback', icon: LiaCarSideSolid },
    { name: 'Coupe', icon: () => (
        <Image 
          src={Coupe} 
          alt="Coupe" 
          width={60} 
          height={60} 
          className="object-contain"
        />
      ) },
    { name: 'Hybrid', icon: () => (
        <Image 
          src={Hybrid} 
          alt="hybrid" 
          width={40} 
          height={40} 
          className="object-contain"
        />
      ) },
    { name: 'Convertible', icon: () => (
        <Image 
          src={Convertible} 
          alt="Convertible" 
          width={60} 
          height={60} 
          className="object-contain"
        />
      ) },
    { name: 'Van', icon: () => (
        <Image 
          src={Van} 
          alt="Van" 
          width={40} 
          height={40} 
          className="object-contain"
        />
      ) },
    { name: 'Truck', icon: PiTruckLight },
    { name: 'Electric', icon: () => (
        <Image 
          src={Electric} 
          alt="Electric" 
          width={40} 
          height={40} 
          className="object-contain"
        />
      ) }
  ]
  
  
  export default function BrowseByType() {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">Browse by Type</h2>
          <div className="grid grid-cols-3 md:grid-cols-9 gap-8">
            {categories.map(({ name, icon: Icon }) => (
              <div key={name} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-3">
                  <Icon className="w-10 h-10 text-gray-700" />
                </div>
                <span className="text-sm font-medium text-gray-700">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  