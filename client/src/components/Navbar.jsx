import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <section className="navbar-container">
      <nav>
        <li>
          <NavLink to="/galerie">Prendre rendez-vous</NavLink>
        </li>
        <li>
          <NavLink to="/">Prestations</NavLink>
        </li>
        <li>
          <NavLink to="/classement">Avis</NavLink>
        </li>
        <li>
          <NavLink to="/classement">Me contacter</NavLink>
        </li>
        <li>
          <NavLink to="/classement">Qui suis-je?</NavLink>
        </li>
      </nav>
    </section>
  );
}

export default NavBar;
