import React, { useContext } from "react";
import "./about.css";
import img from "../../imgs/award.jpeg";
import img2 from "../../imgs/p2.jpg";
import { ThemeContext } from "../../context";

export default function About() {
  const [state] = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div className="about">
      <div className="about_left">
        <div className="about_card_bg"></div>
        <div className="about_card">
          <img src={img2} className="about_img" alt="" />
        </div>
      </div>
      <div
        className="about_right"
        style={{
          backgroundColor: darkMode ? "#222" : "null",
          color: darkMode ? "white" : "null",
        }}
      >
        <h2 className="title">About ME</h2>
        <h3 className="subtitle">
          I am a fullstack web developer for react and node js
        </h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          voluptates aut rerum error. Quia tempora ullam sit perferendis veniam
          maxime error dolor ea nesciunt, nobis blanditiis pariatur sint
          aspernatur eveniet. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatibus voluptates aut rerum error. Quia tempora ullam sit
          perferendis veniam maxime error dolor ea nesciunt, nobis blanditiis
          pariatur sint aspernatur eveniet.
        </p>
        <div className="award" style={{ color: darkMode ? "black" : "null" }}>
          <img src={img} alt="" className="award_img" />
          <div className="award_text">
            <h3 className="award_title">Award nomination name</h3>
            <p className="award_desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus voluptates aut rerum error. Quia tempora ullam sit
              perferendis veniam maxime error dolor ea .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
