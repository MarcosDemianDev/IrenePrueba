import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/History.css";
import useTextAppearanceEffect from "../hooks/TextAppearance.jsx";
import { useLanguage } from "../context/LanguageContext";

function History() {
  useTextAppearanceEffect();

  const { language, translations, onLanguageChange } = useLanguage();

  return (
    <>
      <Navbar
        translations={translations}
        language={language}
        onLanguageChange={onLanguageChange}
      />
      <div className="contenedor-history">
        <h1 className="history-title">{translations.history.title}</h1>
        <div className="timeline-cont">
          <h4>{translations.history.sections["1967"].title}</h4>
          <p className="history-txt txt-effect">
            {translations.history.sections["1967"].content}
          </p>
          <h4>{translations.history.sections["1979"].title}</h4>
            <p
              className="history-txt txt-effect"
              dangerouslySetInnerHTML={{
                __html: translations.history.sections["1979"].content,
              }}
            />
          <h4>{translations.history.sections["1980s"].title}</h4>
          <p className="history-txt txt-effect">
            {translations.history.sections["1980s"].content}
          </p>
          <h4>{translations.history.sections.supermarkets.title}</h4>
          <p className="history-txt txt-effect">
            {translations.history.sections.supermarkets.content}
          </p>
          <h4>{translations.history.sections.audits.title}</h4>
          <p className="history-txt txt-effect">
            {translations.history.sections.audits.content}
          </p>
          <h4>{translations.history.sections.today.title}</h4>
          <p className="history-txt txt-effect">
            {translations.history.sections.today.content}
          </p>
        </div>
        <div className="macerata-irene">
          <div className="macerata-img">
            <h4>{translations.history.sections.irene.title}</h4>
          </div>
          <p className="txt-effect">
            {translations.history.sections.irene.content}
          </p>
        </div>
      </div>
      <Footer translations={translations} />
    </>
  );
}

export default History;
