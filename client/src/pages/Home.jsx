import { useEffect } from "react";
import avatar from "../assets/avatarsbeauty.svg";
import cil2 from "../assets/cils2.jpg";

function Home() {
  useEffect(() => {
    const articles = document.querySelectorAll(".articlesContent");

    const handleScroll = () => {
      articles.forEach((article) => {
        const articleTop = article.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (articleTop < windowHeight - 100) {
          article.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="headerContainer">
        <h1 className="primaryTitle">Institut SBeauty</h1>
        <img src={avatar} alt="Avatar du site" className="avatar" />
        <a
          href="https://www.rdv360.com/sbeauty-30190-st-chaptes"
          target="_blank"
          className="meetButton"
          rel="noreferrer"
        >
          Cliquez ici pour prendre rendez-vous
        </a>
      </header>
      <main>
        <section className="sectionCils">
          <h3 className="sectionTitle">Retrouvez toute les prestations</h3>
          <div className="articlesContainer">
            <article className="articlesContent">
              <img src={cil2} alt="extensions de cils" />
              <h4 className="detailTitle">Cils</h4>
            </article>
            <article className="articlesContent">
              <img src={cil2} alt="extensions de cils" />
              <h4 className="detailTitle">Sourcils</h4>
            </article>
            <article className="articlesContent">
              <img src={cil2} alt="extensions de cils" />
              <h4 className="detailTitle">Soin du visage</h4>
            </article>
            <article className="articlesContent">
              <img src={cil2} alt="extensions de cils" />
              <h4 className="detailTitle">Soin du corps</h4>
            </article>
            <article className="articlesContent">
              <img src={cil2} alt="extensions de cils" />
              <h4 className="detailTitle">Épilations femmes</h4>
            </article>
            <article className="articlesContent">
              <img src={cil2} alt="extensions de cils" />
              <h4 className="detailTitle">Maquillage</h4>
            </article>
            <article className="articlesContent">
              <img src={cil2} alt="extensions de cils" />
              <h4 className="detailTitle">Ongle</h4>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
