'use client'

import type React from 'react'
import { useState } from 'react'
import { Text } from '@/components/text/text'

interface RadioButtonProps {
  label: string
  name: string
  checked: boolean
  disabled?: boolean
  error?: boolean
  onClick: () => void
}

export type States = 'error' | 'disabled'

export const RadioButton = ({
  label,
  name,
  checked,
  disabled = false,
  error = false,
  onClick,
}: RadioButtonProps) => {
  const [isDisabled] = useState(disabled)
  const handleLabelClick = (
    event: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
    if (isDisabled || error) {
      return
    }
    event.preventDefault()
    onClick()
  }

  const stateStyles = error
    ? 'border-[2px] border-border-error'
    : isDisabled && checked
      ? 'border-[5px] border-border-subtle-00 bg-background'
      : isDisabled
        ? 'border-[2px] border-border-subtle-00 bg-background-hover'
        : checked
          ? 'border-[5px] border-border-interactive hover:bg-button-tertiary-hover'
          : 'border-[2px] border-border-subtle-01 hover:bg-button-tertiary-hover'

  return (
    <label
      htmlFor={name}
      className={`flex items-center space-x-2 ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={handleLabelClick}
    >
      <div
        id={name}
        className={`w-4 h-4 rounded-full ${stateStyles}`}
        role='radio'
        aria-checked={checked}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
      />
      <Text
        as='body'
        color='text-secondary'
      >
        {label}
      </Text>
    </label>
  )
}
