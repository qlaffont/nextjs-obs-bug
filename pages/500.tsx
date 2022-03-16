import { SEO } from '../components/atoms/SEO';
import useI18n from '../services/i18n/I18nHook';

const Error500 = () => {
  const { t } = useI18n();

  return (
    <div>
      <div>
        <p className="text-center text-xl text-white">{t('pages.error.500.title')}</p>
        <SEO title={t('pages.error.500.title')} />
      </div>
    </div>
  );
};

export default Error500;
