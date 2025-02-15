import Image from 'next/image';
import { useState, useMemo } from 'react';

interface Car {
  id: string;
  make: string;
  image: { src: string; width: number; height: number };
  model: string;
  year: number;
  price: number;
}

interface CarGridProps {
  title: string;
  cars: Car[];
  showFilters: boolean;
}

export default function CarGrid({ title, cars, showFilters }: CarGridProps) {
  const [sortBy, setSortBy] = useState<'price' | 'year'>('price');
  const [filterMake, setFilterMake] = useState<string>('');

  const makes = useMemo(() => {
    return [...new Set(cars.map(car => car.make))];
  }, [cars]);

  const filteredAndSortedCars = useMemo(() => {
    return cars
      .filter(car => !filterMake || car.make === filterMake)
      .sort((a, b) => a[sortBy] - b[sortBy]);
  }, [cars, filterMake, sortBy]);

  return (
    <section className="px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          
          {showFilters && (
            <div className="flex gap-4 mt-4 sm:mt-0">
              <select
                className="border rounded-md px-3 py-2"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'year')}
              >
                <option value="price">Sort by Price</option>
                <option value="year">Sort by Year</option>
              </select>
              
              <select
                className="border rounded-md px-3 py-2"
                value={filterMake}
                onChange={(e) => setFilterMake(e.target.value)}
              >
                <option value="">All Makes</option>
                {makes.map(make => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedCars.map(car => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src={car.image}
                  alt={`${car.year} ${car.make} ${car.model}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {car.year} {car.make} {car.model}
                </h3>
                <p className="text-gray-600 text-lg">
                  ${car.price.toLocaleString()}
                </p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}