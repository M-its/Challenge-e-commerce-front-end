import { MagnifyingGlassIcon } from '@phosphor-icons/react'

import Container from '../components/container'
import InputText from '../components/input'
import LensFilters from '../core-components/lens-filter'
import LensList from '../core-components/lens-list'
import { useEffect } from 'react'

const lenses = [
  {
    model: 'Nikon NIKKOR Z 24-70mm f/2.8 S',
    brand: 'Nikon',
    type: 'Zoom',
    focalLength: '24-70mm',
    maxAperture: 'f/2.8',
    mount: 'Nikon Z Mount',
    weight: '805g',
    hasStabilization: true,
    active: true,
  },
  {
    model: 'Canon RF 70-200mm f/2.8L IS USM',
    brand: 'Canon',
    type: 'Telephoto',
    focalLength: '70-200mm',
    maxAperture: 'f/2.8',
    mount: 'Canon RF Mount',
    weight: '1070g',
    hasStabilization: true,
    active: true,
  },
  {
    model: 'Sony FE 85mm f/1.4 GM',
    brand: 'Sony',
    type: 'Prime',
    focalLength: '85mm',
    maxAperture: 'f/1.4',
    mount: 'Sony E Mount',
    weight: '820g',
    hasStabilization: false,
    active: false,
  },
]

export default function Home() {
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('http://localhost:3333/products')
      const data = await res.json()
      console.log(data)
    }

    fetchProducts()
  }, [])
  return (
    <Container className="space-y-6">
      <InputText
        label="search"
        hideLabel
        icon={MagnifyingGlassIcon}
        placeholder="Search lenses..."
      />
      <LensFilters />
      <LensList lenses={lenses} />
    </Container>
  )
}
