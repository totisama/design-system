import type React from 'react'

export type HelpTextVariant = 'default' | 'success' | 'error' | 'info'

const styles: { [key in HelpTextVariant]: string } = {
  default: 'text-text-secondary',
  success: 'text-text-success',
  error: 'text-text-error',
  info: 'text-text-on-color underline',
}

export const HelpText = ({
  text,
  variant,
}: {
  text: string
  variant: HelpTextVariant
}) => {
  const variantStyle = styles[variant]

  return (
    <small className={`text-base font-normal leading-5 ${variantStyle}`}>
      {text}
    </small>
  )
}
