import { NavLink, Outlet } from 'react-router'
import Container from '../components/container'
import Button from '../components/button'
import { PlusIcon } from '@phosphor-icons/react'

export default function LayoutMain() {
  return (
    <>
      <Container as="header">
        Ola Mundo - HEADER
        <NavLink to="/create-product">
          <Button icon={PlusIcon}>Novo produto</Button>
        </NavLink>
      </Container>
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </>
  )
}
