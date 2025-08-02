import Text from './components/text'
import Icon from './components/icon'
import Badge from './components/badge'
import InputText from './components/input'
import {
  CubeIcon,
  PlusIcon,
  TrashIcon,
  MagnifyingGlassIcon,
} from '@phosphor-icons/react'
import Button from './components/button'
import Card from './components/card'
import Container from './components/container'
import Skeleton from './components/skeleton'

export default function App() {
  return (
    <Container>
      <div className="grid gap-5">
        <div className="flex flex-col gap-1">
          <Text variant="text-xl-bold">Hello World</Text>
          <Text variant="text-lg-bold">Hello World</Text>
          <Text>Hello World</Text>
          <Text variant="text-sm-bold">Hello World</Text>
        </div>
        <div className="flex flex-col gap-1">
          <Icon svg={CubeIcon} className="w-6 h-6 fill-blue-500" />
        </div>
        <div className="flex gap-1">
          <Badge variant="active">Active</Badge>
          <Badge variant="inactive">Inactive</Badge>
          <Badge loading>Inactive</Badge>
        </div>
        <div className="flex flex-row gap-3">
          <Button icon={PlusIcon}>Novo produto</Button>
          <Button variant="secondary" icon={TrashIcon}>
            Novo produto
          </Button>
        </div>
        <div>
          <InputText
            icon={MagnifyingGlassIcon}
            placeholder="Search lenses..."
          />
        </div>

        <div>
          <Card size="md" className="text-slate-200">
            Hello World!!
          </Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-96 h-6" />
        </div>
      </div>
    </Container>
  )
}
