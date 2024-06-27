'use client'

import React, { useState } from 'react'
import { HelpText } from '@/components/help-text/help-text'

interface SwitchProps {
  label: string
}

export const Switch = ({ label }: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <label className='flex cursor-pointer select-none items-center'>
      <div className='relative mr-2'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <div
          className={`h-5 w-14 rounded-full ${isChecked ? 'bg-button-primary-disabled ' : 'bg-border-subtle-00'}`}
        ></div>
        <div
          className={`absolute left-0 -top-1 flex h-7 w-7 border-2  items-center justify-center rounded-full transition ${
            isChecked
              ? 'bg-button-primary-hover translate-x-7 border-button-primary-hover'
              : '!bg-white border-border-subtle-00'
          }`}
        />
      </div>
      <HelpText
        text={label}
        variant={'default'}
      />
    </label>
  )
}
