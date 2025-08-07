import { PenNibIcon } from '@phosphor-icons/react'
import Badge from '../components/badge'
import Text from '../components/text'
import Button from '../components/button'
import Card from '../components/card'
import { NavLink } from 'react-router'

interface LensCardProps {
  lens: {
    id: string
    model: string
    brand: string
    type: string
    focalLength: string
    maxAperture: string
    mount: string
    weight: string
    hasStabilization: boolean
    active: boolean
  }
}

export default function LensCard({ lens }: LensCardProps) {
  return (
    <Card className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <Text variant="text-lg-bold" className="text-slate-200">
            {lens.model}
          </Text>
          <Badge variant={lens.active ? 'active' : 'inactive'}>
            {lens.active ? 'active' : 'inactive'}
          </Badge>
        </div>
        <Text as="p" className="text-sm text-gray-500">
          Brand: <Text className="text-gray-400">{lens.brand}</Text>
        </Text>
        <Text as="p" className="text-sm text-gray-500">
          Type: <Text className="text-gray-400">{lens.type}</Text>
        </Text>
        <Text as="p" className="text-sm text-gray-500">
          Focal Length:{' '}
          <Text className="text-gray-400">{lens.focalLength}</Text>
        </Text>
        <Text as="p" className="text-sm text-gray-500">
          Max Aperture:{' '}
          <Text className="text-gray-400">{lens.maxAperture}</Text>
        </Text>
        <Text as="p" className="text-sm mb-2 text-gray-500">
          Mount: <Text className="text-gray-400">{lens.mount}</Text>
        </Text>
        <div className="flex justify-between items-center text-sm text-slate-200">
          <Text>{lens.weight}</Text>
          <Text>
            {lens.hasStabilization ? 'Has stabilization' : 'No stabilization'}
          </Text>
        </div>
      </div>
      <div className="flex mt-4">
        <NavLink to={`/edit-product/${lens.id}`} className="w-full">
          <Button icon={PenNibIcon} size="sm" className="w-full">
            Update
          </Button>
        </NavLink>
      </div>
    </Card>
  )
}
