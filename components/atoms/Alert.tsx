import clsx from 'clsx';
import { useMemo } from 'react';

import useI18n from '../../services/i18n/I18nHook';

type toastType = 'success' | 'info' | 'error';

const Alert = ({ msg, closeToast = undefined, toastProps = undefined }) => {
  const { t } = useI18n();

  const icon = useMemo(() => {
    switch (toastProps.type) {
      case 'error':
        return 'sad';

      case 'success':
        return 'smile';

      default:
        return 'info-circle';
    }
  }, [toastProps]);

  return (
    <>
      <div className="flex justify-between">
        <div>
          <div className="flex gap-1">
            <div>
              <i className={clsx(`icon icon-${icon} block h-6 w-6`, `bg-${toastProps?.type as toastType}`)}></i>
            </div>
            <p className={clsx(`text-${toastProps?.type as toastType}`, 'font-bold capitalize')}>
              {t(`components.atoms.alert.${toastProps.type as toastType}`)}
            </p>
          </div>
          <p className="mt-2 text-justify" style={{ lineHeight: '1.25em', fontSize: '0.85em' }}>
            {msg}
          </p>
        </div>

        <div>
          <i className="icon icon-close block h-4 w-4 cursor-pointer" onClick={closeToast}></i>
        </div>
      </div>
    </>
  );
};

export default Alert;
