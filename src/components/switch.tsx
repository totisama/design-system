'use client'

import React, { useState } from 'react'

export const Switch = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <label className='flex cursor-pointer select-none items-center'>
      <div className='relative'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <div
          className={`h-5 w-14 rounded-full ${isChecked ? 'bg-[#D1D9DD]' : 'bg-[#A4CCF4]'} shadow-inner`}
        ></div>
        <div
          className={`absolute left-0 -top-1 flex h-7 w-7 border-4 border-[#E5E7EB] items-center justify-center rounded-full transition ${
            isChecked
              ? '!bg-white'
              : 'bg-[#0764C1] translate-x-7 border-[#0764C1]'
          }`}
        ></div>
      </div>
    </label>
  )
}
