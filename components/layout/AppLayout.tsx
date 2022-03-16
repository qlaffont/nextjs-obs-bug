import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { useBoolean, useSsr } from 'usehooks-ts';

import useI18n from '../../services/i18n/I18nHook';
import { useUser } from '../../services/store/useUser';

export const AppLayout = ({ children }) => {
  const {
    profile: { profile },
    navbar: { isAuthBlockDisplay },
  } = useUser();
  const router = useRouter();
  const { t } = useI18n();
  const { isBrowser } = useSsr();

  const { value: displayBackground, setValue: setDisplay } = useBoolean(true);

  const isOBS = useMemo(() => (isBrowser ? navigator?.userAgent?.indexOf('OBS') !== -1 : false), [isBrowser]);

  useEffect(() => {
    if (isBrowser) {
      if (isOBS) {
        setDisplay(false);
      }
    }
  }, [isOBS, isBrowser]);

  return (
    <div
      className={clsx(
        'min-w-screen min-h-screen',
        !displayBackground
          ? ''
          : 'animate-animatebg bg-gradient-to-tr from-[#FEAC5E] via-[#C779D0] to-[#4BC0C8] bg-400% transition-all ease-in-out',
      )}
    >
      <canvas id="confetti" className="absolute top-0 left-0 z-0 h-screen w-screen"></canvas>

      <div className="container relative z-[1] mx-auto space-y-3">
        {isAuthBlockDisplay && !isOBS && (
          <>
            <div className="mx-auto p-3 py-3 ">
              {profile?.username ? (
                <>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-lg font-bold text-white">
                    <div>
                      <Link href="/" passHref>
                        <a className={clsx('hover:opacity-70', router.pathname.startsWith('/') ? '' : '')}>
                          <i className="icon icon-home block h-4 w-4 bg-white"></i>
                        </a>
                      </Link>
                    </div>
                    <div>
                      <Link href="/party" passHref>
                        <a
                          className={clsx(
                            'hover:opacity-70',
                            router.pathname.startsWith('/party') ? 'border-b border-white' : '',
                          )}
                          id="create-party"
                        >
                          {t('pages.party.create.title')}
                        </a>
                      </Link>
                    </div>
                    <div>
                      <Link href="/playlists" passHref>
                        <a
                          className={clsx(
                            'hover:opacity-70',
                            router.pathname.startsWith('/playlists') ? 'border-b border-white' : '',
                          )}
                          id="manage-playlists"
                        >
                          {t('pages.playlists.list.title')}
                        </a>
                      </Link>
                    </div>
                    <div>
                      <Link href="/questions" passHref>
                        <a
                          className={clsx(
                            'hover:opacity-70',
                            router.pathname.startsWith('/questions') ? 'border-b border-white' : '',
                          )}
                          id="manage-questions"
                        >
                          {t('pages.questions.list.title')}
                        </a>
                      </Link>
                    </div>
                    <div>
                      <Link href="/settings" passHref>
                        <a
                          className={clsx(
                            'hover:opacity-70',
                            router.pathname.startsWith('/settings') ? 'border-b border-white' : '',
                          )}
                          id="manage-settings"
                        >
                          {t('pages.settings.title')}
                        </a>
                      </Link>
                    </div>

                    <div>
                      <Link href="https://discord.gg/G6uN7858es" passHref>
                        <a className={clsx('hover:opacity-70')}>
                          <i className="brand icon-discord mt-2 block h-5 w-5 bg-white" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-lg font-bold text-white">
                    <div>
                      <Link href="/auth/login" passHref>
                        <a className="hover:opacity-70">{t('pages.auth.login.title')}</a>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}

        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};
