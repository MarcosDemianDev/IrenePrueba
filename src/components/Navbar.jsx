import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CiLogout } from 'react-icons/ci';
import { useLanguage } from '../context/LanguageContext';
import logo from "../assets/images/logo.webp";
import '../styles/Navbar.css';

function Navbar() {
  const { language, translations, changeLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className="nav-logo-container">
        <img className="navbar-logo" src={logo} alt="Logo" />
      </div>
      <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'show' : ''}`}>
          <li>
            <Link to={`/${language}`} onClick={toggleMenu}>
              {translations.navbar.home}
            </Link>
          </li>
          <li>
            <Link to={`/${language}/history`} onClick={toggleMenu}>
              {translations.navbar.history}
            </Link>
          </li>
          <li>
            <Link to={`/${language}/products`} onClick={toggleMenu}>
              {translations.navbar.products}
            </Link>
          </li>
          <li>
            <select
              className="lenguage-select"
              value={language}
              onChange={handleLanguageChange}
              onClick={(e) => e.stopPropagation()}
            >
              <option value="es">Español</option>
              <option value="pt">Português</option>
            </select>
          </li>
          <Link className="logout-hiden" to="/">
            <CiLogout size={24} />
          </Link>
        </ul>
        <Link className="logout-normal" to="/">
          <CiLogout size={24} />
        </Link>
      </nav>
    </>
  );
}

export default Navbar;