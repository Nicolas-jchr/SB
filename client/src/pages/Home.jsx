import avatar from "../assets/avatarsbeauty.svg";
import cil from "../assets/cils1.svg";

function Home() {
  return (
    <>
      <header className="headerContainer">
        <h1 className="primaryTitle">Bienvenue chez SBeauty</h1>
        <img src={avatar} alt="Avatar du site" className="avatar" />
        <h2 className="secondaryTitle">Votre institut de beauté </h2>
      </header>
      <main>
        <section className="sectionCils">
          <h3 className="sectionTitles">Extensions de cils</h3>
          <div className="articlesContainer">
            <article className="articleContent">
              <h4 className="cardTitle">Volume Russe</h4>
              <img src={cil} alt="extensions de cils" />
              <button type="button" className="buttonMore">
                Voir plus
              </button>
            </article>
            <article>
              <h4 className="cardTitle">Volume Mixte</h4>
              <img src={cil} alt="extensions de cils" />
              <button type="button" className="buttonMore">
                Voir plus
              </button>
            </article>
            <article>
              <h4 className="cardTitle">Volume Léger</h4>
              <img src={cil} alt="extensions de cils" />
              <button type="button" className="buttonMore">
                Voir plus
              </button>
            </article>
            <article>
              <h4 className="cardTitle">Volume je sais pas</h4>
              <img src={cil} alt="extensions de cils" />
              <button type="button" className="buttonMore">
                Voir plus
              </button>
            </article>
          </div>
        </section>
        <section className="sectionMakeup">
          <h3 className="sectionTitles">Maquillage</h3>
          <div className="articlesContainer">
            <article>
              <h4>Mariage</h4>
              <img src="" alt="maquillage mariage" />
              <button type="button">Voir plus</button>
            </article>
            <article>
              <h4>Soirée</h4>
              <img src="" alt="maquillage soirée" />
              <button type="button">Voir plus</button>
            </article>
            <article>
              <h4>Coaching</h4>
              <img src="" alt="maquillage coaching" />
              <button type="button">Voir plus</button>
            </article>
          </div>
        </section>
        <section className="sectionMassage">
          <h3 className="sectionTitles">Massage</h3>
          <div className="articlesContainer">
            <article>
              <h4>Polynéessen</h4>
              <img src="" alt="massage polynéessen" />
              <button type="button">Voir plus</button>
            </article>
            <article>
              <h4>Rapidos</h4>
              <img src="" alt="massage rapidos" />
              <button type="button">Voir plus</button>
            </article>
          </div>
        </section>
        <section className="sectionOnglerie">
          <h3 className="sectionTitles">Onglerie</h3>
          <div className="articlesContainer">
            <article>
              <h4>Semi permanent</h4>
              <img src="" alt="onglerie semi permanent" />
              <button type="button">Voir plus</button>
            </article>
            <article>
              <h4>Semi des pieds</h4>
              <img src="" alt="onglerie semi des pieds" />
              <button type="button">Voir plus</button>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
