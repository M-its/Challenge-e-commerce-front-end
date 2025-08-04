import Button from '../components/button'

export default function LensFilters() {
  return (
    <div className="flex gap-4">
      <Button>All Lenses</Button>
      <Button>Active</Button>
      <Button>Inactive</Button>
    </div>
  )
}
