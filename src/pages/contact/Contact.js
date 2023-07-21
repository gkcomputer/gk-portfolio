import React from "react";
import "./Contact.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SendIcon from "@mui/icons-material/Send";

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
              variant="contained"
              sx={{ width: "130px" }}
            >
              Download CV
            </Button>
          </div>
        </div>
        <form className="rightdiv" ref={form}>
          <input
            type="name"
            required
            fullWidth
            name="from_name"
            placeholder="Name"
          />
          <input
            type="email"
            required
            fullWidth
            name="from_name"
            placeholder="E-mail"
          />
          <textarea
            required
            fullWidth
            name="message"
            placeholder="Message"
            rows="7"
            cols="50"
          ></textarea>
          <Button
            color="primary"
            size="small"
            variant="contained"
            sx={{ width: "130px" }}
            type="submit"
          >
            Send Message
          </Button>

          <ToastContainer />
        </form>
      </div>
      <div className="footer">&copy; GK | All rights resverd</div>
    </div>
  );
}

export default Contact;
