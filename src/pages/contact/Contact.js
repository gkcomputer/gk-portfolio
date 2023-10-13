import React from "react";
import "./Contact.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import resume from "../../assests/GK_Resume.jpg";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g5mpnkf",
        "template_hrtyg5l",
        form.current,
        "TMSBFLsGkLwfQnbzX"
      )
      .then(
        (result) => {
          toast.success("Mail Sent Success", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          toast.error("Something Went Wrong", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="contactmain" onSubmit={sendEmail}>
      <div className="contactdiv">
        <div className="leftdiv">
          <h1>Contact Me</h1>
          <div
            className="mail"
            onClick={() => {
              window.open(
                "https://mail.google.com/mail/u/0/?ogbl#inbox?compose=GTvVlcSBncMdTcSwDJkXKRsmrlMcJhjNSBKgTgKlcFrqHGdZjWPZmRQWbZjGPQbbXBVSWBCHVhPlg"
              );
            }}
          >
            <MailOutlineIcon
              sx={{ position: "unset", color: "rgb(16, 204, 254)" }}
            />
            <a>
              <h6> mvgkrishna96@gmail.com</h6>
            </a>
          </div>
          <div className="mail">
            <PhoneIcon sx={{ position: "unset", color: "rgb(16, 204, 254)" }} />
            <a href="tel:+9515197516">
              <h6>+91-9515197516</h6>
            </a>
          </div>
          <div className="cvbtn">
            <Button
              color="primary"
              size="small"
              variant="outlined"
              sx={{ width: "130px" }}
            >
              <a
                href={resume}
                download="GK_Resume"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                {" "}
                Download CV
              </a>
            </Button>
          </div>
        </div>
        <form className="rightdiv" ref={form}>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Name"
            variant="outlined"
            name="from_name"
            required
          />
          <TextField
            id="outlined-basic"
            fullWidth
            label="E-mail"
            type="email"
            variant="outlined"
            name="from_name"
            required
          />
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            name="message"
            required
          />
          <Button
            color="primary"
            size="small"
            variant="outlined"
            sx={{ width: "130px" }}
            type="submit"
          >
            <a style={{ textDecoration: "none", color: "white" }}>
              Send Message
            </a>
          </Button>
          <ToastContainer />
        </form>
      </div>
      <div className="footer">&copy; GK | All rights resverd</div>
    </div>
  );
}

export default Contact;
