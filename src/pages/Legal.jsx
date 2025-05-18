import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Legal.css";

function Legal() {
  const { translations } = useLanguage();

  return (
    <>
      <Navbar />
      <section className="legal-notice_container">
        <h1>{translations.legalNotice.title}</h1>
        <ol className="legal-notice_list">
          <li className="legal-notice_li">
            <h2>{translations.legalNotice.point1.title}</h2>
            <p>{translations.legalNotice.point1.content}</p>
          </li>

          <li className="legal-notice_li">
            <h2>{translations.legalNotice.point2.title}</h2>
            <p>{translations.legalNotice.point2.content}</p>
          </li>

          <li className="legal-notice_li">
            <h2>{translations.legalNotice.point3.title}</h2>
            <p>{translations.legalNotice.point3.content}</p>
          </li>

          {/*<li className="legal-notice_li">
            <h2>{translations.legalNotice.point4.title}</h2>
            <p>{translations.legalNotice.point4.content}</p>
          </li>*/}
        </ol>
      </section>
      <Footer />
    </>
  );
}

export default Legal;
