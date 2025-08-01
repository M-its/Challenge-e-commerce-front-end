import Text from './components/text'
import Icon from './components/icon'
import Badge from './components/badge'
import { Cube } from '@phosphor-icons/react'

export default function App() {
  return (
    <div className="gird gap-3">
      <div className="flex flex-col gap-1">
        <Text variant="text-xl-bold">Hello World</Text>
        <Text variant="text-lg-bold">Hello World</Text>
        <Text>Hello World</Text>
        <Text variant="text-sm-bold">Hello World</Text>
      </div>
      <div className="flex flex-col gap-1">
        <Icon svg={Cube} className="w-6 h-6 fill-blue-500" />
      </div>
      <div>
        <Badge variant="active">Active</Badge>
        <Badge variant="inactive">Inactive</Badge>
      </div>
    </div>
  )
}
