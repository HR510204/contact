import React, { useState } from "react";
import Styles from "../../styles/contactUs/contact.module.scss";
// import db from "../dataBase/firebase";

const index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    console.log(name, email, message);
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className={Styles.container}>
      <h1>Contact us</h1>
      <span className={Styles.sub}>
        contact us for quote, help or to join the team
      </span>
      <div className={Styles.list}>
        <span>Address</span>
        <span>Email</span>
        <span>Phone</span>
      </div>
      <div className={Styles.listData}>
        <span>2713 Love Haven</span>
        <span>hi@studio.com</span>
        <span>071-246-3165</span>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className={Styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          className={Styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          className={Styles.input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <div>
          <button className={Styles.button} type="submit">
            <span>Send Message</span>
          </button>
        </div>
      </form>
      <h3>Follow Us</h3>
      <div className={Styles.social}>
        <span>Facebook</span>
        <span>Twitter</span>
        <span>Instagram</span>
        <span>Linkdin</span>
      </div>
      <div className={Styles.socialData}>
        <span>/studio</span>
        <span>/studio</span>
        <span>/studio</span>
        <span>/studio</span>
      </div>
    </div>
  );
};

export default index;
