import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarGrid from '../components/CarGrid';
import { useState, useEffect } from 'react';

interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  image: {
    src: string;
    width: number;
    height: number;
  };
}

export default function InventoryPage() {
  const [inventoryCars, setInventoryCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/inventory');
      const data = await response.json();
      setInventoryCars(data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="px-8 py-16 bg-gray-50">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Our Inventory
          </h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Browse our extensive collection of premium vehicles from top manufacturers.
          </p>
        </section>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
          </div>
        ) : (
          <CarGrid 
            title="Available Vehicles" 
            cars={inventoryCars} 
            showFilters
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
