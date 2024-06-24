import type React from 'react'

export const Playground = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='h-96 w-full'>
      <div className='w-full bg-[#F0F3F4] h-4/5 flex items-center justify-center rounded-2xl'>
        {children}
      </div>
    </section>
  )
}
