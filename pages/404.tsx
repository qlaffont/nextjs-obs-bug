import { SEO } from '../components/atoms/SEO';
import useI18n from '../services/i18n/I18nHook';

const Error404 = () => {
  const { t } = useI18n();

  return (
    <div>
      <div>
        <p className="text-center text-xl uppercase text-white">{t('pages.error.404.title')}</p>
      </div>
      <SEO title={t('pages.error.404.title')} />
    </div>
  );
};

export default Error404;
