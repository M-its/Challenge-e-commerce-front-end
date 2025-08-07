import { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from '@phosphor-icons/react'

import Container from '../components/container'
import InputText from '../components/input'
import LensFilters from '../core-components/lens-filter'
import LensList from '../core-components/lens-list'
import Button from '../components/button'
import Text from '../components/text'

export default function Home() {
  const [lenses, setLenses] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [limit] = useState(9)
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      try {
        const url = 'http://localhost:3333'
        let endpoint = '/products'

        if (filter === 'active') {
          endpoint = '/products/active'
        } else if (filter === 'inactive') {
          endpoint = '/products/inactive'
        }

        const res = await fetch(`${url}${endpoint}?page=${page}&limit=${limit}`)

        const data = await res.json()
        const products = data.products.products
        const totalPages = Math.ceil(data.products.total / 9)

        setLenses(products || [])
        setTotalPages(totalPages || 1)
      } catch (error) {
        console.error('Erro ao buscar lentes', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [page, limit, filter])
  return (
    <Container className="space-y-6">
      <InputText
        label="search"
        hideLabel
        icon={MagnifyingGlassIcon}
        placeholder="Search lenses..."
      />
      <LensFilters filter={filter} setFilter={setFilter} />
      {loading ? (
        <p className="text-slate-400">Carregando...</p>
      ) : (
        <LensList lenses={lenses} />
      )}
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
    </Container>
  )
}
