import React from "react";
import "./intro.css";
import myImg from "../../imgs/p6.png";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro_left">
        <div className="intro_left_container">
          <h1 className="intro_left_intro">My Name is </h1>
          <h2 className="intro_left_name">Aklilu Fita </h2>

          <div className="intro_title">
            <div className="intro_title_container">
              <div className="intro_title_item">Web Designer</div>
              <div className="intro_title_item">Front End Developer</div>
              <div className="intro_title_item">Full Stack Developer</div>
              <div className="intro_title_item">UI designer</div>
              <div className="intro_title_item">
                Machine Learning Practitioner
              </div>
              <div className="intro_title_item"></div>
            </div>
          </div>

          <div className="discription">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus, repudiandae explicabo. Numquam aliquam blanditiis,
              aliquid eligendi enim eveniet rerum quo, inventore doloribus nihil
              soluta officiis nam minus. Inventore, sequi repellendus.
            </p>
          </div>
        </div>

        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="intro_scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="intro_right">
        <div className="intro_bg"></div>
        <img src={myImg} alt="" className="intro_img" />
      </div>
    </div>
  );
}
