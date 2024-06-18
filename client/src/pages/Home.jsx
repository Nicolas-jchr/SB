import avatar from "../assets/avatarsbeauty.svg";
import cil from "../assets/cils1.svg";
import cil2 from "../assets/cils2.jpg";

function Home() {
  return (
    <>
      <header className="headerContainer">
        <h1 className="primaryTitle">Institut SBeauty</h1>
        <img src={avatar} alt="Avatar du site" className="avatar" />
        <button type="button" className="meetButton">
          Cliquez ici pour prendre rendez-vous
        </button>
      </header>
      <main>
        <section className="sectionCils">
          <h3 className="sectionTitle">Retrouvez toute les prestations</h3>
          <div className="articlesContainer">
            <article className="articlesContent">
              <img src={cil2} alt="extensions de cils" />
              <button type="button" className="buttonDetail">
                Cils
              </button>
            </article>
            <article className="articlesContent">
              <img src={cil} alt="extensions de cils" />
              <button type="button" className="buttonDetail">
                Sourcils
              </button>
            </article>
            <article className="articlesContent">
              <img src={cil} alt="extensions de cils" />
              <button type="button" className="buttonDetail">
                Soin du visage
              </button>
            </article>
            <article className="articlesContent">
              <img src={cil} alt="extensions de cils" />
              <button type="button" className="buttonDetail">
                oin du corps
              </button>
            </article>
            <article className="articlesContent">
              <img src={cil} alt="extensions de cils" />
              <button type="button" className="buttonDetail">
                Épilations femmes
              </button>
            </article>
            <article className="articlesContent">
              <img src={cil} alt="extensions de cils" />
              <button type="button" className="buttonDetail">
                Maquillage
              </button>
            </article>
            <article className="articlesContent">
              <img src={cil} alt="extensions de cils" />
              <button type="button" className="buttonDetail">
                Ongle
              </button>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
