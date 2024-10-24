import React from 'react';
import cls from './product.module.scss';
import laptop from './images/laptop.png';
import hole from './images/diy.png';
import chef from './images/motorbike.png';
import varehous from './images/wotche.png';
import { useTranslation } from 'react-i18next';
import HeaderHome from '../../components/headerHome/HeaderHome';
import FooterHome from '../../components/footerHome/FooterHome';
const Product = () => {
  const { t } = useTranslation();
  return (
    <>
      <main className={cls.main}>
        <div className={cls.aboutUs_wrap}>
          <div className={cls.title}>
            <h1>{t('products')}</h1>
          </div>
          <div className={cls.sides}>
            <div className={cls.right}>
              <div className={cls.history}>
                <h2>Car And Motorbike</h2>

                <ul>
                  <li>Car and motorbike care</li>
                  <li>Car accessories</li>
                  <li>Car parts</li>
                  <li>Car tools</li>
                </ul>
              </div>
              <img src={hole} alt="hole" />
              <div className={cls.expansion}>
                <h2>Sanitary Equipment</h2>
                <ul>
                  <li>Fittings and pipes</li>
                  <li>Water heaters</li>
                  <li>Sewerage and drainage systems</li>
                  <li>Faucets and taps</li>
                </ul>
              </div>
            </div>
            <div className={cls.left}>
              <div className={cls.rapid}>
                <img src={chef} alt="chef" />
                <h2>DIY And Tools</h2>
                <ul>
                  <li>Building machinery</li>
                  <li>Home organisation</li>
                  <li>Building supplies</li>
                  <li>Electrical wiring</li>
                </ul>
              </div>
              <div className={cls.look}>
                <img src={varehous} alt="warehous" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
