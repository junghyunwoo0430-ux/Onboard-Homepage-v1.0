import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          Korea Univ. Living Lab
        </Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">{t('nav.home')}</Link>
          <Link to="/school-life" className="nav-link">{t('nav.school_life')}</Link>
          <Link to="/admission" className="nav-link">{t('nav.admission')}</Link>
          <Link to="/visa" className="nav-link">{t('nav.visa')}</Link>
        </nav>
        <div className="controls">
          <select 
            className="lang-selector" 
            value={i18n.language} 
            onChange={changeLanguage}
            title="Select Language"
          >
            <option value="ko">한국어 (Korean)</option>
            <option value="en">English (영어)</option>
            <option value="zh">中文 (Chinese)</option>
            <option value="ja">日本語 (Japanese)</option>
            <option value="ru">Русский (Russian)</option>
            <option value="mn">Монгол (Mongolian)</option>
            <option value="vi">Tiếng Việt (Vietnamese)</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
