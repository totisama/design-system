import { type ChangeEvent, useState } from 'react'
import { HelpText } from '@/components/help-text/help-text'

export type TextInputVariants = 'default' | 'active' | 'error' | 'disabled'

interface TextInputProps {
  label: string
  placeholder: string
  helpText: string
  variant: TextInputVariants
}

const variantClasses = {
  default: '',
  active: '',
  error: 'border-red-500',
  disabled: 'cursor-not-allowed',
}

export const TextInput = ({
  label,
  variant,
  placeholder,
  helpText,
}: TextInputProps) => {
  const [text, setText] = useState('Input text')

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const variantStyle = variantClasses[variant]
  const helpTextVariant = variant === 'error' ? 'error' : 'default'
  const disabled = variant === 'disabled'

  return (
    <div className='flex flex-col items-start gap-2'>
      <label
        className='text-text-secondary'
        htmlFor='input'
      >
        {label}
      </label>
      <input
        id='input'
        name='input'
        value={text}
        onChange={handleTextChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`p-2 rounded-lg border border-gray-300 ${variantStyle} focus:outline-none focus:ring-2 focus:ring-border-interactive focus:border-transparent placeholder:text-text-placeholder`}
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
