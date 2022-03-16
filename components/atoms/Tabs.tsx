import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';

interface TabData {
  children;
  label: string;
  key: string;
}

export const Tabs = ({ tabs, initialTab }: { tabs: TabData[]; initialTab?: string }) => (
  <Tab.Group defaultIndex={initialTab ? tabs.findIndex((t) => t.key === initialTab) : 0}>
    <Tab.List className="flex flex-wrap items-center justify-center gap-1">
      {tabs.map((tab) => (
        <Tab as={Fragment} key={tab.key}>
          {({ selected }) => (
            <div>
              <button
                className={clsx(
                  'border-b-2 border-transparent bg-white bg-opacity-10 px-2 py-1 text-white',
                  selected ? '!border-white' : '',
                )}
              >
                {tab.label}
              </button>
            </div>
          )}
        </Tab>
      ))}
    </Tab.List>
    <Tab.Panels>
      {tabs.map((tab) => (
        <Tab.Panel key={tab.key}>{tab.children}</Tab.Panel>
      ))}
    </Tab.Panels>
  </Tab.Group>
);
