import type React from 'react'
import { Box } from './box/box'
import {
  type TextAlign,
  type AlignItems,
  type JustifyContent,
} from '@/components/box/box-tokens'

export const Container = ({
  children,
  justifyContent,
  alignItems,
  textAlign = 'center',
}: {
  children: React.ReactNode
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  textAlign?: TextAlign
}) => {
  return (
    <Box
      as='section'
      height={320}
      width={'100%'}
    >
      <Box
        as='div'
        width={'100%'}
        backgroundColor='background-hover'
        paddingX='spacing-05'
        height={'100%'}
        display='flex'
        justifyContent={justifyContent}
        alignItems={alignItems}
        borderRadius='border-radius-04'
        textAlign={textAlign}
      >
        {children}
      </Box>
    </Box>
  )
}
