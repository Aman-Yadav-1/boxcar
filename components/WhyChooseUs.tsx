import Image from 'next/image'
import priceTag from '@/app/images/price-tag (1) 1.png'
import diamond from '@/app/images/diamond 1.png'
import carService from '@/app/images/car-service 1.png'
import tag from '@/app/images/tag (1) 1.png'

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-5xl font-bold text-center mb-16">Why Choose Us?</h2>
        <div className="grid md:grid-cols-4 gap-12">
          <div className="p-6 space-y-3">
            <div className="relative w-16 h-16 mb-4">
              <Image
                src={tag}
                alt="Special Financing"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-bold">Special Financing</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Our stress-free finance department that can find financial solutions to save you money.</p>
          </div>
          <div className="p-6 space-y-3">
            <div className="relative w-16 h-16 mb-4">
              <Image
                src={diamond}
                alt="Trusted Dealership"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-bold">Trusted Dealership</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Our stress-free finance department that can find financial solutions to save you money.</p>
          </div>
          <div className="p-6 space-y-3">
            <div className="relative w-16 h-16 mb-4">
              <Image
                src={priceTag}
                alt="Expert Service"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-bold">Expert Service</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Our stress-free finance department that can find financial solutions to save you money.</p>
          </div>
          <div className="p-6 space-y-3">
            <div className="relative w-16 h-16 mb-4">
              <Image
                src={carService}
                alt="Quality Guarantee"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-bold">Quality Guarantee</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Our stress-free finance department that can find financial solutions to save you money.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
