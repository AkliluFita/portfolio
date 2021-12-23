import { ContactPhone, Email, LocationOn } from "@mui/icons-material";
import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

export default function Contact() {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const [state] = useContext(ThemeContext);
  const darkMode = state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hhtp4c8",
        "template_wwinjet",
        formRef.current,
        "user_piSXcqx2Zf6tWbXHR4EFF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setSuccess(true);
  };

  return (
    <div className="contact">
      <div className="c_left">
        <div className="left_container">
          <h2 className="address_title">
            Please Contact me and discuss About my projects
          </h2>
          <div
            className="address_list"
            style={{
              backgroundColor: darkMode ? "#222" : "null",
              color: darkMode ? "white" : "null",
            }}
          >
            <div className="item">
              <ContactPhone className="icon" /> <h4>+905428581821</h4>
            </div>
            <div className="item">
              <Email className="icon" /> <h4>aklilu@gmail.com</h4>
            </div>
            <div className="item">
              <LocationOn className="icon" /> <h4>haspolat, Nicosia</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="c_right">
        <div
          className="right_container"
          style={{
            backgroundColor: darkMode ? "#222" : "null",
            color: darkMode ? "white" : "null",
          }}
        >
          <p className="form_title">
            <b>what's your story?</b> Get in touch Always available for
            freelancing if the right project comes along me
          </p>

          <form ref={formRef} className="form_control" onSubmit={handleSubmit}>
            <input type="text" placeholder="name" name="user_name" />
            <input type="text" placeholder="subject" name="user_subject" />
            <input type="email" placeholder="email" name="user_email" />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="message"
            ></textarea>
            <button>Submit</button>
            {success && (
              <h3 className="alart_sucess">thank you for sending message</h3>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
