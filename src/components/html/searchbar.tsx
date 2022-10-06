import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FaSearch } from 'react-icons/fa'

const Searchbar = ({
  className,
  value,
}: {
  value?: string
  label?: string
  error?: string
  register?: UseFormRegister<any>
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'>) => {
  return (
    <div
      className={
        className + ' flex-row flex-wrap items-center lg:ml-auto mr-3 relative '
      }
    >
      <FaSearch className="z-[2] h-full leading-snug font-normal text-center text-slate-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3" />

      <input
        value={value}
        type="text"
        placeholder="Search here..."
        className="border-0 px-3 py-3 placeholder-slate-500 text-slate-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
      />
    </div>
  )
}

export default Searchbar
