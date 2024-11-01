import styles from "./service.module.scss";
import pic from "./assets/Frame 1006.svg";
import { useTranslation } from "react-i18next";
import serviceImg from "./assets/service.png";
import React from "react";

function Service() {
  // const { t } = useTranslation();
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>Service</h1>
      </div>
      <div className={styles.firstBlock}>
        <h2>Why is our service superior to others?</h2>
        <div className={styles.divImage}>
          <p>
            We take great satisfaction in providing our clients with exceptional
            service that separates us from the competitors. Our service plan
            includes the following key elements:Individual approach: We give
            individualized solutions that are tailored to your specific needs
            and expectations since we understand that each customer is
            unique.Expert assistance: Our team of specialists is available to
            answer your questions and provide informed advise on product
            selection.Quick and trustworthy delivery: You may count on us in any
            situation since we guarantee timely delivery of the things.Quality
            Assurance: We offer guarantees and, if required, refunds to support
            the quality of our goods and services.Flexible working conditions:
            We strive to make our relationship profitable and easy.
          </p>
          <img src={serviceImg} alt="service image" />
        </div>
      </div>
      <div className={styles.infoWrap}>
        <div>
          <h2>LODISTIC AND DELIVERY</h2>
          <ul>
            <li className={styles.noLi}></li>
            <li>
              Fast and reliable delivery: optimized routes and professional
              logistics solutions to ensure timely delivery of goods.
            </li>
            <li>
              Order monitoring and tracking: The ability to track an order in
              real time.
            </li>
            <li>
              Cargo safety guarantee: ensuring the safety of the goods at all
              stages of delivery.
            </li>
          </ul>
        </div>
        <div>
          <h2>PRODUCT RANGE AND CATEGORIES</h2>

          <ul>
            <li className={styles.noLi}></li>

            <li>
              A wide range of products: from food and beverages to household
              appliances and textiles.
            </li>
            <li>
              Quality products: we work only with trusted suppliers and
              guarantee the high quality of all products.
            </li>
            <li>
              Special offers: regularly updated discounts and promotions for
              regular customers.
            </li>
          </ul>
        </div>
        <div>
          <h2>EASSY AND CONVENIENT TO USE</h2>
          <ul>
            <li className={styles.noLi}></li>
            <li>
            Ergonomic design that reduces the load on the hands and simplifies access to hard-to-reach places.
            </li>
            <li>
            Easy installation and setup — intuitive instructions and a minimum number of steps.
            </li>
            <li>
              Special offers: regularly updated discounts and promotions for
              regular customers.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.thirdBlock}>
        <h2>Advantages of working with us</h2>
        <div className={styles.brickDiv}>
          <div>
            <h3>High quality</h3>
            <p>Products from trusted and certified manufacturers.</p>
          </div>
          <div>
            <h3>Wide range</h3>
            <p>Products for all needs and preferences.</p>
          </div>
          <div>
            <h3>Competitive prices</h3>
            <p>Great deals, flexible discount system and regular promotions.</p>
          </div>
          <div>
            <h3>Professional support</h3>
            <p>Consultations and assistance from qualified specialists.</p>
          </div>
          <div>
            <h3>Fast delivery</h3>
            <p>Prompt delivery and convenient payment terms.</p>
          </div>
          <div>
            <h3>Reliability and trust</h3>
            <p>
              Long-term relationships and an individual approach to each client.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Service;
