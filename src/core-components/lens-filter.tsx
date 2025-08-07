import Button from '../components/button'

interface LensFiltersProps {
  filter: string
  setFilter: (value: string) => void
}

export default function LensFilters({ filter, setFilter }: LensFiltersProps) {
  return (
    <div className="flex gap-4">
      <Button
        onClick={() => setFilter('all')}
        variant={filter === 'all' ? 'tertiary' : 'primary'}
      >
        All Lenses
      </Button>
      <Button
        onClick={() => setFilter('active')}
        variant={filter === 'active' ? 'tertiary' : 'primary'}
      >
        Active
      </Button>
      <Button
        onClick={() => setFilter('inactive')}
        variant={filter === 'inactive' ? 'tertiary' : 'primary'}
      >
        Inactive
      </Button>
    </div>
  )
}
