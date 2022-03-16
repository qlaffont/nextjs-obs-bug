import clsx from 'clsx';
import React from 'react';
import { useMemo } from 'react';
import { RefCallBack } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import SelectComponent from 'react-select';
import AsyncSelectComponent from 'react-select/async';
import AsyncCreatableSelectComponent from 'react-select/async-creatable';
import CreatableSelectComponent from 'react-select/creatable';

import { useI18nDate } from '../../services/i18n/i18nDate';
import useI18n from '../../services/i18n/I18nHook';
import { translateErrorMessage } from '../../services/useYup';
import { InputSize } from './Input';
import { SelectClearIndicator } from './Select/SelectClearIndicator';
import { SelectControl } from './Select/SelectControl';
import { SelectDefaultOptionComponent } from './Select/SelectDefaultOptionComponent';
import { SelectDropdownIndicator } from './Select/SelectDropdownIndicator';
import { SelectIndicatorSeparator } from './Select/SelectIndicatorSeperator';
import { SelectInput } from './Select/SelectInput';
import { SelectMenu } from './Select/SelectMenu';
import { SelectPlaceholder } from './Select/SelectPlaceholder';
import { SelectSingleValue } from './Select/SelectSingleValue';
import { SelectValueContainer } from './Select/SelectValueContainer';

export interface SelectOption {
  label: string;
  value: string;
}

type SelectProps = {
  className?: string;
  async?: boolean;
  creatable?: boolean;
  size?: InputSize;
  disabled?: boolean;
  options?: SelectOption[];
  label?: string;
  error?;
  helperText?: string;
  value?: any;
  selectRef?: RefCallBack;
  required?: boolean;
  inputProps?: Record<string, any>;
  hideIndicator?: boolean;
  isSearchable?: boolean;
  placeholder?: string;
  onChange;
  SingleValueComponent?;
  OptionComponent?;
};

export const Select: React.FC<SelectProps> = ({
  async = false,
  creatable = false,
  className = '',
  placeholder = '',
  options = [],
  label,
  size = 'medium',
  error,
  helperText,
  value,
  disabled = false,
  selectRef,
  OptionComponent = SelectDefaultOptionComponent,
  SingleValueComponent = SelectSingleValue,
  required,
  inputProps,
  ...props
}) => {
  const { t } = useI18n();
  const { format } = useI18nDate();
  const SelectCmp = useMemo(
    () =>
      async
        ? creatable
          ? AsyncCreatableSelectComponent
          : AsyncSelectComponent
        : creatable
        ? CreatableSelectComponent
        : SelectComponent,
    [async, creatable],
  );

  return (
    <div className={clsx(className)}>
      {label && (
        <p className={clsx('block pb-2', error ? '!text-error' : 'text-dark-100 dark:text-white')}>
          {required ? `${label} *` : label}
        </p>
      )}
      {/* @ts-ignore */}
      <div className={clsx(disabled ? '!cursor-not-allowed opacity-50' : '')}>
        <SelectCmp
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          menuPortalTarget={typeof document !== 'undefined' ? document?.body : undefined}
          value={options.find((c) => c.value === value)}
          options={options}
          placeholder={placeholder}
          components={{
            Option: OptionComponent,
            Input: SelectInput,
            Placeholder: SelectPlaceholder,
            IndicatorSeparator: SelectIndicatorSeparator,
            DropdownIndicator: SelectDropdownIndicator,
            Control: SelectControl,
            Menu: SelectMenu,
            SingleValue: SingleValueComponent,
            ValueContainer: SelectValueContainer,
            ClearIndicator: SelectClearIndicator,
          }}
          //@ts-ignore
          inputProps={{
            autoComplete: 'off',
            ...inputProps,
          }}
          noOptionsMessage={() => (
            <span className="text-sm text-dark-40">{t('components.atoms.select.noOptions')}</span>
          )}
          loadingMessage={() => <span className="text-sm text-dark-40">{t('components.atoms.select.loading')}...</span>}
          size={size}
          error={error}
          helperText={helperText}
          isDisabled={disabled}
          inputRef={selectRef}
          {...props}
        />
      </div>
      {(!!error || helperText) && (
        <p className={clsx('mt-1 text-sm', error ? '!border-error !text-error' : 'text-dark-60')}>
          {translateErrorMessage(error, t, format) || helperText}
        </p>
      )}
    </div>
  );
};

export const SelectForm = ({ name, control, options, required = false, ...props }) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { ref, onChange, ...fieldProps } }) => {
      return (
        <Select
          {...fieldProps}
          options={options}
          selectRef={ref}
          required={required}
          onChange={(val) => onChange(Array.isArray(val) ? val?.map((v) => v.value) : val?.value || undefined)}
          {...props}
        />
      );
    }}
  />
);
