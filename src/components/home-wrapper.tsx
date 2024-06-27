import type React from 'react'

export const HomeWrapper = ({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) => {
  return (
    <>
      <div className='flex flex-col justify-end gap-10 px-24 min-h-[600px] pb-20 bg-button-primary'>
        <h1 className='text-[40px] leading-[70px] text-white'>{title}</h1>
        <h2 className='text-[200px] leading-[70px] tracking-[-5px] text-white'>
          {subtitle}
        </h2>
      </div>
      <main className='px-24 pb-10 pt-[20px] max-w-6xl'>{children}</main>
    </>
  )
}
