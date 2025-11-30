import "./App.css";
import tree from "./assets/tree.JPG";

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
    </div>
  );
}

export default App;
