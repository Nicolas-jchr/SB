import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <section className="navbar-desktop">
      <nav className="navbar">
        <li>
          <NavLink to="">Prendre rendez-vous</NavLink>
        </li>
        <li>
          <NavLink to="">Prestations</NavLink>
        </li>
        <li>
          <NavLink to="">Avis</NavLink>
        </li>
        <li>
          <NavLink to="">Me contacter</NavLink>
        </li>
        <li>
          <NavLink to="">Qui suis-je?</NavLink>
        </li>
      </nav>
    </section>
  );
}

export default NavBar;
