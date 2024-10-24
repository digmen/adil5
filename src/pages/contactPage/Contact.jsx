import React, { useTransition } from "react";
import styles from "./contact.module.scss";
import imageBack from "./assets/bakg.png";
import { useTranslation } from "react-i18next";

function Contact() {
  // const { t } = useTranslation();
  return (
    <main
      className={styles.main}
      style={{ backgroundImage: `url(${imageBack})`, background: "" }}
    >
      <div className={styles.title}>
        <h1>Contact</h1>
      </div>
      <div className={styles.backBlock}>
        <ol>
          <li></li>
          <li>
            <h2>You can find us at:</h2>
          </li>
          <li>
            <h2>EMAIL:</h2>
            <a type="gmail">steeldesignfze.ae@gmail.com</a>
          </li>
          <li>
            <h2>PHONE NUMBER:</h2>
            <a href="tel:+971501234567">+971 50 123 4567</a>
          </li>
          <li>
            <h2>LOCATION:</h2>
            <span>SAIF EXECUTIVE OFFICE P8-03-01</span>
          </li>
          <li></li>
        </ol>
      </div>
    </main>
  );
}

export default Contact;
