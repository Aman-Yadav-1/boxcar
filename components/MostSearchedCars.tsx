'use client'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'
import { CarCard } from '@/components/carCard'
import { CarCategory, CarsData } from '@/components/types'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const cars: CarsData = {
    suv: [
        {
            id: 'suv1',
            brand: 'Mercedes-Benz',
            model: 'GLE Class',
            spec: '2023 GLE 450 4MATIC AMG Line Premium Plus 5dr 9G-Tronic',
            image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2',
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
            id: 'suv5',
            brand: 'Porsche',
            model: 'Cayenne',
            spec: '2023 Cayenne Turbo GT 5dr Tiptronic S',
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6',
            mileage: { icon: 'Gauge', value: '12,320 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 1259, discounted: 929 },
            feature: 'Low Mileage'
        },
        {
            id: 'suv6',
            brand: 'Lamborghini',
            model: 'Urus',
            spec: '2023 Urus S 5dr Auto',
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6',
            mileage: { icon: 'Gauge', value: '8,240 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 1899, discounted: 1599 },
            feature: 'Great Price'
        },
        {
            id: 'suv7',
            brand: 'Bentley',
            model: 'Bentayga',
            spec: '2023 Bentayga EWB Azure First Edition',
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6',
            mileage: { icon: 'Gauge', value: '5,240 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 2299, discounted: 1999 },
            feature: 'Low Mileage'
        },
        {
            id: 'suv8',
            brand: 'Aston Martin',
            model: 'DBX',
            spec: '2023 DBX707 V8 707 Edition',
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6',
            mileage: { icon: 'Gauge', value: '3,240 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 2199, discounted: 1899 },
            feature: 'Great Price'
        }
    ],
    sedan: [
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
            id: 'sedan5',
            brand: 'Bentley',
            model: 'Flying Spur',
            spec: '2023 Flying Spur Speed W12 4dr Auto',
            image: 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5',
            mileage: { icon: 'Gauge', value: '8,320 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 2259, discounted: 1929 },
            feature: 'Low Mileage'
        },
        {
            id: 'sedan6',
            brand: 'Rolls-Royce',
            model: 'Ghost',
            spec: '2023 Ghost Black Badge 4dr Auto',
            image: 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5',
            mileage: { icon: 'Gauge', value: '5,240 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 3899, discounted: 3599 },
            feature: 'Great Price'
        },
        {
            id: 'sedan7',
            brand: 'Maserati',
            model: 'Quattroporte',
            spec: '2023 Quattroporte Trofeo V8',
            image: 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5',
            mileage: { icon: 'Gauge', value: '12,240 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 1299, discounted: 999 },
            feature: 'Low Mileage'
        },
        {
            id: 'sedan8',
            brand: 'Genesis',
            model: 'G90',
            spec: '2023 G90 3.5T AWD Luxury',
            image: 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5',
            mileage: { icon: 'Gauge', value: '9,240 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 899, discounted: 799 },
            feature: 'Great Price'
        }
    ],
    hatchback: [
        {
            id: 'hatch1',
            brand: 'Volkswagen',
            model: 'Golf R',
            spec: '2023 Golf R 2.0 TSI 333PS 4Motion 5dr DSG',
            image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d',
            mileage: { icon: 'Gauge', value: '15,750 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 459, discounted: 399 },
            feature: 'Great Price'
        },
        {
            id: 'hatch2',
            brand: 'Mercedes-AMG',
            model: 'A45 S',
            spec: '2023 A45 S 4MATIC+ Plus 5dr Auto',
            image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d',
            mileage: { icon: 'Gauge', value: '12,420 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 559, discounted: 499 },
            feature: 'Low Mileage'
        },
        {
            id: 'hatch3',
            brand: 'Audi',
            model: 'RS3',
            spec: '2023 RS3 Sportback 2.5 TFSI Quattro 5dr S Tronic',
            image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d',
            mileage: { icon: 'Gauge', value: '8,240 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 659, discounted: 599 },
            feature: 'Great Price'
        },
        {
            id: 'hatch4',
            brand: 'BMW',
            model: 'M135i',
            spec: '2023 M135i xDrive 5dr Step Auto',
            image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d',
            mileage: { icon: 'Gauge', value: '10,120 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 459, discounted: 399 },
            feature: 'Low Mileage'
        },
        {
            id: 'hatch5',
            brand: 'Toyota',
            model: 'GR Yaris',
            spec: '2023 GR Yaris Circuit Pack 3dr AWD',
            image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d',
            mileage: { icon: 'Gauge', value: '6,840 miles' },
            transmission: { icon: 'Cog', value: 'Manual' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 359, discounted: 329 },
            feature: 'Great Price'
        },
        {
            id: 'hatch6',
            brand: 'Honda',
            model: 'Civic Type R',
            spec: '2023 Civic Type R 2.0 VTEC Turbo 5dr',
            image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d',
            mileage: { icon: 'Gauge', value: '7,240 miles' },
            transmission: { icon: 'Cog', value: 'Manual' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 429, discounted: 389 },
            feature: 'Low Mileage'
        },
        {
            id: 'hatch7',
            brand: 'Hyundai',
            model: 'i30 N',
            spec: '2023 i30 N Performance 5dr DCT',
            image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d',
            mileage: { icon: 'Gauge', value: '9,240 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 389, discounted: 349 },
            feature: 'Great Price'
        },
        {
            id: 'hatch8',
            brand: 'Mini',
            model: 'JCW',
            spec: '2023 John Cooper Works GP 3dr Auto',
            image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d',
            mileage: { icon: 'Gauge', value: '5,240 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 399, discounted: 359 },
            feature: 'Low Mileage'
        }
    ]
    ,
    hybrid: [
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
            id: 'hybrid5',
            brand: 'McLaren',
            model: 'Artura',
            spec: '2023 Artura Performance 2dr SSG',
            image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a',
            mileage: { icon: 'Gauge', value: '4,840 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Hybrid' },
            price: { original: 2259, discounted: 1959 },
            feature: 'Low Mileage'
        },
        {
            id: 'hybrid6',
            brand: 'Porsche',
            model: '918',
            spec: '2023 918 Spyder Weissach Package',
            image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a',
            mileage: { icon: 'Gauge', value: '2,240 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Hybrid' },
            price: { original: 4899, discounted: 4599 },
            feature: 'Great Price'
        },
        {
            id: 'hybrid7',
            brand: 'Mercedes-AMG',
            model: 'GT 63',
            spec: '2023 GT 63 S E Performance 4dr Auto',
            image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a',
            mileage: { icon: 'Gauge', value: '7,240 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Hybrid' },
            price: { original: 1899, discounted: 1699 },
            feature: 'Low Mileage'
        },
        {
            id: 'hybrid8',
            brand: 'Range Rover',
            model: 'Sport',
            spec: '2023 Sport P510e Autobiography Dynamic',
            image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a',
            mileage: { icon: 'Gauge', value: '9,240 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Hybrid' },
            price: { original: 1299, discounted: 1099 },
            feature: 'Great Price'
        }
    ]
    ,
    coupe: [
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
        },
        {
            id: 'coupe5',
            brand: 'McLaren',
            model: '750S',
            spec: '2023 750S Performance',
            image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738',
            mileage: { icon: 'Gauge', value: '1,840 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 2959, discounted: 2759 },
            feature: 'Great Price'
        },
        {
            id: 'coupe6',
            brand: 'Lamborghini',
            model: 'Huracán',
            spec: '2023 Huracán STO',
            image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738',
            mileage: { icon: 'Gauge', value: '2,240 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 3899, discounted: 3599 },
            feature: 'Low Mileage'
        },
        {
            id: 'coupe7',
            brand: 'BMW',
            model: 'M4',
            spec: '2023 M4 CSL 2dr Auto',
            image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738',
            mileage: { icon: 'Gauge', value: '6,240 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Petrol' },
            price: { original: 1299, discounted: 1099 },
            feature: 'Great Price'
        },
        {
            id: 'coupe8',
            brand: 'Lexus',
            model: 'LC',
            spec: '2023 LC 500h Sport Plus Pack',
            image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738',
            mileage: { icon: 'Gauge', value: '8,240 miles' },
            transmission: { icon: 'Cog', value: 'Automatic' },
            fuel: { icon: 'Fuel', value: 'Hybrid' },
            price: { original: 999, discounted: 899 },
            feature: 'Low Mileage'
        }
    ]

}

export default function MostSearchedCars() {
    const [currentPage, setCurrentPage] = useState(1)
    const [activeCategory, setActiveCategory] = useState<CarCategory>('suv')
    const carsPerPage = 4

    const getCurrentCars = () => {
        const currentCars = cars[activeCategory]
        const indexOfLastCar = currentPage * carsPerPage
        const indexOfFirstCar = indexOfLastCar - carsPerPage
        return currentCars.slice(indexOfFirstCar, indexOfLastCar)
    }

    const totalPages = Math.ceil(cars[activeCategory].length / carsPerPage)

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">The Most Searched Cars</h2>
                <Tabs
                    defaultValue="suv"
                    className="flex flex-col items-center"
                    onValueChange={(value) => {
                        setActiveCategory(value as CarCategory)
                        setCurrentPage(1)
                    }}
                >
                    <div className="relative mb-8">
                        <TabsList className="relative z-10 bg-transparent flex flex-wrap justify-center">
                            <TabsTrigger value="suv" className="relative mx-2">
                                SUV
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 transition-transform data-[state=active]:scale-x-100" />
                            </TabsTrigger>
                            <TabsTrigger value="sedan" className="relative mx-2">
                                Sedan
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 transition-transform data-[state=active]:scale-x-100" />
                            </TabsTrigger>
                            <TabsTrigger value="hatchback" className="relative mx-2">
                                Hatchback
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 transition-transform data-[state=active]:scale-x-100" />
                            </TabsTrigger>
                            <TabsTrigger value="hybrid" className="relative mx-2">
                                Hybrid
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 transition-transform data-[state=active]:scale-x-100" />
                            </TabsTrigger>
                            <TabsTrigger value="coupe" className="relative mx-2">
                                Coupe
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 transition-transform data-[state=active]:scale-x-100" />
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                        {getCurrentCars().map(car => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>

                    <div className="flex items-center justify-center space-x-4 mt-12">
                        <Button
                            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                            className="p-2 rounded-full bg-white border-black text-gray-400 hover:bg-primary hover:text-white transition-all"
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
                            className="p-2 rounded-full bg-white border-black text-gray-400 hover:bg-primary hover:text-white transition-all"
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </Tabs>
            </div>
        </section>
    )
}
