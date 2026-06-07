import { useTranslation } from 'react-i18next';
import GlossaryTooltip from '../components/GlossaryTooltip';
import './Page.css';

const Admission = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">{t('nav.admission')}</h1>
      </div>

      <div className="content-section">
        <h2 className="content-subtitle">서울 소재 4년제 대학 외국인 전형</h2>
        <p>
          부모가 모두 외국인인 학생을 대상으로 하는 <GlossaryTooltip termKey="special_admission">특별전형</GlossaryTooltip>입니다. 
          각 대학의 상세한 <GlossaryTooltip termKey="admission_guideline">모집요강</GlossaryTooltip>은 아래 링크를 확인하세요.
        </p>
        
        <div style={{ marginTop: '20px' }}>
          <div className="list-item">
            <strong>고려대학교 (Korea University)</strong>
            <p>2025학년도 전기 외국인 특별전형 모집 안내</p>
            <a href="#" className="download-btn">모집요강 확인</a>
          </div>
          <div className="list-item">
            <strong>서울대학교 (Seoul National University)</strong>
            <p>2025학년도 글로벌인재특별전형 모집 안내</p>
            <a href="#" className="download-btn">모집요강 확인</a>
          </div>
          <div className="list-item">
            <strong>연세대학교 (Yonsei University)</strong>
            <p>2025학년도 외국인전형 신입학 안내</p>
            <a href="#" className="download-btn">모집요강 확인</a>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 className="content-subtitle">거점 국립대 외국인 전형</h2>
        <p>
          지역을 대표하는 국립대학교의 <GlossaryTooltip termKey="admission_guideline">모집요강</GlossaryTooltip>입니다.
          상대적으로 학비가 저렴하고 다양한 장학금 혜택이 있습니다.
        </p>
        
        <div style={{ marginTop: '20px' }}>
          <div className="list-item">
            <strong>경북대학교 (Kyungpook National University)</strong>
            <a href="#" className="download-btn">모집요강 확인</a>
          </div>
          <div className="list-item">
            <strong>부산대학교 (Pusan National University)</strong>
            <a href="#" className="download-btn">모집요강 확인</a>
          </div>
          <div className="list-item">
            <strong>전남대학교 (Chonnam National University)</strong>
            <a href="#" className="download-btn">모집요강 확인</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
