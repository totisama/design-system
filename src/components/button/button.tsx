import type React from 'react'
import { Box } from '@/components/box/box'
import { Text } from '../text/text'

export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'invisible'
export type ButtonAlign = 'start' | 'center' | 'end'
export type ButtonType = 'button' | 'submit'

interface ButtonPropS {
  children: React.ReactNode
  size: ButtonSize
  variant: ButtonVariant
  buttonAlign?: ButtonAlign
  type?: ButtonType
  onClick?: () => void
}

export const Button = ({
  children,
  size,
  variant,
  buttonAlign,
  type = 'button',
  onClick,
}: ButtonPropS) => {
  const buttonSize =
    size === 'small'
      ? 'px-4 py-2'
      : size === 'medium'
        ? 'px-20 py-3'
        : 'px-28 py-2'

  const buttonVariant =
    variant === 'primary'
      ? 'text-white bg-button-primary hover:bg-button-primary-hover disabled:button-primary-disabled'
      : variant === 'secondary'
        ? 'text-white bg-button-secondary hover:bg-button-secondary-hover disabled:button-secondary-disabled'
        : variant === 'tertiary'
          ? 'text-black bg-button-tertiary hover:bg-button-tertiary-hover disabled:button-tertiary-disabled'
          : 'bg-transparent text-text-on-color'

  return (
    <Box
      as='div'
      display='flex'
      width={'100%'}
      justifyContent={buttonAlign}
    >
      <button
        type={type}
        onClick={onClick}
        className={`rounded-3xl ${buttonSize} ${buttonVariant} ${buttonAlign === 'center' && 'w-full'}`}
      >
        <Text as={variant === 'invisible' ? 'p' : 'h5'}>{children}</Text>
      </button>
    </Box>
  )
}
