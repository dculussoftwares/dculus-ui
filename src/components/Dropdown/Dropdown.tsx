import React from 'react';
import Select from 'react-select';


interface DropdownProps {
  dropdownType: 'primary' | 'secondary',
  icon?: JSX.Element,
  options: string[],
  defaultValue: string,
}


const Dropdown = (props) => {


  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }


  return (
    <Select
    theme={(theme) => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary25: "var(--primary-color-border-hover)",
        primary: "var(--primary-color)",
      },
    })}
      {...props}
    />
  )
}

export default Dropdown