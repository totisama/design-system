import type React from 'react'
import { Box } from '@/components/box/box'
import { type Width } from '@/components/box/box-tokens'

export interface CardProps {
  children: React.ReactNode
  width?: Width
}

export const Card = ({ children, width }: CardProps) => {
  return (
    <Box
      as='div'
      backgroundColor={'background'}
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
