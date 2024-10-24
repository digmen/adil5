import cls from './home.module.scss';
import HeaderHome from '../../components/headerHome/HeaderHome';
import FooterHome from '../../components/footerHome/FooterHome';
import { useTranslation } from 'react-i18next';
import man from './images/man.png';
import { Link } from 'react-router-dom';
const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <main className={cls.main}>
        <div className={cls.supplies_wrap}>
          <div className={cls.supples_content}>
            <h2>{t('wholesale')}</h2>
            <p>{t('welcome')}</p>
            <button>{t('contactNow')}</button>
          </div>
        </div>
        <div className={cls.swiper}>
          <div className={cls.swiperBlock}>
            <div className={cls.desc}>
              <img src={man} alt="man" />
              <div className={cls.desc2}>
                <span>{t('Wlorem')}</span>
                <p>{t('lorem')}</p>
              </div>
            </div>
            <div className={cls.swiper_wrap}>
              <div className={cls.cards}>
                <div className={cls.card}>
                  <span>{t('motorbike')}</span>
                  <p>{t('descMotorbike')}</p>
                </div>
                <div className={cls.card}>
                  <span>{t('motorbike')}</span>
                  <p>{t('descMotorbike')}</p>
                </div>
                <div className={cls.card}>
                  <span>{t('motorbike')}</span>
                  <p>{t('descMotorbike')}</p>
                </div>
              </div>
              <Link to='/product'>
                <button>See more</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={cls.questions}>
          <div className={cls.questions_wrap}>
            <h2>{t('questions')}</h2>
            <p>{t('wether')}</p>
            <button>{t('leanMore')}</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
