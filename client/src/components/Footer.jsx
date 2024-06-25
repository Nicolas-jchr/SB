import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Tiktok from "../assets/tiktok.svg";

function Footer() {
  return (
    <footer className="footerContainer">
      <section className="meetButtonFooter">
        {" "}
        <a
          href="https://www.rdv360.com/sbeauty-30190-st-chaptes"
          target="_blank"
          className="meetButtonBottom"
          rel="noreferrer"
        >
          Prendre rendez-vous
        </a>
      </section>
      <section>
        <h1>Me contacter</h1>
        <p>Institut SBeauty - 68 rue des Candisons, 30190 Saint-Chaptes</p>
        <p>téléphone: 07 88 34 21 32</p>
        <p>e-mail: institut.sylviabeauty@gmail.com</p>
      </section>
      <section>
        <h1>Suivez moi</h1>
        <img src={Instagram} alt="logo instagram" />
        <img src={Facebook} alt="logo instagram" />
        <img src={Tiktok} alt="logo instagram" />
      </section>
    </footer>
  );
}

export default Footer;
