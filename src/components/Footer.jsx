import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';
import "../styles/Footer.css";

function Footer() {
  const { translations, language } = useLanguage();
  const { lang } = useParams();
  
  return (
    <footer className="footer-container">
      <div className="footer-media-container">
        <div className="navigate media-conainers">
          <h4 className="footer-titles">{translations.footer.navigate}</h4>
          <ul className="navigation-ul">
            <li>
              <Link to={`/${lang || language}`}>
                <p className="footer-text hover-efect">{translations.footer.links.home}</p>
              </Link>
            </li>
            <li>
              <Link to={`/${lang || language}/products`}>
                <p className="footer-text hover-efect">{translations.footer.links.products}</p>
              </Link>
            </li>
            <li>
              <Link to={`/${lang || language}/history`}>
                <p className="footer-text hover-efect">{translations.footer.links.history}</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="networks media-conainers">
          <h4 className="footer-titles">{translations.footer.social}</h4>
          <ul className="networks-ul">
            <li>
              <a href="https://www.facebook.com/fideosirene/?locale=es_LA">
                <TiSocialFacebook className="hover-efect" size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/fideosirene/">
                <TiSocialInstagram className="hover-efect" size={30} />
              </a>
            </li>
          </ul>
        </div>

        <div className="legal media-conainers">
          <h4 className="footer-titles">{translations.footer.legal.info}</h4>
          <ul className="legal-ul">
            <li>
              <Link to={`/${lang || language}/legal-notice`}>
                <p className="footer-text hover-efect">{translations.footer.legal.notice}</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;