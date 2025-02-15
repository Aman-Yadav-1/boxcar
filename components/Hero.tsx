// components/home/HeroSection.jsx
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronDown, Search } from 'lucide-react';
import Images from '@/app/images/tesla-s.png'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white px-8 py-24 text-center">
    <p className='text-sm text-black mb-8'>Find cars for sale and for rent near you</p>
    <h1 className="text-6xl font-bold text-gray-900 mb-12 tracking-tight">Find Your Dream Car</h1>
      <div className="max-w-[924px] h-[76px] mx-auto bg-white rounded-[120px] shadow-xl drop-shadow-md p-2 flex items-center justify-between">
        <div className="flex-1 flex items-center justify-center px-6 py-3 hover:bg-gray-50 rounded-full cursor-pointer transition-colors">
          <span className="text-center">Used Cars</span>
          <ChevronDown className="ml-2 w-5 h-5 text-gray-500" />
        </div>
        <div className="flex-1 flex items-center justify-center px-6 py-3 hover:bg-gray-50 rounded-full cursor-pointer transition-colors border-l border-gray-200">
          <span className="text-center">Any Make</span>
          <ChevronDown className="ml-2 w-5 h-5 text-gray-500" />
        </div>
        <div className="flex-1 flex items-center justify-center px-6 py-3 hover:bg-gray-50 rounded-full cursor-pointer transition-colors border-l border-gray-200">
          <span className="text-center">Any Model</span>
          <ChevronDown className="ml-2 w-5 h-5 text-gray-500" />
        </div>
        <div className="flex-1 flex items-center justify-center px-6 py-3 hover:bg-gray-50 rounded-full cursor-pointer transition-colors border-l border-gray-200">
          <span className="text-center">Any Price</span>
          <ChevronDown className="ml-2 w-5 h-5 text-gray-500" />
        </div>
        <Button className="ml-2 rounded-full h-12 w-12 flex items-center justify-center bg-[#405FF2] hover:bg-[#3048d2] transition-colors shrink-0">
          <Search className="w-5 h-5" />
        </Button>
      </div>
  
      <div className="max-w-5xl mx-auto">
        <Image 
          src={Images}
          alt="Tesla Model S" 
          width={1000}
          height={500}
          className="w-full h-auto rounded-2xl"
        />
      </div>
    </section>
  );
}