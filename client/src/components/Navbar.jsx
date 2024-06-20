import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import Logo from "../assets/logosbeauty.png";

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
        <div className="navbarFixedTop">
          <a
            href="https://www.rdv360.com/sbeauty-30190-st-chaptes"
            target="_blank"
            className="meetButtonMobile"
            rel="noreferrer"
          >
            Prendre rendez-vous
          </a>
          <div className="burgerButton">
            <Menu right>
              <div className="menuHeader">
                <NavLink to="/">
                  <img
                    src={Logo}
                    alt="Logo Street Art Hunter"
                    className="logoMobile"
                  />
                </NavLink>
              </div>
              <nav className="navbarBurger">
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
            </Menu>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavBar;
