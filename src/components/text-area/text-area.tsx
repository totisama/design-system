import { type ChangeEvent } from 'react'
import { Text } from '@/components/text/text'
import { Box } from '@/components/box/box'

export type TextAreaVariants = 'default' | 'error' | 'focus'

interface TextAreaProps {
  id: string
  label: string
  value: string
  variant: TextAreaVariants
  placeholder?: string
  maxCharacters?: number
  resizable?: boolean
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const variantClasses = {
  default: '',
  error: 'border-text-error border-1',
  focus: 'border-[#1076dd] border-1',
}

export const TextArea = ({
  id,
  label,
  maxCharacters,
  value,
  variant,
  placeholder,
  resizable = true,
  onChange,
}: TextAreaProps) => {
  const variantStyle = variantClasses[variant]

  return (
    <Box
      as='div'
      width={'100%'}
      display='flex'
      flexDirection='column'
      alignItems='start'
      gap='spacing-02'
    >
      <Box
        as='div'
        width={'100%'}
        display='flex'
        justifyContent='between'
      >
        <Text
          as='body'
          color='text-secondary'
        >
          {label}
        </Text>
        {maxCharacters && (
          <Text
            as='p'
            size='xs'
            color='text-placeholder'
            weight='normal'
            lineHeight='normal'
          >
            {value.length}/{maxCharacters}
          </Text>
        )}
      </Box>
      <textarea
        id={id}
        name={id}
        value={value}
        maxLength={maxCharacters}
        onChange={onChange}
        className={`w-[300px] min-h-20 p-2 rounded-lg border border-border-subtle-00 ${variantStyle} ${!resizable ? 'resize-none' : ''} focus:outline-none focus:ring-2 focus:ring-border-interactive focus:border-transparent disabled:bg-background-hover placeholder:text-text-placeholder`}
        placeholder={placeholder}
      />
    </Box>
  )
}
