import type React from 'react'
import { Text } from '@/components/text'

export const PageWrapper = ({
  name,
  children,
}: {
  name: string
  children: React.ReactNode
}) => {
  return (
    <>
      <div className='flex flex-col justify-end px-24 pb-5 h-[300px] bg-[#1076DD] text-white'>
        <Text as='h1'>{name}</Text>
      </div>
      <main className='px-24 py-10 max-w-5xl'>{children}</main>
    </>
  )
}
