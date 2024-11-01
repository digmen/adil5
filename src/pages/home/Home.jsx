import cls from "./home.module.scss";
import HeaderHome from "../../components/headerHome/HeaderHome";
import FooterHome from "../../components/footerHome/FooterHome";
import { useTranslation } from "react-i18next";
import man from "./images/man.png";
import { Link } from "react-router-dom";
const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <main className={cls.main}>
        <div className={cls.supplies_wrap}>
          <div className={cls.supples_content}>
            <h2>Wholesale supplies of sanitary equipment, car and motorbike, DIYand tools </h2>
            <p>Welcome to our website! We specialize in the wholesale supply of high-quality products for business. Our range includes textiles, clothing, household goods and electronics. We work only with trusted manufacturers and guarantee competitive prices, flexible terms of cooperation and prompt delivery. Partnership with us is a reliable and long—term benefit for your business.</p>
            <Link to="/contact" className={cls.linkDiv}>
              <button>Contact Now</button>
            </Link>
          </div>
        </div>
        <div className={cls.swiper}>
          <div className={cls.swiperBlock}>
            <div className={cls.desc}>
              <img src={man} alt="man" />
              <div className={cls.desc2}>
                <span>About Us</span>
                <p>
                  Our company was founded with the aim of providing high-quality
                  plumbing equipment and services for professionals and
                  homeowners. Since their inception, we have been striving for
                  innovation and excellence, taking into account reliability
                  solutions that make our customers' work easier and more
                  efficient. Thanks to many years of experience and a
                  professional team, we have quickly established ourselves as a
                  reliable partner in the field of plumbing.
                </p>
              </div>
            </div>
            <div className={cls.swiper_wrap}>
              <div className={cls.cards}>
                <div className={cls.card}>
                  <span>Car And Motorbike</span>
                  <p>
                    High-quality tools and spare components are needed for auto
                    and motorcycle maintenance and repairs. Everything you need
                    to maintain your vehicle in top shape is provided by
                    [Company Name]. For every product, we promise excellent
                    quality, a large selection, and reasonable costs. For expert
                    guidance and assistance choosing the required spare parts,
                    get in touch with us.
                  </p>
                </div>
                <div className={cls.card}>
                  <span>DIY And Tools</span>
                  <p>
                    A variety of tools and supplies for do-it-yourself projects
                    are available from World Innovation Group. Everything you
                    need for construction, repairs, and creativity may be found
                    here. We promise excellent quality, reasonable costs, and
                    knowledgeable assistance. Get in touch with us to realize
                    your do-it-yourself dreams.
                  </p>
                </div>
                <div className={cls.card}>
                  <span>Sanitary Equipment</span>
                  <p>
                    A large selection of home appliances are available from
                    World Innovation Group. You may get dependable and
                    high-quality cooking, cleaning, and comfort appliances here.
                    We promise expert service, reasonable costs, and excellent
                    quality. Get in touch with us to use our home appliances to
                    create a comfortable and contemporary space.
                  </p>
                </div>
              </div>
              <Link to="/product">
                <button>See more</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={cls.questions}>
          <div className={cls.questions_wrap}>
            <h2>{t("questions")}</h2>
            <p>{t("wether")}</p>
            <Link to="/aboutus">
              <button>{t("leanMore")}</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
