import "./App.css";
import tree from "./assets/tree.JPG";
import Bruno from "./assets/bruno.png";
import Annie from "./assets/annie.png";
import Aleksi from "./assets/aleksi.png";

function App() {
  return (
    <div className="container">
      <header className="profile">
        <img src={tree} className="profile__image" />
        <h1 className="profile__name">Aleksi Svaridze</h1>
      </header>

      <section className="about">
        <h2 className="about__title">About me</h2>
        <p>I am a student of the SkillWill Academy</p>
        <p>I am learning front end development course</p>
      </section>

      <section className="portfolio">
        <h2 className="portfolio__title">Portfolio</h2>
        <p className="portfolio__description">
          I want my portfolio to look like this after completing the skillwill
          course:
        </p>
        <div className="portfolio__cards-wrapper">
          <div
            className="portfolio__card"
            style={{ backgroundImage: `url(${Bruno})` }}
          >
            <a href="https://bruno-simon.com/" target="_blank">
              Visit
            </a>
          </div>
          <div
            className="portfolio__card"
            style={{ backgroundImage: `url(${Annie})` }}
          >
            <a href="https://blog.anniebombanie.com/" target="_blank">
              Visit
            </a>
          </div>
          <div
            className="portfolio__card"
            style={{ backgroundImage: `url(${Aleksi})` }}
          >
            <a href="https://aleksisportfolio.netlify.app/" target="_blank">
              Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
