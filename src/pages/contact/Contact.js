import React from "react";
import "./Contact.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <div className="mail">
            <MailOutlineIcon
              sx={{ position: "unset", color: "rgb(16, 204, 254)" }}
            />
            <a href="mailto: mvgkrishna96@gmail.com">
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
          <TextField
            id="outlined-basic"
            fullWidth
            label="Name"
            variant="outlined"
            color="primary"
            name="from_name"
          />
          <TextField
            id="outlined-basic"
            fullWidth
            label="E-mail"
            type="email"
            variant="outlined"
            name="from_name"
          />
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            name="message"
          />
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
