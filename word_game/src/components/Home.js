import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Home = () => {
  const [value, setValue] = useState("");

  // useEffect(() => {
  //     localStorage.setItem('myValueInLocalStorage', value)
  //   }, [value]);

  const onChange = (event) => setValue(event.target.value);

  return (
    <>
      <div className="container">
        looooool
        <div className="home__wrapper">
          <h1>Wordcloud game</h1>
          <div className="input-areas">
            <form className="form">
              <input
                className="input"
                name="nick"
                type="text"
                placeholder="Enter your nickname here..."
                value={value}
                onChange={onChange}
              />

              <Link to="/play">
                <button className="btn">play</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
