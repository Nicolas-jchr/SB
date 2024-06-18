import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <section className="navbar-desktop">
      <nav className="navbar">
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/Services">Prestations</NavLink>
        </li>
        <li>
          <NavLink to="/Avis">Avis</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Me contacter</NavLink>
        </li>
        <li>
          <NavLink to="/About">Qui suis-je?</NavLink>
        </li>
      </nav>
    </section>
  );
}

export default NavBar;
