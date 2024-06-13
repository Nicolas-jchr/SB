import avatar from "../assets/avatarsbeauty.svg";

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
          <h3>Extensions de cils</h3>
          <article>
            <p>Volume Russe</p>
            <p>Volume Mixte</p>
            <p>Volume Léger</p>
            <p>Volume je sais pas</p>
          </article>
        </section>
        <section className="sectionMakeup">
          <h3>Maquillage</h3>
          <article>
            <p>Mariage</p>
            <p>Soirée</p>
            <p>Coaching</p>
          </article>
        </section>
        <section className="sectionMassage">
          <h3>Massage</h3>
          <article>
            <p>Polynéessen</p>
            <p>Rapidos</p>
          </article>
        </section>
        <section className="sectionOngleries">
          <h3>Onglerie</h3>
          <article>
            <p>Semi permanent</p>
            <p>Semi des pieds</p>
          </article>
        </section>
      </main>
    </>
  );
}

export default Home;
