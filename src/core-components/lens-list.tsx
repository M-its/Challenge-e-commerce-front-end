import { ApertureIcon } from '@phosphor-icons/react'
import Text from '../components/text'
import Icon from '../components/icon'
import LensCard from './lens-card'

interface Lens {
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

export default function LensList({ lenses }: { lenses: Lens[] }) {
  if (!lenses || lenses.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Text
          variant="text-xl-bold"
          className="flex items-center text-slate-500 gap-2"
        >
          <Icon svg={ApertureIcon} className="inline text-4xl" />
          Nenhuma lente encontrada.
        </Text>
      </div>
    )
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {lenses.map((lens) => (
        <LensCard key={lens.id} lens={lens} />
      ))}
    </div>
  )
}
