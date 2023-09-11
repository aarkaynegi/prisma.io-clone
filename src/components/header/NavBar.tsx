export const NavBar: React.FunctionComponent = () => {
  return (
    <div className="nav">
      <nav>
        <ul className="flex sm:justify-center gap-[10px] font-bold">
          <li className="nav-link">
            <div className="nav-item flex gap-1 items-center">
              <a href="./products">Products</a>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="nav-sub-item">
              <div className="">
                <div className="mt-[24px]">
                  <div className="py-[2rem] bg-[#ffffff] shadow-[rgb(0 0 0 / 6%)] rounded-[20px] w-[400px]">
                    <h4 className="mt-[0.75rem] mb-[1.125rem] text-[#718096]">
                      Prisma ORM
                    </h4>
                    <a href="/client">
                      <div className="p-[8px]">
                        <i className="fa-solid fa-terminal"></i>
                      </div>
                      <div>
                        <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                          Client
                        </div>
                        <div className="text-[#718096] leading-[1.28] text-[14px] font-normal">
                          Write Queries the way you think
                        </div>
                      </div>
                    </a>
                    <a href="/migrate">
                      <div className="p-[8px]">
                        <i className="fa-solid fa-arrows-rotate"></i>
                      </div>
                      <div>
                        <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                          Migrate
                        </div>
                        <div className="text-[#718096] leading-[1.28] text-[14px] font-normal">
                          Generate customisable SQL migrations
                        </div>
                      </div>
                    </a>
                    <h4 className="mt-[0.75rem] mb-[1.125rem] text-[#718096]">
                      Prisma Data Platform
                    </h4>
                    <a href="/data-platform/acc elerate">
                      <div className="p-[8px]">
                        <i className="fa-solid fa-bolt"></i>
                      </div>
                      <div>
                        <div>
                          <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                            Accelerate<span>preview</span>
                          </div>
                        </div>
                        <div className="text-[#718096] leading-[1.28] text-[14px] font-normal">
                          Query up to 1000x faster
                        </div>
                      </div>
                    </a>
                    <a href="/data-platform/pulse">
                      <div className="p-[8px]">
                        <i className="fa-solid fa-wave-square"></i>
                      </div>
                      <div>
                        <div>
                          <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                            Pulse<span>early access</span>
                          </div>
                        </div>
                        <div className="text-[#718096] leading-[1.28] text-[14px] font-normal">
                          Make your database real-time
                        </div>
                      </div>
                    </a>
                    <a href=" /data-platform">
                      <div className="p-[8px]">
                        <i className="fa-solid fa-database"></i>
                      </div>
                      <div>
                        <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                          Data Browser
                        </div>
                        <div className="text-[#718096] leading-[1.28] text-[14px] font-normal">
                          Explore and manipulate data in your projects
                        </div>
                      </div>
                    </a>
                    <a href=" /data-platform/proxy">
                      <div className="p-[8px]">
                        <i className="fa-solid fa-server"></i>
                      </div>
                      <div>
                        <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                          Data Proxy
                        </div>
                        <div className="text-[#718096] leading-[1.28] text-[14px] font-normal">
                          Manage and scale your connection pool
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
