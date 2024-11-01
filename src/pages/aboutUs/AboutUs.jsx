import React from "react";
import cls from "./aboutUs.module.scss";
import laptop from "./images/people.png";
import hole from "./images/hand.png";
import chef from "./images/varehous.png";
import varehous from "./images/person.png";
import { useTranslation } from "react-i18next";
import HeaderHome from "../../components/headerHome/HeaderHome";
import FooterHome from "../../components/footerHome/FooterHome";
const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <main className={cls.main}>
      <div className={cls.title}>
        <h1>About Us</h1>
      </div>
      <div className={cls.cards}>
        <div className={cls.divType}>
          <div>
            <h1>The History Of Our Company: From Humble Beginnings to the Leader of Wholesale Sales</h1>
            <p>Our company's history began with a small group of enthusiasts working together to serve the market with high-quality products at reasonable costs. After establishing the company, we immediately concentrated on major industries such as textiles, auto and motorcycle parts, clothes, and culinary products.</p>
          </div>
          <img src={laptop} alt="" />
        </div>
        <div className={cls.divType2}>
          <img src={hole} alt="" />
          <div>
            <h1>Rapid Growth and <br />Development</h1>
            <p>Customers instantly trusted the organization because of its emphasis on quality and reliability. Every year, we raised the volume of goods, established new warehouses, and grew the crew. The introduction of contemporary technologies, which enabled us to optimize logistics and increase customer service, was a significant milestone in our progress.</p>
          </div>
        </div>
        <div className={cls.divType}>
          <div>
            <h1>Expansion Of The Product <br />Range</h1>
            <p>With increasing demand for our products, we have consistently increased the variety to fulfill market demands. Today, we are happy to offer our consumers a diverse range of products, including textiles, clothes, auto parts, and food. As a result, our organization serves as a one-stop shop for numerous businesses.</p>
          </div>
          <img src={chef} alt="" />
        </div>
        <div className={cls.divType2}>
          <img src={varehous} alt="" />
          <div>
            <h1>A look into the Future</h1>
            <p>We don't stop there; we always seek for development. Our future ambitions include expanding the product variety, implementing new logistical methods, and expanding our client base. We are convinced that by using this strategy, we will be able to continue to provide our clients with high-quality service and attractive conditions of collaboration.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
