export const NavBar: React.FunctionComponent = () => {
  return (
    <div className="nav">
      <nav>
        <ul className="flex sm:justify-center gap-[10px] font-bold">
          <li className="nav-link group">
            <div className="nav-item flex gap-1 items-center">
              <a href="./products">Products</a>
              <i className="fa-solid fa-chevron-down group-hover:rotate-180 duration-100"></i>
            </div>
            <div className="hidden">
              <div className="">
                <div className="pt-[24px]">
                  <div className="py-[2rem]">
                    <h4 className="mt-[0.75rem] mb-[1.125rem] text-[#718096]">
                      Prisma ORM
                    </h4>
                    <a
                      href="/client"
                      className="pl-[2rem] pr-[1rem] mb-[1rem] flex items-center gap-[12px]"
                    >
                      <div className="p-[8px]">
                        <i className="fa-regular fa-terminal"></i>
                      </div>
                      <div className="">
                        <div className="font-semibold mb-[0.25rem] text-[#2d3748]">
                          Client
                        </div>
                        <div className="text-[#718096] leading-[1.28]">
                          Write Queries the way you think
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-link">
            <div className="nav-item flex gap-1 items-center">
              <a href="./docs">Docs</a>
            </div>
          </li>
          <li className="nav-link">
            <div className="nav-item flex gap-1 items-center">
              <a href="./developer">Developer</a>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </li>
          <li className="nav-link">
            <div className="nav-item flex gap-1 items-center">
              <a href="./use-cases">Use Cases</a>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </li>
          <li className="nav-link">
            <div className="nav-item flex gap-1 items-center">
              <a href="./company">Company</a>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
