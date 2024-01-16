import React, { useState } from "react";
import useSound from "use-sound";
import Button from "./button";
import { moveButton, insta } from "./Script.js";
import happySound from "./Audio/happy-happy-happy-song.mp3";

function App() {
  const [yesbutton, setButton] = useState(false);
  const [play] = useSound(happySound);

  function nextPage() {
    setButton(true);
    play();
  }

  const Checkbutton = () => {
    if (yesbutton) {
      return (
        <div className="buttons">
          <Button id="yesButton" onClick={insta} text="Let's Fix a Date" />
        </div>
      );
    } else {
      return (
        <div className="buttons">
          <Button id="yesButton" onClick={nextPage} text="Yes" />
          <Button
            id="noButton"
            onMouseOver={moveButton}
            onClick={moveButton}
            text="No"
          />
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div>
        <h1 className="header_text">
          {yesbutton ? "Yeeyy ! Finally" : "Do you wanna go out with me?"}
        </h1>
      </div>
      <div className="gif_container">
        <img
          src={
            yesbutton
              ? "https://i.postimg.cc/wTDG30TB/yes.gif"
              : "https://i.postimg.cc/pdNqPxx1/milk-and-mocha-cute.gif"
          }
          alt="Cute animated illustration"
        />
      </div>
      {Checkbutton()}
    </div>
  );
}
export default App;
