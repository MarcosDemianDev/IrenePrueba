import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LogoNav from './LogoNav';
import '../styles/LanguageSelection.css';

const LanguageSelection = () => {
  const { changeLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleLanguageSelection = (language) => {
    changeLanguage(language);
    navigate(`/${language}`);
  };

  return (
    <>
      <LogoNav />
      <div className="language-selection">
        <h2>Idioma:</h2>
        <div className="buttons">
          <button onClick={() => handleLanguageSelection('pt')}>Português</button>
          <button onClick={() => handleLanguageSelection('es')}>Español</button>
        </div>
      </div>
    </>
  );
};

export default LanguageSelection;
