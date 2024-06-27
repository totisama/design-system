import type React from 'react'
import { Box } from './box/box'

export const PageWrapper = ({
  name,
  children,
}: {
  name: string
  children: React.ReactNode
}) => {
  return (
    <>
      <Box
        as='div'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        paddingX='spacing-12'
        paddingB='spacing-06'
        height={300}
        backgroundColor='primary'
      >
        <h1 className='text-[100px] leading-[70px] tracking-[-5px] text-white'>
          {name}
        </h1>
      </Box>
      <main className='px-24 py-10 max-w-5xl'>{children}</main>
    </>
  )
}
