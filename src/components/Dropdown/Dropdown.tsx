import React from 'react'


interface DropdownProps {
    dropdownType: 'primary' | 'secondary',
    icon?: JSX.Element,
    options:string[],
    defaultValue:string,
}


const Dropdown = () => {
  return (
    <div>Dropdown</div>
  )
}

export default Dropdown