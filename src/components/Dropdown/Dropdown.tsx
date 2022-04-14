import React from 'react';
import Select from 'react-select';


interface DropdownProps {
  dropdownType: 'primary' | 'secondary',
  icon?: JSX.Element,
  options: string[],
  defaultValue: string,
}


const Dropdown = (props) => {


  // const customStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     borderBottom: '1px dotted pink',
  //     color: state.isSelected ? 'red' : 'blue',
  //     padding: 20,
  //   }),
  //   control: () => ({
  //     // none of react-select's styles are passed to <Control />
  //     width: 200,
  //   }),
  //   singleValue: (provided, state) => {
  //     const opacity = state.isDisabled ? 0.5 : 1;
  //     const transition = 'opacity 300ms';

  //     return { ...provided, opacity, transition };
  //   }
  // }

  // const customStyles = {
  //   input: (provided, state) => ({
  //     ...provided,
  //     width: 100,
  //     height: 20,
  //     display: 'flex',
  //     alignItems: 'center',
  //   }),
  //   singleValue: (provided, state) => ({
  //     ...provided,
  //     marginTop: 2,
  //   }),
  // };
  const targetHeight = 32;

  const customStyles = {
    input: (provided, state) => ({
      ...provided,
      margin: 0,
     
      // fontSize: 14
      // width: 100,
      // height: 20,
      // display: 'flex',
      // alignItems: 'center',
    }),
    control: base => ({
      ...base,
      fontSize: 14,
      minHeight: 'initial',
      borderRadius:2
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
      padding: `${(targetHeight - 20 - 1 - 1) / 2}px`,
    }),
  };
  // const customStyles = {
  //   control: provided => ({
  //     ...provided,
  //     minHeight: "20px",
  //   }),
  //   indicatorsContainer: provided => ({
  //     ...provided,
  //     height: "20px"
  //   }),
  //   clearIndicator: provided => ({
  //     ...provided,
  //     padding: "5px"
  //   }),
  //   dropdownIndicator: provided => ({
  //     ...provided,
  //     padding: "5px"
  //   })
  // };
  return (
    <Select
      styles={customStyles}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "var(--primary-color-border-hover)",
          primary: "var(--primary-color)",
          neutral30: "var(--primary-color)",
          neutral20: "var(--primary-color-border)",
        },
      })}
      {...props}
    />
  )
}

export default Dropdown