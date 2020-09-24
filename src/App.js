import React, { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [error, setError] = useState("");

  let inputValue
  const onChange = (e) => {
    inputValue = (e.target.value)
  };

  const setStyle = () => {
    if(inputValue) {
    setBackgroundColor(inputValue);
    } else {
      setError("Please enter a colour")
    }
  };
  
  return (
    <div className="app">
      <div className="form__container">
        <div
          className="circle"
          style={{backgroundColor}}
        ></div>
        <form className="form">
          <div className="form__item">
            <label className="form__label" htmlFor="color">Enter A Colour for the Circle</label>
            <input
              className="form__input"
              type="text"
              name="inputValue"
              value={inputValue}
              required
              placeholder="Enter a colour"
              onChange={onChange}
            ></input>
            {error && <div className="form__error">
              {error}</div>}
          </div>
          <div className="form__item">
            <button className="form__btn" type="button" onClick={setStyle}>
              Set Colour
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;
