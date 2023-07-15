import React from "react";
import "./Contact.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import phone_icon from "../../assests/phone.png";
import { Button, TextField } from "@mui/material";

function Contact() {
  return (
    <div id="contact" className="contactmain">
      <div className="contactdiv">
        <div className="leftdiv">
          <h1>Contact Me</h1>
          <div className="mail">
            <MailOutlineIcon
              sx={{ position: "unset", color: "rgb(16, 204, 254)" }}
            />
            <h6> mvgkrishna96@gmail.com</h6>
          </div>
          <div className="mail">
            <PhoneIcon sx={{ position: "unset", color: "rgb(16, 204, 254)" }} />
            <h6>+91-9515197516</h6>
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
            color="primary"
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
