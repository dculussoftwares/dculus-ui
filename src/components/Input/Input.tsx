import React from 'react'

interface IInputProps {
}
const Input = () => {
  return (
    <input className="w-full text-sm focus:ring-transparent placeholder-slate-400 appearance-none px-2 py-1 outline-hidden input-v"
      type="search"
      placeholder="Search Anything…" />
  )
}

export default Input