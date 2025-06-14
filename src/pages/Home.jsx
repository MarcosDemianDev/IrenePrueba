import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hand from '../assets/images/mano.webp';
import ProductsImg from '../assets/images/tenedor.webp';
import Roller from '../assets/images/rodillo.webp';
import '../styles/Home.css';

function Home() {
  const { translations } = useLanguage();
  const blockRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const blockPosition = blockRef.current?.getBoundingClientRect().top;
      if (blockPosition < window.innerHeight - 100) {
        blockRef.current?.classList.add("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className='container'>
        <h1 className='title'>{translations.home.title}</h1>
        <section className='banner-cont block' ref={blockRef}>
          <div className='banner'>
            <img src={Hand} alt="fideos-img" />
            <div className='container-title-banner'>
              <h2>{translations.home.banner.title}</h2>
              <p>{translations.home.banner.text}</p>
              <Link className='btn-banner' to={`/${translations.home.banner.buttonLink}`}>
                {translations.home.banner.button}
              </Link>
            </div>
          </div>
        </section>

        <h2 className='subtitle'>{translations.home.titleIdentity}</h2>
        <section className="section-container">
          <div className="identity-content-cont">
            <div className="identity-txt-cont">
              <p dangerouslySetInnerHTML={{ __html: translations.home.identity.text }}></p>
            </div>
            <img src={Roller} alt="Huevos, Harina, Rodillo y Fideos" />
          </div>
        </section>

        <h2 className='subtitle'>{translations.home.titleProducts}</h2>
        <section className="section-container">
          <div className="products-content-cont">
            <img src={ProductsImg} alt="Paquetes de fideos" />
            <div className="products-txt-cont">
              <p dangerouslySetInnerHTML={{ __html: translations.home.products.text }}></p>
              <Link className="btn-products" to={`/${translations.home.products.buttonLink}`}>
                {translations.home.products.button}
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;