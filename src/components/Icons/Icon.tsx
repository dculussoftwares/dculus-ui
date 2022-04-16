import React from 'react'

interface IIconsProps {
  icon?: JSX.Element,
}

const Icon = ({ icon }: IIconsProps) => {
  return (
    <div className='icon w-8 h-8 flex items-center justify-center hover:bg-slate-200 transition duration-150 rounded-full ml-3'>
      {icon}
    </div>
  )
}

export default Icon