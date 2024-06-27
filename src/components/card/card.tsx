import type React from 'react'
import { Box } from '@/components/box/box'
import {
  type BackgroundColors,
  type Width,
  type Height,
} from '@/components/box/box-tokens'

export interface CardProps {
  children: React.ReactNode
  backgroundColor?: BackgroundColors
  width?: Width
  height?: Height
}

export const Card = ({
  children,
  backgroundColor = 'background',
  width,
  height,
}: CardProps) => {
  return (
    <Box
      as='div'
      backgroundColor={backgroundColor}
      borderColor={'border-subtle-00'}
      borderRadius={'border-radius-03'}
      borderSize={'border-1'}
      paddingX={'spacing-06'}
      paddingY={'spacing-06'}
      width={width}
      textAlign='start'
    >
      {children}
    </Box>
  )
}
