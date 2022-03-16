import { format, formatDistance, formatDistanceToNow, formatDuration, formatRelative } from 'date-fns';

import useI18n from './I18nHook';

export const useI18nDate = () => {
  const { dateFNSLocale } = useI18n();

  return {
    format: (
      date: number | Date,
      stringFormat: string,
      options: {
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        firstWeekContainsDate?: number;
        useAdditionalWeekYearTokens?: boolean;
        useAdditionalDayOfYearTokens?: boolean;
      } = {},
    ) => format(date, stringFormat, { ...options, locale: dateFNSLocale }),

    formatRelative: (
      date: number | Date,
      baseDate: number | Date,
      options: {
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
      } = {},
    ) => formatRelative(date, baseDate, { ...options, locale: dateFNSLocale }),

    formatDistance: (
      date: number | Date,
      baseDate: number | Date,
      options: {
        includeSeconds?: boolean;
        addSuffix?: boolean;
      } = {},
    ) => formatDistance(date, baseDate, { ...options, locale: dateFNSLocale }),

    formatDistanceToNow: (
      date: number | Date,
      options: {
        includeSeconds?: boolean;
        addSuffix?: boolean;
      } = {},
    ) => formatDistanceToNow(date, { ...options, locale: dateFNSLocale }),

    formatDuration: (
      duration: Duration,
      options: {
        format?: string[];
        zero?: boolean;
        delimiter?: string;
      } = {},
    ) => formatDuration(duration, { ...options, locale: dateFNSLocale }),
  };
};
