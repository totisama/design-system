import type React from 'react'

export const ComponentWrapper = ({
  name,
  children,
}: {
  name: string
  children: React.ReactNode
}) => {
  return (
    <>
      <div className='flex items-end p-3 h-[300px] bg-blue-300'>
        <h1 className='text-4xl font-semibold'>{name}</h1>
      </div>
      <main>{children}</main>
    </>
  )
}
