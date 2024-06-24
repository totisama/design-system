'use client'

import { Container } from '@/components/container'
import { useState } from 'react'
import { Paragraph } from '@/components/paragraph/paragraph'

export const ParagraphPlayground = () => {
  const [text, setText] = useState('This is a paragraph')

  return (
    <>
      <section className='flex gap-5 w-full'>
        <div className='flex flex-col my-3 w-1/2'>
          <label htmlFor='type'>Text:</label>
          <input
            id='text'
            name='text'
            onChange={(e) => {
              setText(e.target.value)
            }}
            value={text}
            className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          />
        </div>
      </section>
      <Container>
        <Paragraph>{text}</Paragraph>
      </Container>
    </>
  )
}
