import avatar from "../assets/avatarsbeauty.svg";

function About() {
  return (
    <>
      <header className="headerAbout">
        <h1 className="mainTitleAbout">Qui suis-je ?</h1>
        <img src={avatar} alt="Avatar du site" className="avatarAbout" />
      </header>
      <main className="mainContentAbout">
        <h2>Hello ! Moi c'est Sylvia, technicienne de cils</h2>
        <h3>Esthécienne</h3>
        <p>
          Mon parcours dans l'esthétique démarre en 2022 lorsque je décide de me
          reconvertir
        </p>
        <h3>Mes formations:</h3>
        <p>CAP Esthétique</p>
        <p>Formation à Paris</p>
        <p>Formation à Marseille </p>
        <h3>J'aime</h3>
        <p>Le chocolat, les animaux, mon chéri</p>
      </main>
    </>
  );
}

export default About;
