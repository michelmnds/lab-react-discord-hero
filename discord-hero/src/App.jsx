import "./App.css";
import discord from "./assets/discord.png";
import drop from "./assets/drop.png";
import img from "./assets/image.png";

function App() {
  return (
    <div className="App">
      <header className="headerContainer">
        <img className="discord" src={discord} alt="" />
        <img className="drop" src={drop} alt="" />
      </header>

      <main className="mainContainer">
        <h1 className="mainTxt">
          IMAGINE A <br />
          PLACE...
        </h1>

        <p className="mainParagraph">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day hang
          out more often.
        </p>

        <div className="btnContainer">
          <button className="button mac">Download for Mac</button>
          <button className="button">Open Discord in your browser</button>
        </div>

        <img className="mainImage" src={img} alt="" />
      </main>
    </div>
  );
}

export default App;
