'use client'

import { Heading, type HeadingTags } from '@/components/heading/heading'
import { Container } from '@/components/container'
import { type ChangeEvent, useState } from 'react'
import { TextInput } from '@/components/text-input/text-input'
import { Box } from '@/components/box/box'

const HEADING_OPTIONS = ['h1', 'h2', 'h3', 'h4', 'h5', 'body', 'subtitle']

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
      <Box
        as='section'
        width={'100%'}
        display='flex'
        gap='spacing-06'
      >
        <Box
          as='div'
          marginY='spacing-04'
          width={'50%'}
          display='flex'
          flexDirection='column'
          gap='spacing-03'
        >
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
        </Box>
        <Box
          as='div'
          marginY='spacing-04'
          width={'50%'}
        >
          <TextInput
            id='text'
            value={text}
            placeholder='Input text'
            label={'Text (30max):'}
            onChange={handleTextChange}
          />
        </Box>
      </Box>
      <Container
        justifyContent='center'
        alignItems='center'
      >
        <Heading as={as}>{text}</Heading>
      </Container>
    </>
  )
}
