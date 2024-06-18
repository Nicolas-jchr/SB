import { useEffect } from "react";
import avatar from "../assets/avatarsbeauty.svg";
import cil from "../assets/cils1.svg";

function Home() {
  useEffect(() => {
    const articles = document.querySelectorAll(".articleContent, article");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    articles.forEach((article) => {
      observer.observe(article);
    });
  }, []);

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
              <h4 className="cardTitle">Volume 3DX</h4>
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
              <h4 className="cardTitle">Mariage</h4>
              <img src={cil} alt="maquillage mariage" />
              <button type="button" className="buttonMore">
                Voir plus
              </button>
            </article>
            <article>
              <h4 className="cardTitle">Soirée</h4>
              <img src={cil} alt="maquillage soirée" />
              <button type="button" className="buttonMore">
                Voir plus
              </button>
            </article>
            <article>
              <h4 className="cardTitle">Coaching</h4>
              <img src={cil} alt="maquillage coaching" />
              <button type="button" className="buttonMore">
                Voir plus
              </button>
            </article>
          </div>
        </section>
        <section className="sectionMassage">
          <h3 className="sectionTitles">Massage</h3>
          <div className="articlesContainer">
            <article>
              <h4 className="cardTitle">Polynéessen</h4>
              <img src={cil} alt="massage polynéessen" />
              <button type="button" className="buttonMore">
                Voir plus
              </button>
            </article>
            <article>
              <h4 className="cardTitle">Rapidos</h4>
              <img src={cil} alt="massage rapidos" />
              <button type="button" className="buttonMore">
                Voir plus
              </button>
            </article>
          </div>
        </section>
        <section className="sectionOnglerie">
          <h3 className="sectionTitles">Onglerie</h3>
          <div className="articlesContainer">
            <article>
              <h4 className="cardTitle">Semi permanent</h4>
              <img src={cil} alt="onglerie semi permanent" />
              <button type="button" className="buttonMore">
                Voir plus
              </button>
            </article>
            <article>
              <h4 className="cardTitle">Semi des pieds</h4>
              <img src={cil} alt="onglerie semi des pieds" />
              <button type="button" className="buttonMore">
                Voir plus
              </button>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
