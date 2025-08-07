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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {lenses.map((lens) => (
        <LensCard key={lens.id} lens={lens} />
      ))}
    </div>
  )
}
