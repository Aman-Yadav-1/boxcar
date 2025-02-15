export type CarCategory = 'suv' | 'sedan' | 'hatchback' | 'hybrid' | 'coupe'

export interface Car {
  id: string
  brand: string
  model: string
  spec: string
  image: string
  mileage: {
    icon: string
    value: string
  }
  transmission: {
    icon: string
    value: string
  }
  fuel: {
    icon: string
    value: string
  }
  price: {
    original: number
    discounted: number
  }
  feature: string
}

export type CarsData = {
  [key in CarCategory]: Car[]
}
