import './FirstSection.css'
import { Testimonials } from './Testimonials'

export function FirstSection() {
  return (
    <>
      <div className="first-section pt-[64px] pb-[116px]">
        <div className="px-[1.5rem] m-auto max-w-[1248px]">
          <div className="flex text-[#ffffff] items-center gap-[30px] md:gap-0 md:justify-around flex-col md:flex-row ">
            <div className="flex items-center relative">
              <a
                href="https://github.com/prisma/prisma"
                className="absolute w-full h-[40px]"
              >
                {'\u00A0'}
              </a>
              <i className="fa-brands fa-github fa-2x me-[24px]"></i>
              <span className="font-[700] text-[38px] leading-[100%] me-[8px]">
                30k+
              </span>
              <span className="text-[24px] mt-[8px] leading-[120%]">
                Stars on GitHub
              </span>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-rocket fa-2x me-[24px]"></i>
              <span className="font-[700] text-[38px] leading-[100%] me-[8px]">
                250k+
              </span>
              <span className="text-[24px] mt-[8px] leading-[120%]">
                Active developers
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <Testimonials />
        </div>
      </div>
    </>
  )
}
