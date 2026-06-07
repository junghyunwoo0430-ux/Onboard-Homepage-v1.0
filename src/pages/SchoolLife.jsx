import { useTranslation } from 'react-i18next';
import './Page.css';

const SchoolLife = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">{t('nav.school_life')}</h1>
      </div>

      <div className="content-section">
        <h2 className="content-subtitle">2025년 공교육 진입 안내 (우리아이 학교보내기)</h2>
        <p>
          이주배경 아동이 한국의 초등학교, 중학교, 고등학교에 입학하기 위해 필요한 절차와 준비 서류를 안내합니다.
        </p>
        <p style={{ marginTop: '15px' }}>
          아래 버튼을 클릭하여 다국어로 제공되는 안내 책자를 다운로드하세요.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
          <button className="download-btn">한국어 PDF</button>
          <button className="download-btn">English PDF</button>
          <button className="download-btn">中文 PDF</button>
          <button className="download-btn">日本語 PDF</button>
          <button className="download-btn">Русский PDF</button>
          <button className="download-btn">Монгол PDF</button>
          <button className="download-btn">Tiếng Việt PDF</button>
        </div>
      </div>
    </div>
  );
};

export default SchoolLife;
