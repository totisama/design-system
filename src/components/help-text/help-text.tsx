import type React from 'react'
import { Text } from '@/components/text/text'
import { type TextColor } from '../text/text-types'

export type HelpTextVariant = 'default' | 'success' | 'error' | 'info'

const styles: { [key in HelpTextVariant]: string } = {
  default: 'text-secondary',
  success: 'text-success',
  error: 'text-error',
  info: 'text-on-color',
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
    <Text
      as='subtitle'
      color={variantStyle as TextColor}
    >
      {text}
    </Text>
  )
}
