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
            <span>menu</span>
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
              <span><a href="tel:+971 50 123 4567">+971 50 123 4567</a></span>
            </div>
            <div className={cls.email}>
              <span className={cls.spanBig}>Our Mail</span>
              <span>steeldesignfze.ae@gmail.com</span>
            </div>
          </div>
          <div className={cls.descSquer}>
            <span className={cls.span1}>Addres </span>
            <span>SAIF EXECUTIVE </span>
            <span>OFFICE P8-03-01</span>
          </div>
        </div>
        <span className={cls.span1}>© Company name and some information about cmp</span>
      </div>
    </footer>
  );
};

export default FooterHome;
