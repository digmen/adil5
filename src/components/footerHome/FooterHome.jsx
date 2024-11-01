import React from 'react';
import cls from './footerHome.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from './images/logo.png';

const FooterHome = () => {
  const { t } = useTranslation();

  return (
    <footer className={cls.footer}>
      <div className={cls.footer_wrap}>
        <div className={cls.footer_content}>
          <div className={cls.someWords}>
            <img src={logo} alt="" />
            <span>Reliability in every detail  quality for your comfort</span>
          </div>
          <div className={cls.menu}>
            <p>Menu</p>
            <nav>
              <Link to="/">{t('home')}</Link>
              <Link to="/aboutus">{t('about')}</Link>
              <Link to="/service">{t('service')}</Link>
              <Link to="/contact">{t('contact')}</Link>
              <Link to="/product">{t('products')}</Link>
            </nav>
          </div>
          <div className={cls.contacts}>
            <div className={cls.number}>
              <span className={cls.spanBig}>Telephone <br />Number</span>
              <p><a href="tel:+971 50 123 4567">+971 50 123 4567</a></p>
            </div>
            <div className={cls.email}>
              <span className={cls.spanBig}>Our Mail</span>
              <p>steeldesignfze.ae@gmail.com</p>
            </div>
          </div>
          <div className={cls.descSquer}>
            <span className={cls.span1}>Address</span>
            <p>SAIF EXECUTIVE </p>
            <p>OFFICE P8-03-01</p>
          </div>
        </div>
        <span className={cls.span1}>© Company name and some information about <br />cmp</span>
      </div>
    </footer>
  );
};

export default FooterHome;
