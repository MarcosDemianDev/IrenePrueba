import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import tricolor from '../assets/images/tricolor.webp';
import paquetes from '../assets/images/paquetes.webp';
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
            <img src={tricolor} alt="fideos-img" />
            <div className='container-title-banner'>
              <h2>{translations.home.banner.title}</h2>
              <p>{translations.home.banner.text}</p>
              <Link className='btn-banner' to={`/${translations.home.banner.buttonLink}`}>
                {translations.home.banner.button}
              </Link>
            </div>
          </div>
        </section>

        <h2 className='subtitle'>{translations.home.subtitle}</h2>
        <section className="products-section-container">
          <div className="products-content-cont">
            <img src={paquetes} alt="Paquetes de fideos" />
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