import { type ChangeEvent, useState } from 'react'
import { HelpText } from '@/components/help-text/help-text'

export type TextInputVariants = 'default' | 'success' | 'error' | 'disabled'

interface TextInputProps {
  label: string
  placeholder: string
  helpText: string
  variant: TextInputVariants
}

const variantClasses = {
  default: '',
  success: 'border-green-500',
  error: 'border-red-500',
  disabled: 'cursor-not-allowed',
}

export const TextInput = ({
  label,
  variant,
  placeholder,
  helpText,
}: TextInputProps) => {
  const [text, setText] = useState('Input text here')

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const variantStyle = variantClasses[variant]
  const helpTextVariant = variant === 'error' ? 'error' : 'default'
  const disabled = variant === 'disabled'

  return (
    <div className='flex flex-col items-start'>
      <label htmlFor='input'>{label}</label>
      <input
        id='input'
        name='input'
        value={text}
        onChange={handleTextChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`p-2 rounded-lg border border-gray-300 ${variantStyle} focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent`}
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
