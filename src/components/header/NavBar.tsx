import logo from '../../assets/images/prisma-logo.svg'
import playground from '../../assets/images/nav-playground.svg'

export const NavBar: React.FunctionComponent = () => {
  return (
    <div className="nav">
      <nav>
        <ul className="flex sm:justify-center gap-[10px]">
          <li className="nav-link">
            <div className="nav-item flex gap-1 items-center">
              <a href="./products" className="font-[500]">
                Product
              </a>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="nav-sub-item product_nav-sub-item">
              <div className="">
                <div className="pt-[24px] mt-[12px]">
                  <div className="w-[400px] py-[2rem] bg-[#ffffff] shadow-[rgb(0 0 0 / 6%)] rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
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
            <div className="nav-sub-item developer_nav-sub-items">
              <div className="">
                <div className="pt-[24px] mt-[12px]">
                  <div className="w-[870px] grid grid-cols-[repeat(2,auto)] gap-[16px] bg-[#ffffff] shadow-[rgb(0 0 0 / 6%)] rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                    <div className="items grid grid-cols-[repeat(2,auto)] gap-[16px] py-[2rem]">
                      <a href="./docs/getting-started" className="">
                        <div className="p-[8px]">
                          <i className="fa-solid fa-chart-line"></i>
                        </div>
                        <div>
                          <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                            Get Started
                          </div>
                        </div>
                      </a>
                      <a href="./learn">
                        <div className="p-[8px]">
                          <i className="fa-solid fa-book-open"></i>
                        </div>
                        <div>
                          <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                            Tutorials
                          </div>
                        </div>
                      </a>
                      <a href="https://github.com/prisma/prisma-examples">
                        <div className="p-[8px]">
                          <i className="fa-solid fa-table-cells-large"></i>
                        </div>
                        <div>
                          <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                            Prisma Examples
                            <i className="fa-solid fa-up-right-from-square ms-[4px]"></i>
                          </div>
                        </div>
                      </a>
                      <a href="./stack">
                        <div className="p-[8px]">
                          <i className="fa-solid fa-layer-group"></i>
                        </div>
                        <div>
                          <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                            Prisma in your Stack
                          </div>
                        </div>
                      </a>
                      <a href="./support">
                        <div className="p-[8px]">
                          <i className="fa-solid fa-headset"></i>
                        </div>
                        <div>
                          <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                            Support
                          </div>
                        </div>
                      </a>
                      <a href="./ecosystem">
                        <div className="p-[8px]">
                          <i className="fa-solid fa-globe"></i>
                        </div>
                        <div>
                          <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                            Ecosystem
                          </div>
                        </div>
                      </a>
                      <a href="./community">
                        <div className="p-[8px]">
                          <i className="fa-regular fa-comment"></i>
                        </div>
                        <div>
                          <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                            Community
                          </div>
                        </div>
                      </a>
                      <a href="./dataguide">
                        <div className="p-[8px]">
                          <i className="fa-solid fa-file-lines"></i>
                        </div>
                        <div>
                          <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                            Data Guide
                          </div>
                        </div>
                      </a>
                    </div>
                    <a
                      className="playground-item p-8 bg-[#f7fafc] text-[#1a202c]"
                      href="/"
                      target="_blank"
                    >
                      <div className="flex">
                        <img
                          src={logo}
                          className="me-[8px]"
                          alt="prisma-logo"
                        />
                        <span className="leading-[19px]">
                          Prisma <br />
                          Playground
                        </span>
                      </div>
                      <img
                        src={playground}
                        alt="playground"
                        className="logo w-[258px] mt-4"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-link">
            <div className="nav-item flex gap-1 items-center">
              <a href="./use-cases">Use Cases</a>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="nav-sub-item product_nav-sub-item">
              <div className="">
                <div className="pt-[24px] mt-[12px]">
                  <div className="w-[400px] py-[2rem] bg-[#ffffff] shadow-[rgb(0 0 0 / 6%)] rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                    <a href="/client">
                      <div className="p-[8px]">
                        <i className="fa-regular fa-comment-dots"></i>
                      </div>
                      <div>
                        <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                          Customer Stories
                        </div>
                        <div className="text-[#718096] leading-[1.28] text-[14px] font-normal">
                          Learn about applications built with Prisma
                        </div>
                      </div>
                    </a>
                    <a href="/migrate">
                      <div className="p-[8px]">
                        <i className="fa-solid fa-chart-simple"></i>
                      </div>
                      <div>
                        <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                          Enterprise
                        </div>
                        <div className="text-[#718096] leading-[1.28] text-[14px] font-normal">
                          Up-level your applications with our Data Platform
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
              <a href="./company">Company</a>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="nav-sub-item developer_nav-sub-items">
              <div className="">
                <div className="pt-[24px] mt-[12px] ">
                  <div className="w-[689px] py-[2rem]  bg-white shadow-[rgb(0 0 0 / 6%)] rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                    <div className="flex border-r-1 border-[#e2e8f0]">
                      <div className="items ">
                        <a
                          href=" /about"
                          className="pointer pr-[1rem] pl-[2rem] mb-[1rem] flex fontInter gap-[12px] items-center"
                        >
                          <div className="p-[8px]">
                            <i className="fa-solid fa-info"></i>
                          </div>
                          <div>
                            <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                              About
                            </div>
                          </div>
                        </a>
                        <a
                          href="/blog"
                          className="pointer pr-[1rem] pl-[2rem] mb-[1rem] flex fontInter gap-[12px] items-center"
                        >
                          <div className="p-[8px]">
                            <i className="fa-regular fa-message"></i>
                          </div>
                          <div>
                            <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                              Blog
                            </div>
                          </div>
                        </a>
                        <a
                          href="/careers"
                          className="pointer pr-[1rem] pl-[2rem] mb-[1rem] flex fontInter gap-[12px] items-center"
                        >
                          <div className="p-[8px]">
                            <i className="fa-solid fa-chart-line"></i>
                          </div>
                          <div>
                            <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                              Careers
                            </div>
                          </div>
                        </a>
                        <a
                          href="/events"
                          className="pointer pr-[1rem] pl-[2rem] mb-[1rem] flex fontInter gap-[12px] items-center"
                        >
                          <div className="p-[8px]">
                            <i className="fa-solid fa-users-viewfinder"></i>
                          </div>
                          <div>
                            <div className="nav-sub-item-heading font-semibold mb-[0.25rem] text-[#2d3748]">
                              Events
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://pris.ly/causes"
                          className="pointer pr-[1rem] pl-[2rem] mb-[1rem] flex fontInter gap-[12px] items-center"
                        >
                          <div className="p-[8px]">
                            <i className="fa-solid fa-hand-holding-heart"></i>
                          </div>
                          <div>
                            <div className="nav-sub-item-heading flex items-center gap-[4px] font-semibold mb-[0.25rem] text-[#2d3748]">
                              Causes
                              <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="block w-[1px] bg-[#e2e8f0] my-[0.75rem]"></div>
                      <div className="articles px-[24px]">
                        <h4 className="!mt-[12px] !mb-[32px] fontBarlow !font-[500] tracking-[0.1em] leading-1 uppercase text-[#718096] !p-0">
                          Latest from the blog
                        </h4>
                        <a
                          href="https://www.prisma.io/blog/accelerate-preview-release-ab229e69ed2"
                          className="flex gap-[18px] mb-[32px] items-center bg-transparent"
                        >
                          <div className="article-image max-w-[148px] w-full">
                            <img
                              src="images/nav-article/nav-article-1.svg"
                              alt="Accelerate in Preview: Global Database Cache &amp; Scalable Connection Pool"
                              className="rounded-[4px] w-full"
                            />
                          </div>
                          <p className="font-[500] fontInter text-[1rem] leading-[1.3] text-[#718096]">
                            Accelerate in Preview: Global Database Cache &amp;
                            Scalable Connection Pool
                          </p>
                        </a>
                        <a
                          href="https://www.prisma.io/blog/cloudflare-partnership-qerefgvwirjq"
                          className="flex gap-[18px] mb-[32px] items-center bg-transparent"
                        >
                          <div className="article-image max-w-[148px] w-full">
                            <img
                              src="images/nav-article/nav-article-2.svg"
                              alt="Developer Experience Redefined: Prisma &amp; Cloudflare Lead the Way to Data DX"
                              className="rounded-[4px] w-full"
                            />
                          </div>
                          <p className="font-[500] fontInter text-[1rem] leading-[1.3] text-[#718096]">
                            Developer Experience Redefined: Prisma &amp;
                            Cloudflare Lead the Way to Data DX
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
