'use client'

import { Heading, type HeadingTags } from '@/components/heading/heading'
import { Container } from '@/components/container'
import { type ChangeEvent, useState } from 'react'

const HEADING_OPTIONS = ['h1', 'h2', 'h3', 'h4', 'h5']

export const HeadingPlayground = () => {
  const [as, setAs] = useState<HeadingTags>('h1')
  const [text, setText] = useState('This is a heading')

  const handleAsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAs(e.target.value as HeadingTags)
  }

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length >= 30) {
      return
    }

    setText(e.target.value)
  }

  return (
    <>
      <section className='flex gap-5 w-full'>
        <div className='flex flex-col my-3 w-1/2'>
          <label htmlFor='type'>Type:</label>
          <select
            id='type'
            name='type'
            onChange={handleAsChange}
            className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          >
            {HEADING_OPTIONS.map((option) => (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col my-3 w-1/2'>
          <label htmlFor='type'>Text:</label>
          <input
            id='text'
            name='text'
            onChange={handleTextChange}
            value={text}
            className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          />
        </div>
      </section>
      <Container>
        <Heading as={as}>{text}</Heading>
      </Container>
    </>
  )
}
