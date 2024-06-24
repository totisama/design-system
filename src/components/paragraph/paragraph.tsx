import type React from 'react'
import { Text } from '@/components/text'

export const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <Text as='p'>{children}</Text>
}
