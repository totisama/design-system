import type React from 'react'
import { Heading } from '@/components/heading'

export const PageWrapper = ({
  name,
  children,
}: {
  name: string
  children: React.ReactNode
}) => {
  return (
    <>
      <div className='flex flex-col justify-end px-24 pb-5 h-[300px] bg-button-primary text-white'>
        <Heading as='h1'>{name}</Heading>
      </div>
      <main className='px-24 py-10 max-w-5xl'>{children}</main>
    </>
  )
}
