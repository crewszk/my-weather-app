import Link from "next/link";

// This navbar was a basic template provided by Traversy Media using the
// Bootswatch styles

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <Link href="/">
        <a className="navbar-brand">My Weather App</a>
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item ml-4">
            <Link href="/material-dashboard/">
              <a className="nav-link">Click for Material Dashboard!</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
