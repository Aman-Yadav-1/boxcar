import { Button } from '@/components/ui/button'
import { BsArrowUpRight } from "react-icons/bs";
import Invoice from '@/app/images/invoice.png'
import CTA from '@/app/images/cta1.png'
import Image from 'next/image'

export default function DualCTA() {
  return (
    <section className="container max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-full h-[300px] rounded-2xl p-8 text-black bg-[#E9F2FF] flex items-center">
            <div>
            <h3 className="text-2xl font-bold mb-4">Are You Looking For a Car?</h3>
            <p className="mb-6 max-w-md leading-relaxed">
              Find your perfect match from our extensive collection 
              of quality vehicles
            </p>
            <Button className="bg-[#405FF2] text-white px-7 py-7 rounded-xl font-semibold">
              Get Started <BsArrowUpRight/>
            </Button>
          </div>
          <Image
          src={CTA}
          alt="CTA"
          className="w-24 h-24 mt-28 ml-auto"
          />
        </div>
        
        <div className="w-full h-[300px] rounded-2xl p-8 text-black bg-[#FFE9F3] flex items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Do You Want to Sell a Car?</h3>
            <p className="mb-6 max-w-md leading-relaxed">
              List your vehicle and reach thousands 
              of potential buyers
            </p>
            <Button className="bg-black text-white px-7 py-7 rounded-xl font-semibold">
            Get Started <BsArrowUpRight/>
            </Button>
          </div>
          <Image
          src={Invoice}
          alt="Invoice"
          className="w-24 h-24 mt-28 ml-auto"
          />
        </div>
      </div>
    </section>
  )
}