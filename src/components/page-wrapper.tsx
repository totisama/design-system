import type React from 'react'

export const PageWrapper = ({
  name,
  children,
}: {
  name: string
  children: React.ReactNode
}) => {
  return (
    <>
      <div className='flex flex-col justify-center px-24 pb-5 h-[300px] bg-button-primary'>
        <h1 className='text-[100px] leading-[70px] tracking-[-5px] text-white'>
          {name}
        </h1>
      </div>
      <main className='px-24 pb-10 pt-[48px] max-w-5xl'>{children}</main>
    </>
  )
}
