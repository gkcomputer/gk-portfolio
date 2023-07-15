import React from "react";
import "./Contact.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import send_icon from "../../assests/send_icon.svg";
import phone_icon from "../../assests/phone.png";
import { Button, TextField } from "@mui/material";

function Contact() {
  return (
    <div>
      <div className="contactdiv">
        <div className="leftdiv">
          <h1>Contact Me</h1>
          <div className="mail">
            <img src={send_icon} alt="send-icon" width="20px" />
            <p> @gamil.com</p>
          </div>
          <div className="mail">
            <img src={phone_icon} alt="send-icon" width="20px" />
            <p>+91-9160008500</p>
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
        <div className="rightdiv">
          <TextField
            id="outlined-basic"
            fullWidth
            label="Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            fullWidth
            label="E-mail"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            defaultValue=""
          />
          <Button
            color="primary"
            size="small"
            variant="contained"
            sx={{ width: "130px" }}
          >
            Send Message
          </Button>
        </div>
      </div>
      <div className="footer">&copy; GK | All rights resverd</div>
    </div>
  );
}

export default Contact;
