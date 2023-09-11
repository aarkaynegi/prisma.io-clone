import { HeaderButton } from './HeaderButton'
import { HeaderLogo } from './HeaderLogo'
import { NavBar } from './NavBar'
import './Header.css'

export function Header() {
  return (
    <div className="flex justify-between items-center max-w-[1248px] px-[1.5rem] py-[8px] m-auto">
      <HeaderLogo />
      <NavBar />
      <HeaderButton />
    </div>
  )
}
