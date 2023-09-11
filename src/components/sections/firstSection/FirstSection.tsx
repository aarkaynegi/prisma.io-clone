import './FirstSection.css'

export function FirstSection() {
  return (
    <>
      <div className="first-section pt-[64px] pb-[116px]">
        <div className="px-[1.5rem] m-auto max-w-[1248px]">
          <div className="flex text-[#ffffff] justify-around">
            <div className="flex items-center">
              <a href="https://github.com/prisma/prisma">Link</a>
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
        <div className=""></div>
      </div>
    </>
  )
}
