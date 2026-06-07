import { useTranslation } from 'react-i18next';
import './GlossaryTooltip.css';

const GlossaryTooltip = ({ termKey, children }) => {
  const { t } = useTranslation();

  return (
    <span className="tooltip-wrapper">
      {children}
      <span className="tooltip-content">{t(`tooltip.${termKey}`)}</span>
    </span>
  );
};

export default GlossaryTooltip;
