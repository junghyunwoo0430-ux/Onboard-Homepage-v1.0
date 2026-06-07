import { useTranslation } from 'react-i18next';
import GlossaryTooltip from '../components/GlossaryTooltip';
import './Page.css';

const Visa = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">{t('nav.visa')}</h1>
      </div>

      <div className="content-section">
        <h2 className="content-subtitle">유학생 비자 및 체류자격 안내</h2>
        <p>
          외국인 학생이 한국에서 학업을 진행하기 위해 필요한 <GlossaryTooltip termKey="visa_status">체류자격</GlossaryTooltip> 및 비자 발급 절차를 안내합니다.
        </p>

        <div style={{ marginTop: '20px' }}>
          <div className="list-item">
            <strong>D-2 (유학 비자)</strong>
            <p>정규 학위 과정(학사, 석사, 박사)에 입학하는 유학생을 위한 비자입니다. 대학의 표준입학허가서가 필요합니다.</p>
          </div>
          <div className="list-item">
            <strong>D-4 (일반연수 비자)</strong>
            <p>대학 부설 어학당 등에서 한국어 연수를 받는 학생들을 위한 비자입니다.</p>
          </div>
          <div className="list-item">
            <strong>F-4, F-5 등 기타 체류자격 보유자</strong>
            <p>이미 합법적인 체류자격을 보유한 경우, 해당 자격으로 학업을 병행할 수 있는지 출입국관리사무소를 통해 별도로 확인해야 합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visa;
