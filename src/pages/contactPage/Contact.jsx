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
            <a type="gmail">alphaimpex.org@outlook.com</a>
          </li>
          <li>
            <h2>PHONE NUMBER:</h2>
            <a href="tel:+902123456789">+90 212 345 67 89</a>
          </li>
          <li>
            <h2>LOCATION:</h2>
            <span>Atakoy 7-8-9-10. Kisim mah. Cobançesme <br /> e-5 yan yol cad. A no: 22 /1 Iç Kapi no: 30 <br />bakirkoy/ Istanbul/Turkey</span>
          </li>
          <li></li>
        </ol>
      </div>
    </main>
  );
}

export default Contact;
