import { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from '@phosphor-icons/react'

import Container from '../components/container'
import InputText from '../components/input'
import LensFilters from '../core-components/lens-filter'
import LensList from '../core-components/lens-list'
import LensListSkeleton from '../core-components/lens-list-skeleton'
import Button from '../components/button'
import Text from '../components/text'

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

export default function Home() {
  const [lenses, setLenses] = useState<Lens[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [limit] = useState(9)
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      try {
        const url = new URL('http://localhost:3333/products')

        if (search.trim()) {
          url.pathname = '/products/search'
          url.searchParams.append('model', search)
          url.searchParams.append('brand', search)
        } else {
          if (filter === 'active') url.pathname = '/products/active'
          else if (filter === 'inactive') url.pathname = '/products/inactive'
          else url.pathname = '/products'

          url.searchParams.append('page', page.toString())
          url.searchParams.append('limit', limit.toString())
        }

        const res = await fetch(url.toString())

        if (!res.ok) {
          if (res.status === 404) {
            setLenses([])
            setTotalPages(1)
            return
          }
          throw new Error('Erro ao buscar lentes')
        }

        const data = await res.json()

        let products: Lens[] = []
        let total = 0

        if (Array.isArray(data.products)) {
          products = data.products
          total = products.length
        } else if (data.products && Array.isArray(data.products.products)) {
          products = data.products.products
          total = data.products.total || products.length
        }

        setLenses(products)
        setTotalPages(Math.ceil(total / limit) || 1)
      } catch (error) {
        console.error('Erro ao buscar lentes', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [page, limit, filter, search])
  return (
    <Container className="space-y-6 flex flex-col h-[800px]">
      <InputText
        label="search"
        hideLabel
        icon={MagnifyingGlassIcon}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search lenses..."
      />
      <LensFilters filter={filter} setFilter={setFilter} />
      {loading ? <LensListSkeleton /> : <LensList lenses={lenses} />}
      {!lenses || lenses.length === 0 ? (
        ''
      ) : (
        <div className="flex gap-4 items-center justify-center pt-4">
          <Button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="text-slate-200"
          >
            ←
          </Button>
          <Text className="text-slate-400">
            Página {page} de {totalPages}
          </Text>
          <Button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="text-slate-200"
          >
            →
          </Button>
        </div>
      )}
    </Container>
  )
}
