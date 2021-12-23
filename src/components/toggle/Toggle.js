import React, { useContext } from "react";
import "./toggle.css";
import moon from "../../imgs/moon.jpeg";
import sun from "../../imgs/sun1.png";
import { ThemeContext } from "../../context";

export default function Toggle() {
  const [state, dispatch] = useContext(ThemeContext);
  const darkMode = state.darkMode;

  const handleClick = () => {
    dispatch({ type: "TOGGLE" });
    console.log(darkMode);
  };

  console.log(darkMode);

  return (
    <div className="toggle">
      <img src={moon} alt="" className="icons" />
      <img src={sun} alt="" className="icons" />
      <button
        style={{ right: darkMode ? "25" : "0" }}
        className="button"
        onClick={handleClick}
      ></button>
    </div>
  );
}
