import React, { useState } from "react";
import cls from "./headerHome.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "./images/logo.svg";
const HeaderHome = () => {
  const { t, i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(
    i18n.language.toUpperCase()
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для управления бургер-меню

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setActiveLanguage(language.toUpperCase());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cls.header}>
      <div className={cls.header_wrap}>
        <div className={cls.navBar}>
          <Link to="/aboutus">{t("about")}</Link>
          <Link to="/product">{t("products")}</Link>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/service">{t("service")}</Link>
          <Link to="/contact">{t("contact")}</Link>
        </div>
        <img className={cls.logo} src={logo} alt="" />
        <div className={cls.burgerMenu}>
          <button onClick={toggleMenu} className={cls.burgerButton}>
            ☰
          </button>
          {isMenuOpen && (
            <div className={cls.burgerContent}>
              <Link to="/aboutus" onClick={toggleMenu}>
                {t("about")}
              </Link>
              <Link to="/product" onClick={toggleMenu}>
                {t("products")}
              </Link>
              <Link to="/service" onClick={toggleMenu}>
                {t("service")}
              </Link>
              <Link to="/contact" onClick={toggleMenu}>
                {t("contact")}
              </Link>
            </div>
          )}
        </div>
        <Link to="/contact" className={cls.linkDiv}>
          <button className={cls.btn}>Order Now</button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderHome;
