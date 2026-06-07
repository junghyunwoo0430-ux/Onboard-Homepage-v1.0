import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-title">고려대학교 시민정치리빙랩</div>
        <div>이주배경 학생 교육권 및 입시 정보 제공 프로젝트</div>
        <div>&copy; {new Date().getFullYear()} Korea University Citizen Politics Living Lab. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
