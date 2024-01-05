import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <nav>
      <h3>Biruk.dev</h3>
      <ul>
        <li>
          <Link to="#home">Home</Link>
        </li>
        <li>
          <Link to="#about">About </Link>
        </li>
        <li>
          <Link to="#projects">Projects</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
