import React from 'react';
import Select from 'react-select';


interface DropdownProps {
  dropdownType: 'primary' | 'secondary',
  icon?: JSX.Element,
  options: string[],
  defaultValue: string,
}


const Dropdown = (props) => {
  return (
    <Select
      {...props}
    />
  )
}

export default Dropdown