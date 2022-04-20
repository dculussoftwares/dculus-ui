import React from 'react';
import Select from 'react-select';


// control: base => ({
//   ...base,
//   fontSize: 14,
//   minHeight: 'initial',
//   borderRadius: 2,
//   border: '1px solid var(--primary-color-hover)',
//   boxShadow: 'none',
//   '&:hover': {
//     border: '1px solid var(--primary-color-select)',
//   },
//   '&:focus': {
//     border: '1px solid var(--primary-color-select)',
//   }
//   // border: 2,
//   // // This line disable the blue border
//   // boxShadow: 'none'
// }),

interface DropdownProps {
  dropdownType: 'primary' | 'secondary',
  icon?: JSX.Element,
  options: string[],
  defaultValue: string,
}


const Dropdown = (props) => {

  const targetHeight = 32;
  const hoverColor = 'var(--primary-color-select)';

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderRadius: 2,
      fontSize: 14
    }),
    input: (provided, state) => ({
      ...provided,
      margin: 0,
    }),
    // control: base => ({
    //   ...base,
    //   fontSize: 14,
    //   minHeight: 'initial',
    //   borderRadius: 2,
    //   border: '1px solid var(--primary-color-hover)',
    //   boxShadow: 'none',
    //   '&:hover': {
    //     border: '1px solid var(--primary-color-select)',
    //   },
    //   '&:focus': {
    //     border: '1px solid var(--primary-color-select)',
    //   }
    //   // border: 2,
    //   // // This line disable the blue border
    //   // boxShadow: 'none'
    // }),

    control: (base, state) => ({
      ...base,

      fontSize: 14,
      minHeight: 'initial',
      borderRadius: 2,

      boxShadow: state.isFocused ? 0 : 0,
      borderColor: state.isFocused
        ? hoverColor
        : base.borderColor,
      '&:hover': {
        borderColor: hoverColor,
      }
    }),


    valueContainer: base => ({
      ...base,
      height: `${targetHeight - 1 - 1}px`,
      padding: '0 8px',
    }),
    clearIndicator: base => ({
      ...base,
      padding: `${(targetHeight - 20 - 1 - 1) / 2}px`,
    }),
    dropdownIndicator: base => ({
      ...base,
      color: "var(--primary-color-icon)",
      padding: `${(targetHeight - 20 - 1 - 1) / 2}px`,
    }),
    menu: (provided, state) => ({
      ...provided,
      borderRadius: 2
    }),
  };

  return (
    <Select
      styles={customStyles}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "var(--primary-color-hover)",
          primary50: "var(--primary-color-hover)",
          primary75: "var(--primary-color-hover)",
          primary: "var(--primary-color)",
          neutral30: "var(--primary-color)",
          neutral20: "var(--primary-color-hover)",
        },
      })}
      {...props}
    />
  )
}

export default Dropdown