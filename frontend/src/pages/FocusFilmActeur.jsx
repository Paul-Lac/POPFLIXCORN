import FocusActeur from "../components/FocusActeur";
import Filmographie from "../components/Filmographie";
import "../components/Logo/Logo.css";
import "../components/Menu/Menu.css";
import "../styles/Focus.css";
import "../styles/FocusFilmActeur.css";

function FocusFilmActeur() {
  return (
    <div className="FocusFilmActeur">
      <FocusActeur />
      <Filmographie />
    </div>
  );
}

export default FocusFilmActeur;
