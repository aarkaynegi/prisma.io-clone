export const NavBar: React.FunctionComponent = () => {
  return (
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
  )
}
