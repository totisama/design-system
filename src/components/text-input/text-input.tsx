import { HelpText } from '@/components/help-text/help-text'
import { type ChangeEvent } from 'react'

export type TextInputVariants = 'default' | 'active' | 'error' | 'disabled'

interface TextInputProps {
  id?: string
  value: string
  label: string
  placeholder: string
  helpText?: string
  variant?: TextInputVariants
  onClick?: (e: ChangeEvent<HTMLInputElement>) => void
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
  value,
  onClick,
}: TextInputProps) => {
  const variantStyle = variantClasses[variant]
  const helpTextVariant = variant === 'error' ? 'error' : 'default'
  const disabled = variant === 'disabled'

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
        value={value}
        onChange={onClick}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full p-2 rounded-lg border border-gray-300 ${variantStyle} focus:outline-none focus:ring-2 focus:ring-border-interactive focus:border-transparent placeholder:text-text-placeholder`}
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
