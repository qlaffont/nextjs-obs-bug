import { Dialog, Transition } from '@headlessui/react';
import { FC } from 'react';
import { Fragment, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const emptyFunction = () => {};

const SimpleModal: FC<{
  children;
  isOpen: boolean;
  onClose: (event?: any) => void;
}> = ({ children, isOpen, onClose }) => {
  const closeButtonRef = useRef(null);
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-10 overflow-y-auto"
        initialFocus={closeButtonRef}
        open={isOpen}
        onClose={emptyFunction}
      >
        <div className="flex min-h-screen items-end justify-center text-center sm:block ">
          <Dialog.Overlay />
          <div
            className="fixed inset-0 bg-dark-100 bg-opacity-50 backdrop-blur backdrop-filter transition-opacity"
            onClick={() => onClose()}
          />

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="z-10 m-auto inline-block transform rounded-lg bg-opacity-80 text-left align-middle shadow-xl transition-all">
              <div modal-content="true">
                <div>{children}</div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export const scrollToTopModal = () => {
  document.querySelector('[modal-content]')?.scrollTo({ top: 0, behavior: 'smooth' });
};

export default SimpleModal;
