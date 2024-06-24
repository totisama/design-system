import type React from 'react'
import { Text } from '@/components/text'

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

interface HeadinProps {
  as: HeadingTags
  children: React.ReactNode
}

export const Heading = ({ as, children }: HeadinProps) => {
  return <Text as={as}>{children}</Text>
}
