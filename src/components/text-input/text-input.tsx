'use client'

import { HelpText } from '@/components/help-text/help-text'
import { useEffect, useState, type ChangeEvent } from 'react'
import { Box } from '@/components/box/box'
import { Text } from '../text/text'

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
    <Box
      as='div'
      width={'100%'}
      display='flex'
      flexDirection='column'
      alignItems='start'
      gap='spacing-02'
    >
      <Text
        as='body'
        color='text-secondary'
      >
        {label}
      </Text>
      <input
        id={id}
        name={id}
        value={ownValue}
        type={type}
        onChange={onChangeHandler}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full p-2 rounded-lg border border-border-subtle-00 ${variantStyle} focus:outline-none focus:ring-2 focus:ring-border-interactive focus:border-transparent disabled:bg-background-hover disabled:text-text-placeholder placeholder:text-text-placeholder`}
      />
      {helpText && (
        <HelpText
          variant={helpTextVariant}
          text={helpText}
        />
      )}
    </Box>
  )
}
