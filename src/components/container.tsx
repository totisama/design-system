import type React from 'react'
import { Box } from './box/box'

export const Container = ({ children }: { children: React.ReactNode }) => {
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
        justifyContent='center'
        alignItems='center'
        borderRadius='border-radius-04'
        textAlign='center'
      >
        {children}
      </Box>
    </Box>
  )
}
