/* eslint-disable react/no-unescaped-entities */
import { components } from 'react-select';

export const SelectDropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    {props?.selectProps?.hideIndicator ? (
      <div className="hidden"></div>
    ) : (
      <i className="icon icon-arrow-down h-4 w-4 cursor-pointer bg-white"></i>
    )}
  </components.DropdownIndicator>
);
