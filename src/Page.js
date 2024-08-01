import React, { useState } from "react";
import { useSound } from "use-sound";
import backgroundMusic from "./music/musica.mp3";
// import { motion } from "framer-motion";
import MediaSlider from "./MediaSlider";

export default function Page() {
  const [playSound] = useSound(backgroundMusic);
  const [showNext, setShowNext] = useState(false);

  const handleButtonClick = () => {
    playSound(backgroundMusic);
    setShowNext(true);
  };

  return (
    <div className="page__container">
      {!showNext && (
        <div className="page__wrapper">
          <div className="page__hero">
            <div className="page__image"></div>

            <div className="page__text">
              <h1>Nuestra aventura de amor</h1>
              <div style={{ width: "100%", height: "50px" }}></div>
              <p>
                Quize plasmar nuestra historia en este momento, no ha sido para
                nada facil pero también hemos tenido momentos inolvidables, hoy
                quiero que te sientes y veas conmigo todo lo que hemos pasado. A
                continuación, se muestra nuestra historia resumida, quiero que
                cuando veas esto puedas ver como ha sido nuestro proceso. Hoy
                cumplimos un mes más y en medio del dolor y el miedo que tengo
                por los porblemas internos, quiero recordar lo bonito que ha
                sido también. Te amo estrellita. Disfruta cada detalle, lo hice
                con amor para ti.
              </p>
              <div style={{ width: "100%", height: "30px" }}></div>
              <p>
                Instrucciones!!! 1.- Si ya estas escuchando la música sin haber
                presionado el botón, entonces recarga la página. 2.- Posicionate
                en el botón y dale click, debería empezar a sonar la canción.
              </p>

              <button onClick={handleButtonClick} onFocus={playSound()}>
                Empezar
              </button>
            </div>
          </div>
        </div>
      )}

      {showNext && <MediaSlider />}
    </div>
  );
}
