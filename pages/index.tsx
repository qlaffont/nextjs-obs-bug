import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import Joyride from 'react-joyride';
import { useSsr } from 'usehooks-ts';

import { Button } from '../components/atoms/Button';
import { Input } from '../components/atoms/Input';
import { SEO } from '../components/atoms/SEO';
import useI18n from '../services/i18n/I18nHook';
import { useUser } from '../services/store/useUser';
import useAlert from '../services/useAlert';

const Home = () => {
  const { t } = useI18n();
  const router = useRouter();
  const ctx = useUser();
  const alert = useAlert();
  const [input, setInput] = useState<string | undefined>();
  const { isBrowser } = useSsr();

  const onJoin = () => {
    router.push(`/party/${input}`);
  };

  useEffect(() => {
    if (router.query.not_found) {
      alert.error(t('pages.home.error'));
    }
  }, [router]);

  const steps = useMemo(() => {
    if (!t) {
      return undefined;
    }

    return [
      {
        target: '#party',
        content: t('components.molecules.tutorial.home.stream'),
      },
    ];
  }, [t]);

  const isOBS = useMemo(() => (isBrowser ? navigator?.userAgent?.indexOf('OBS') !== -1 : false), [isBrowser]);

  return (
    <>
      <div className="m-auto space-y-5 rounded-2xl bg-dark-100 bg-opacity-20 p-5">
        {ctx?.profile?.profile?.id && (
          <Button size="small" onClick={() => router.push('/settings?tutorial=true')}>
            {t('components.molecules.tutorial.action')}
          </Button>
        )}
        {!isOBS && (
          <h1 className="text-xl font-bold uppercase text-white" id="party">
            {t('pages.home.title')}
          </h1>
        )}
        {!isOBS && (
          <div>
            <p className="text-white">{t('pages.home.description')}</p>
          </div>
        )}
        <div className="space-y-3">
          <div className="mx-auto max-w-sm">
            <Input
              label={t('pages.home.partyCode')}
              required
              name="partyCode"
              onChange={(evt) => setInput(evt?.target?.value)}
            />
          </div>
          <div>
            <Button type="submit" className="mx-auto" onClick={onJoin}>
              {t('pages.home.play')}
            </Button>
          </div>
        </div>
      </div>
      <SEO title={t('pages.home.title')} />
      <Joyride
        steps={steps}
        run={!!router.query.tutorial && !!steps}
        callback={(evt) => {
          if (evt.status === 'finished' && evt.lifecycle === 'complete') {
            alert.info(t('components.molecules.tutorial.home.play'));
          }
        }}
        styles={{
          options: {
            primaryColor: '#48dbfb',
          },
        }}
        locale={{
          close: t('components.atoms.alert.close'),
          back: t('components.atoms.alert.back'),
          last: t('components.atoms.alert.next'),
          next: t('components.atoms.alert.next'),
        }}
        continuous
      />
    </>
  );
};

export default Home;
