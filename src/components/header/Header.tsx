import logo from '../../assets/images/prisma-logo-dark.svg'

export function Header() {
  console.log(logo)
  return (
    <>
      <div className="flex sm:justify-between items-center max-w-[1248px] px-[1.5rem] py-[8px] m-auto">
        <div className="logo">
          <a href="./">
            <img
              src={logo}
              alt="prisma-logo"
              width="90"
              height="27"
              className="block cursor-pointer"
            />
          </a>
        </div>
        <div className="nav">
          <nav>
            <ul className="flex sm:justify-center gap-4 font-bold">
              <li className="nav-link">
                <a href="./products">Products</a>
              </li>
              <li className="bg"></li>
              <li className="nav-link">
                <a href="./docs">Docs</a>
              </li>
              <li className="nav-link">
                <a href="./developer">Developer</a>
              </li>
              <li className="nav-link">
                <a href="./use-cases">Use Cases</a>
              </li>
              <li className="nav-link">
                <a href="./company">Company</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="get-started flex gap-16 items-center">
          <button className="rounded bg-[#5A67D8] hover:bg-[#4C51BF] text-[#ffffff] font-bold px-[24px] py-[16px] m-[4px] text-14px lineHeight-[14px]">
            Get Started
          </button>
          <a href="github.com">
            <i className="fa-brands fa-2x fa-github"></i>
          </a>
        </div>
      </div>
    </>
  )
}
