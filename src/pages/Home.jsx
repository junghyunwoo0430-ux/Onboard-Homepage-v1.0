import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaSchool, FaUniversity, FaPassport } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <section className="hero-section">
        <h1 className="hero-title">{t('home.hero_title')}</h1>
        <p className="hero-subtitle">{t('home.hero_subtitle')}</p>
      </section>

      <section className="quick-links-section">
        <h2 className="section-title">{t('home.quick_links')}</h2>
        <div className="cards-grid">
          <Link to="/school-life" className="card">
            <FaSchool className="card-icon" />
            <div className="card-title">{t('nav.school_life')}</div>
            <p>공교육 진입 안내 및 우리아이 학교보내기</p>
          </Link>
          <Link to="/admission" className="card">
            <FaUniversity className="card-icon" />
            <div className="card-title">{t('nav.admission')}</div>
            <p>서울 및 거점 국립대 특별전형 모집요강</p>
          </Link>
          <Link to="/visa" className="card">
            <FaPassport className="card-icon" />
            <div className="card-title">{t('nav.visa')}</div>
            <p>유학생 체류자격 및 비자 정보 안내</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
