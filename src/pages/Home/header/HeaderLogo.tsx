import logo from '../../../assets/images/prisma-logo-dark.svg'

export const HeaderLogo: React.FunctionComponent = () => {
  return (
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
      <button className="toggleBtn">
        <i className="fa-solid fa-bars text-[1.5rem]"></i>
      </button>
    </div>
  )
}
