import { useContext } from 'react';

import { I18nContext, I18nReturn } from './I18nProvider';

export default function useI18n() {
  const i18n = useContext(I18nContext);

  return i18n as I18nReturn;
}
