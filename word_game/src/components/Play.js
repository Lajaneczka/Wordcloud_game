import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Play = () => {
  const [words, setWords] = useState([]);
  const [text, setText] = useState("check answear");

  useEffect(() => {
    fetch("http://localhost:3000/words")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setWords(data);
      });
  }, []);

  const handleClick = () => {
    setText("finish game");
  };
  return (
    <div className="container">
      <h3>question</h3>
      <div className="words__container" />
      <Link to="/score">
        <button className="btn" onClick={handleClick}>
          {text}
        </button>
      </Link>
    </div>
  );
};
