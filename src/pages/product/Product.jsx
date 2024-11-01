import React from "react";
import cls from "./product.module.scss";
import laptop from "./images/laptop.png";
import hole from "./images/diy.png";
import chef from "./images/motorbike.png";
import varehous from "./images/wotche.png";
import { useTranslation } from "react-i18next";
import HeaderHome from "../../components/headerHome/HeaderHome";
import FooterHome from "../../components/footerHome/FooterHome";
const Product = () => {
  const { t } = useTranslation();
  return (
    <>
      <main className={cls.main}>
        <div className={cls.title}>
          <h1>{t("products")}</h1>
        </div>
        <div className={cls.cards}>
          <div className={cls.card}>
            <ul>
              <h3>Car And Motorbike</h3>
              <li>Car and motorbike care</li>
              <li>Car accessories</li>
              <li>Car parts</li>
              <li>Car tools</li>
            </ul>
            <img src={chef} alt="" />
          </div>
          <div className={cls.card}>
            <img src={hole} alt="" />
            <ul>
              <h3 >DIY And Tools</h3>
              <li>Building machinery</li>
              <li>Home organisation</li>
              <li>Building supplies</li>
              <li>Electrical wiring</li>
            </ul>
          </div>
          <div className={cls.card}>
            <ul>
              <h3>Sanitary Equipment</h3>
              <li>Fittings and pipes</li>
              <li>Water heaters</li>
              <li>Sewerage and drainage systems</li>
              <li>Faucets and taps</li>
            </ul>
            <img src={varehous} alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
