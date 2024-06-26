import { Box } from '@/components/box/box'
import type React from 'react'

export interface CardProps {
  children: React.ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <Box as='article'>{children}</Box>
}
