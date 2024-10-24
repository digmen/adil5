import React from 'react';
import cls from './aboutUs.module.scss';
import laptop from './images/people.png';
import hole from './images/hand.png';
import chef from './images/varehous.png';
import varehous from './images/person.png';
import { useTranslation } from 'react-i18next';
import HeaderHome from '../../components/headerHome/HeaderHome';
import FooterHome from '../../components/footerHome/FooterHome';
const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <main className={cls.main}>
        <div className={cls.aboutUs_wrap}>
          <div className={cls.title}>
            <h1>{t('about')}</h1>
          </div>
          <div className={cls.sides}>
            <div className={cls.right}>
              <div className={cls.history}>
                <h2>{t('history')}</h2>
                <p>{t('historyDesc')}</p>
                <img src={hole} alt="laptop" />
              </div>
              <div className={cls.expansion}>
                <h2>{t('expansion')}</h2>
                <p>{t('expansionDesc')}</p>
                <img src={varehous} alt="hole" />
              </div>
            </div>
            <div className={cls.left}>
              <div className={cls.rapid}>
                <img src={laptop} alt="chef" />
                <h2>{t('rapid')}</h2>
                <p>{t('rapidDesc')}</p>
              </div>
              <div className={cls.look}>
                <img src={chef} alt="warehous" />
                <h2>{t('look')}</h2>
                <p>{t('lookDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
