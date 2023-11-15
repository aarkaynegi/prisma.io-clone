import { Container } from 'pages/Home/container/Container'
import './Header.css'
import { HeaderButton } from './HeaderButton'
import { HeaderLogo } from './HeaderLogo'
import { NavBar } from './NavBar'

export function Header() {
  return (
    <>
      <div className="w-full">
        <div className="fontInter bg-[#1a202c] w-full p-[16px]">
          <div className="max-w-[1200px] flex justify-center items-center m-auto text-center">
            <a
              href="https://pris.ly/pdp"
              className="text-[#e2e8f0] leading-[24px] font-[400] text-[18px] font-[300]"
            >
              <b className="text-[#71e8df] font-[600]">Accelerate</b> in
              Preview: Global database cache with scalable connection pooling
              -&gt; <u className="underline">Get started</u>
            </a>
          </div>
        </div>
      </div>
      <Container>
        <div className="flex justify-between items-center py-[8px] m-auto">
          <HeaderLogo />
          <NavBar />
          <HeaderButton />
        </div>
      </Container>
    </>
  )
}
