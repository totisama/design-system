import type React from 'react'

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='h-80 w-full'>
      <div className='w-full bg-[#F0F3F4] px-5 h-full flex text-center items-center justify-center rounded-2xl'>
        {children}
      </div>
    </section>
  )
}
