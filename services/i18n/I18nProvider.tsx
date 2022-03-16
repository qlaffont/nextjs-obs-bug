/* eslint-disable @typescript-eslint/no-var-requires */
import * as dateFNSLocaleFile from 'date-fns/locale';
import { createContext, useEffect, useState } from 'react';
import rosetta from 'rosetta';
import { useIsClient, useLocalStorage } from 'usehooks-ts';

import enLocale from '../../i18n/en';
import frLocale from '../../i18n/fr';

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends Record<string, unknown>
  ? {
      [K in keyof T]-?: K extends string | number ? `${K}` | Join<K, Paths<T[K]>> : never;
    }[keyof T]
  : '';

const i18n = rosetta();

const languages = {
  fr: frLocale,
  en: enLocale,
};
type language = keyof typeof languages;

for (const [lng, dict] of Object.entries(languages)) {
  i18n.set(lng, dict);
}

export const defaultLanguage: language = 'fr';

const lngs = Object.keys(languages) as unknown as language[];

// Set default language
i18n.locale(defaultLanguage);

//@ts-ignore
export const I18nContext = createContext();

export interface I18nReturn {
  activeLocale: language;
  t: (key: Paths<typeof frLocale>, data?: Record<string, unknown>) => string;
  tWithoutFallback: (key: Paths<typeof frLocale>, data?: Record<string, unknown>) => string;
  locales: language[];
  locale: (l: language, dict?: any) => void;
  dateFNSLocale: typeof dateFNSLocaleFile['enUS'];
}

export default function I18n({ children }) {
  const isClient = useIsClient();
  const [activeLocale, setActiveLocale] = useLocalStorage<language>(
    'lng',
    typeof navigator !== 'undefined'
      ? lngs.indexOf(navigator?.language?.split('-')[0]?.toLowerCase() as language) !== -1
        ? (navigator?.language?.split('-')[0]?.toLowerCase() as language)
        : defaultLanguage
      : defaultLanguage,
  );
  const [dateFNSLocale, setDateFNSLocale] = useState(dateFNSLocaleFile['enUS']);
  const [, setTick] = useState(0);

  useEffect(() => {
    if (activeLocale) {
      const newLang = lngs.includes(activeLocale) ? activeLocale : defaultLanguage;
      i18n.locale(newLang);
      setDateFNSLocale(
        //@ts-ignore
        dateFNSLocaleFile[activeLocale] || dateFNSLocaleFile['enUS'],
      );
    }
  }, [activeLocale, isClient]);

  const i18nWrapper: I18nReturn = {
    activeLocale,
    t: (...args) => i18n.t(...args) || args[0],
    tWithoutFallback: (...args) => i18n.t(...args) || '',
    locales: lngs,
    locale: (l: language, dict = undefined) => {
      const newLang = lngs.includes(l?.toLowerCase() as language) ? (l?.toLowerCase() as language) : defaultLanguage;
      setActiveLocale(newLang);
      if (dict) {
        i18n.set(newLang, dict);
      }
      // force rerender to update view
      setTick((tick) => tick + 1);
    },
    dateFNSLocale,
  };

  return <I18nContext.Provider value={i18nWrapper}>{children}</I18nContext.Provider>;
}
