import { Outlet } from 'react-router'
import Header from '../core-components/Header'

export default function LayoutMain() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
