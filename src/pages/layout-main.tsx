import { NavLink, Outlet } from 'react-router'
import { CubeIcon, PlusIcon } from '@phosphor-icons/react'
import Button from '../components/button'
import Text from '../components/text'
import Icon from '../components/icon'
import Container from '../components/container'

export default function LayoutMain() {
  return (
    <>
      <header className="bg-slate-900">
        <Container
          as="div"
          className="w-full flex flex-row justify-between gap-6"
        >
          <NavLink to="/" className="flex items-center gap-2">
            <Icon svg={CubeIcon} className="w-6 h-6 fill-blue-400" />
            <Text variant="text-xl-bold" className="text-slate-200">
              Lens Manager
            </Text>
          </NavLink>
          <NavLink to="/create-product">
            <Button className="w-48" icon={PlusIcon}>
              Add Lens
            </Button>
          </NavLink>
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
