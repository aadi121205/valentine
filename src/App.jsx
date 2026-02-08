import { useState } from 'react';
import './App.css';

function App() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const handleNoClick = () => {
    const newX = Math.random() * 200 - 100; // -100 to 100
    const newY = Math.random() * 200 - 100; // -100 to 100
    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    setYesPressed(true);
  };

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <div className="valentine-response">
          <img src="https://media.giphy.com/media/v1.GIF/giphy.gif?cid=ecf05e478d12be3f5c808f97c452e85a676b00910f5450f3&rid=giphy.gif&ct=g" alt="Yes" className="yes-gif" />
          <h2 className="valentine-text">Yay!!!</h2>
        </div>
      ) : (
        <div className="valentine-question-card">
          <img src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5gvmGMVgC9.gif" alt="Cute Bear" className="question-gif" />
          <h1 className="valentine-question">Will you be my Valentine?</h1>
          <div className="valentine-buttons">
            <button
              className="yes-button"
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              className="no-button"
              onMouseEnter={handleNoClick}
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                position: 'relative',
              }}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

