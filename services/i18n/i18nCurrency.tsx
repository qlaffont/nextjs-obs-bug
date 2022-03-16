import useI18n from './I18nHook';

export const useI18nCurrency = () => {
  const { activeLocale } = useI18n();

  return {
    format: (price: number, currency: string) =>
      new Intl.NumberFormat(activeLocale, {
        style: 'currency',
        currency,
      }).format(price),
  };
};
