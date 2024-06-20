import { NavLink } from "react-router-dom";
import Logo from "../assets/logosbeauty.png";
import Home from "../assets/home.png";

function NavBar() {
  return (
    <>
      <section className="navbar-desktop">
        <div className="left-section">
          <NavLink to="/">
            <img
              src={Logo}
              alt="Logo Street Art Hunter"
              className="logoDesktop"
            />
          </NavLink>
          <a
            href="https://www.rdv360.com/sbeauty-30190-st-chaptes"
            target="_blank"
            className="meetButtonHome"
            rel="noreferrer"
          >
            Prendre rendez-vous
          </a>
        </div>
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
      <section className="navbarMobileContainer">
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
