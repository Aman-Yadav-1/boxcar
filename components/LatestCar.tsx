'use client'
import { useState } from 'react'
import { CarCard } from '@/components/carCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const selectedCars = [
    {
        id: 'suv1',
        brand: 'Mercedes-Benz',
        model: 'GLE Class',
        spec: '2023 GLE 450 4MATIC AMG Line Premium Plus 5dr 9G-Tronic',
        image: 'https://images.unsplash.com/photo-1633707007826-4c2e6e92a122',
        mileage: { icon: 'Gauge', value: '72,925 miles' },
        transmission: { icon: 'Cog', value: 'Automatic' },
        fuel: { icon: 'Fuel', value: 'Petrol' },
        price: { original: 789, discounted: 399 },
        feature: 'Low Mileage'
    },
    {
        id: 'suv2',
        brand: 'BMW',
        model: 'X7',
        spec: '2023 X7 M60i 4dr Auto',
        image: 'https://images.unsplash.com/photo-1633707007826-4c2e6e92a122',
        mileage: { icon: 'Gauge', value: '15,620 miles' },
        transmission: { icon: 'Cog', value: 'Automatic' },
        fuel: { icon: 'Fuel', value: 'Petrol' },
        price: { original: 999, discounted: 799 },
        feature: 'Great Price'
    },
    {
        id: 'sedan1',
        brand: 'Mercedes-Benz',
        model: 'S-Class',
        spec: '2023 S500 AMG Line Premium Plus Executive 4dr 9G-Tronic',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
        mileage: { icon: 'Gauge', value: '25,140 miles' },
        transmission: { icon: 'Cog', value: 'Automatic' },
        fuel: { icon: 'Fuel', value: 'Petrol' },
        price: { original: 1289, discounted: 959 },
        feature: 'Low Mileage'
    },
    {
        id: 'sedan2',
        brand: 'BMW',
        model: '7 Series',
        spec: '2023 i7 M70 xDrive 4dr Auto',
        image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd',
        mileage: { icon: 'Gauge', value: '18,620 miles' },
        transmission: { icon: 'Cog', value: 'Automatic' },
        fuel: { icon: 'Fuel', value: 'Electric' },
        price: { original: 1399, discounted: 1199 },
        feature: 'Great Price'
    },
    {
        id: 'hybrid1',
        brand: 'Toyota',
        model: 'Prius',
        spec: '2023 Prius 2.0 Plug-in Dynamic Force 5dr CVT',
        image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a',
        mileage: { icon: 'Gauge', value: '8,320 miles' },
        transmission: { icon: 'Cog', value: 'Automatic' },
        fuel: { icon: 'Fuel', value: 'Hybrid' },
        price: { original: 359, discounted: 299 },
        feature: 'Low Mileage'
    },
    {
        id: 'hybrid2',
        brand: 'Lexus',
        model: 'RX',
        spec: '2023 RX 500h F Sport Performance',
        image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a',
        mileage: { icon: 'Gauge', value: '12,420 miles' },
        transmission: { icon: 'Cog', value: 'Automatic' },
        fuel: { icon: 'Fuel', value: 'Hybrid' },
        price: { original: 659, discounted: 559 },
        feature: 'Great Price'
    },
    {
        id: 'coupe1',
        brand: 'Mercedes-AMG',
        model: 'GT',
        spec: '2023 GT 63 S E Performance 4dr Auto',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738',
        mileage: { icon: 'Gauge', value: '5,240 miles' },
        transmission: { icon: 'Cog', value: 'Automatic' },
        fuel: { icon: 'Fuel', value: 'Hybrid' },
        price: { original: 1899, discounted: 1599 },
        feature: 'Great Price'
    },
    {
        id: 'coupe2',
        brand: 'Porsche',
        model: '911 GT3 RS',
        spec: '2023 911 GT3 RS 4.0 PDK',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738',
        mileage: { icon: 'Gauge', value: '3,420 miles' },
        transmission: { icon: 'Cog', value: 'Automatic' },
        fuel: { icon: 'Fuel', value: 'Petrol' },
        price: { original: 2559, discounted: 2299 },
        feature: 'Low Mileage'
    },
    {
        id: 'suv3',
        brand: 'Audi',
        model: 'Q8',
        spec: '2023 Q8 SQ8 TFSI Quattro 5dr Tiptronic',
        image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e',
        mileage: { icon: 'Gauge', value: '22,140 miles' },
        transmission: { icon: 'Cog', value: 'Automatic' },
        fuel: { icon: 'Fuel', value: 'Petrol' },
        price: { original: 889, discounted: 659 },
        feature: 'Low Mileage'
    },
    {
        id: 'sedan3',
        brand: 'Audi',
        model: 'A8',
        spec: '2023 A8 L 60 TFSI e Quattro Vorsprung 4dr Tiptronic',
        image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e',
        mileage: { icon: 'Gauge', value: '22,140 miles' },
        transmission: { icon: 'Cog', value: 'Automatic' },
        fuel: { icon: 'Fuel', value: 'Hybrid' },
        price: { original: 1089, discounted: 859 },
        feature: 'Low Mileage'
    },
    {
        id: 'hybrid3',
        brand: 'BMW',
        model: 'XM',
        spec: '2023 XM Label Red 4dr Auto',
        image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a',
        mileage: { icon: 'Gauge', value: '6,240 miles' },
        transmission: { icon: 'Cog', value: 'Automatic' },
        fuel: { icon: 'Fuel', value: 'Hybrid' },
        price: { original: 1459, discounted: 1299 },
        feature: 'Low Mileage'
    },
    {
        id: 'coupe3',
        brand: 'Aston Martin',
        model: 'DBS',
        spec: '2023 DBS 770 Ultimate V12',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738',
        mileage: { icon: 'Gauge', value: '4,240 miles' },
        transmission: { icon: 'Cog', value: 'Automatic' },
        fuel: { icon: 'Fuel', value: 'Petrol' },
        price: { original: 2859, discounted: 2599 },
        feature: 'Great Price'
    },
    {
        id: 'suv4',
        brand: 'Range Rover',
        model: 'Sport',
        spec: '2023 Range Rover Sport P530 V8 First Edition',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6',
        mileage: { icon: 'Gauge', value: '18,750 miles' },
        transmission: { icon: 'Cog', value: 'Automatic' },
        fuel: { icon: 'Fuel', value: 'Petrol' },
        price: { original: 1159, discounted: 899 },
        feature: 'Great Price'
    },
    {
        id: 'sedan4',
        brand: 'Porsche',
        model: 'Panamera',
        spec: '2023 Panamera Turbo S E-Hybrid Sport Turismo',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
        mileage: { icon: 'Gauge', value: '15,750 miles' },
        transmission: { icon: 'Cog', value: 'Automatic' },
        fuel: { icon: 'Fuel', value: 'Hybrid' },
        price: { original: 1459, discounted: 1199 },
        feature: 'Great Price'
    },
    {
        id: 'hybrid4',
        brand: 'Ferrari',
        model: 'SF90',
        spec: '2023 SF90 Stradale 2dr Auto',
        image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a',
        mileage: { icon: 'Gauge', value: '3,120 miles' },
        transmission: { icon: 'Cog', value: 'Automatic' },
        fuel: { icon: 'Fuel', value: 'Hybrid' },
        price: { original: 3899, discounted: 3599 },
        feature: 'Great Price'
    },
    {
        id: 'coupe4',
        brand: 'Ferrari',
        model: '296 GTB',
        spec: '2023 296 GTB Assetto Fiorano',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738',
        mileage: { icon: 'Gauge', value: '2,120 miles' },
        transmission: { icon: 'Cog', value: 'Automatic' },
        fuel: { icon: 'Fuel', value: 'Hybrid' },
        price: { original: 3459, discounted: 3199 },
        feature: 'Low Mileage'
    }
]

export default function LatestCars() {
    const [currentPage, setCurrentPage] = useState(1)
    const carsPerPage = 4

    const getCurrentCars = () => {
        const indexOfLastCar = currentPage * carsPerPage
        const indexOfFirstCar = indexOfLastCar - carsPerPage
        return selectedCars.slice(indexOfFirstCar, indexOfLastCar)
    }

    const totalPages = Math.ceil(selectedCars.length / carsPerPage)

    return (
        <section className="py-16 bg-white max-w-7xl mx-auto">
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-5xl font-bold text-center mb-12 text-black">Latest Cars</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {getCurrentCars().map(car => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>

                <div className="flex items-center justify-center space-x-4 mt-12">
                    <Button
                        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                        className="p-2 rounded-full bg-white border-black text-gray-400 hover:bg-[#405FF2] hover:text-white transition-all"
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </Button>

                    <div className="flex space-x-2 text-gray-400">
                        <span className={currentPage === 1 ? 'text-white' : ''}>1</span>
                        <span className={currentPage === 2 ? 'text-white' : ''}>2</span>
                        <span>...</span>
                        <span className={currentPage === 4 ? 'text-white' : ''}>4</span>
                        <span className={currentPage === 5 ? 'text-white' : ''}>5</span>
                    </div>

                    <Button
                        onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                        className="p-2 rounded-full bg-white border-black text-gray-400 hover:bg-[#405FF2] hover:text-white transition-all"
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            <div className="text-center mt-10">
                <h3 className="text-black text-left font-bold text-4xl mb-4">Need Some Inspiration?</h3>
                <div className="flex flex-wrap justify-left gap-12 mt-8 text-black">
                    <span>Automatics Cars</span>
                    <span>SUVs</span>
                    <span>Electric Cars</span>
                    <span>New in Stock</span>
                    <span>Petrol</span>
                    <span>Diesel</span>
                </div>
            </div>
        </section>
    )
}
