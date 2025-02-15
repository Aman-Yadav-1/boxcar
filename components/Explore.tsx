import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Logo from '@/app/images/logo.png'

export const Explore = () => {
  return (
    <div className="container mx-auto max-w-7xl py-16 mb-12">
      <div className="flex items-center justify-between">
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-bold mb-5">Explore Our Premium<br/> Brands</h2>
            <p className="mt-2 mb-5 text-gray-600 max-w-lg">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
            </p>
            <Button 
              className="mt-4 h-12 bg-[#405FF2] text-white hover:bg-[#405FF2]/90"
            >
              Show All Brands <ArrowUpRight className="ml-2 h-8 w-6" />
            </Button>
          </div>
        </div>
        <div>
          <Image 
            src={Logo} 
            alt="Brand Logo" 
            width={450} 
            height={200}
          />
        </div>
      </div>
    </div>
  )
}

export default Explore
