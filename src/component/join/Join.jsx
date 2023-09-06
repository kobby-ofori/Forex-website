import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser"

const Join = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_msfyqq8', 'template_4pzn4nd', form.current, 'dVlUBs5NEmQ36choq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span>ABCDEFG</span>
          <span className="stroke-text">HIJKLMN</span>
        </div>
        <div>
          <span>OPQRST</span>
          <span className="stroke-text">UVWXYZ</span>
        </div>
      </div>

      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder="Enter email..." />
          <button className="btn btn-j">Join</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
