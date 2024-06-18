import { NavLink } from "react-router-dom";
import Logo from "../assets/logosbeauty.png";
import Home from "../assets/home.png";

function NavBar() {
  return (
    <>
      <section className="navbar-desktop">
        <NavLink to="/">
          <img
            src={Logo}
            alt="Logo Street Art Hunter"
            className="logoDesktop"
          />
        </NavLink>
        <nav className="navbarTop">
          <li className="navbarContent">
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li className="navbarContent">
            <NavLink to="/Services">Prestations</NavLink>
          </li>
          <li className="navbarContent">
            <NavLink to="/Avis">Avis</NavLink>
          </li>
          <li className="navbarContent">
            <NavLink to="/About">Qui suis-je?</NavLink>
          </li>
        </nav>
      </section>
      <section className="navbar-logo-container">
        <nav>
          <menu className="navbarMobile">
            <li>
              <NavLink to="/">
                <img src={Home} alt="Icône page accueil" className="navIcon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/Services">
                <img src={Home} alt="page profil" className="navIcon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/Avis">
                <img
                  src={Home}
                  alt="ajouter un street art"
                  className="navIcon"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <img src={Home} alt="page classement" className="navIcon" />
              </NavLink>
            </li>
          </menu>
        </nav>
      </section>
    </>
  );
}

export default NavBar;

// <section className="navbar-desktop">
//   <nav className="navbar">
//     <li>
//       <NavLink to="/">Accueil</NavLink>
//     </li>
//     <li>
//       <NavLink to="/Services">Prestations</NavLink>
//     </li>
//     <li>
//       <NavLink to="/Avis">Avis</NavLink>
//     </li>
//     <li>
//       <NavLink to="/About">Qui suis-je?</NavLink>
//     </li>
//   </nav>
// </section>
