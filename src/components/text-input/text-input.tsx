'use client'

import { HelpText } from '@/components/help-text/help-text'
import { useEffect, useState, type ChangeEvent } from 'react'

export type TextInputVariants = 'default' | 'active' | 'error' | 'disabled'

interface TextInputProps {
  id?: string
  value?: string | number
  label: string
  placeholder: string
  helpText?: string
  variant?: TextInputVariants
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  type?: 'text' | 'number'
}

const variantClasses = {
  default: '',
  active: '',
  error: 'border-red-500',
  disabled: 'cursor-not-allowed',
}

export const TextInput = ({
  id,
  label,
  variant = 'default',
  placeholder,
  helpText = '',
  value = '',
  onChange,
  type = 'text',
}: TextInputProps) => {
  const [ownValue, setOwnValue] = useState(value)
  const variantStyle = variantClasses[variant]
  const helpTextVariant = variant === 'error' ? 'error' : 'default'
  const disabled = variant === 'disabled'

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
      return
    }

    setOwnValue(e.target.value)
  }

  useEffect(() => {
    setOwnValue(value)
  }, [value])

  return (
    <div className='w-full flex flex-col items-start gap-1'>
      <label
        className='text-text-secondary'
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        value={ownValue}
        type={type}
        onChange={onChangeHandler}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full p-2 rounded-lg border border-border-subtle-00 ${variantStyle} focus:outline-none focus:ring-2 focus:ring-border-interactive focus:border-transparent disabled:bg-background-hover placeholder:text-text-placeholder`}
      />
      {helpText && (
        <HelpText
          variant={helpTextVariant}
          text={helpText}
        />
      )}
    </div>
  )
}
