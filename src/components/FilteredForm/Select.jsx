import React from 'react';

import Select from 'react-select';

const colourStyles = {
  control: styles => ({
    ...styles,
    borderColor: 'rgba(18, 20, 23, 0.2)',
    border: 'none',
    borderRadius: '14px',
    padding: '8px',
    fontSize: '16px',
    backgroundColor: 'rgba(247, 247, 251, 1)',
    appearance: 'none',
  }),
  option: (styles, { isFocused }) => {
    return {
      ...styles,
      color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',

    };
  },
  menuList: base => ({
    ...base,
    '::-webkit-scrollbar': {
      width: '9px',
    },
    '::-webkit-scrollbar-track': {
      background: 'rgba(18, 20, 23, 0.05)',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'rgba(18, 20, 23, 0.05)',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: 'rgba(18, 20, 23, 0.05)',
    },
  }),
  placeholder: styles => ({
    ...styles,
    color: 'rgba(18, 20, 23, 1)',
  }),
};

export const Selecters = ({ options, onChange, placeholder, style }) => (
  <Select
    styles={colourStyles}
    options={options}
    onChange={onChange}
    placeholder={placeholder}
  />
);
export default Selecters;
