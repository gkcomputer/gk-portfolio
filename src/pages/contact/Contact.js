import React from "react";
import "./Contact.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { Button } from "@mui/material";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import resume from "../../assests/Krishna_FullStack_Resume.pdf";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

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
    <div id="contact" className="contactmain">
      <div className="contactdiv">
        <div className="leftdiv">
          <h1>Contact Me</h1>
          <div
            className="mail"
            onClick={() => {
              window.open("mailto:mvgeethakrishna96@gmail.com");
            }}
          >
            <MailOutlineIcon
              sx={{ position: "unset", color: "rgb(16, 204, 254)" }}
            />
            <a href={`mailto:mvgeethakrishna96@gmail.com`}>
              <h6>mvgeethakrishna96@gmail.com</h6>
            </a>
          </div>

          <div className="mail">
            <PhoneIcon sx={{ position: "unset", color: "rgb(16, 204, 254)" }} />
            <a href="tel:9515197516">
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
        <form className="rightdiv" ref={form} onSubmit={sendEmail}>
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
