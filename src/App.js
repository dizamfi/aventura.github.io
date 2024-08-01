// import logo from './logo.svg';
import "./App.css";
import Escene from "./Escene";
import backgroundMusic from './music/musica.mp3';
import { useEffect } from "react";
// import { useSound } from "use-sound";


function App() {
  useEffect(() => {
    // const [playSound] =  useSound(backgroundMusic);
    const audio = document.getElementById("background-audio");
    if (audio) {
      const playPromise = audio.play();

      // Algunas políticas de navegador pueden bloquear la reproducción automática
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Auto-play comenzó correctamente
          })
          .catch((error) => {
            console.error("Autoplay failed:", error);
          });
      }
    }
  }, []);

  return (
    <>
      <Escene />
      <audio id="background-audio" src={backgroundMusic} autoPlay loop />
    </>
  );
}

export default App;
