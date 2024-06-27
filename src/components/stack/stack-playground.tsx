'use client'

import { Container } from '@/components/container'
import { type ChangeEvent, useState } from 'react'
import { TextInput } from '@/components/text-input/text-input'
import { type Orientation, Stack } from '@/components/stack/stack'
import { Box } from '@/components/box/box'

const STACK_OPTIONS = ['horizontal', 'vertical']

export const StackPlayground = () => {
  const [orientation, setOrientation] = useState<Orientation>('horizontal')
  const [items, setText] = useState('3')

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (parseInt(value) > 20) {
      return
    }

    setText(e.target.value)
  }

  const handleOrientationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrientation(e.target.value as Orientation)
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
            onChange={handleOrientationChange}
            className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          >
            {STACK_OPTIONS.map((option) => (
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
            id='items'
            type='number'
            value={items}
            placeholder='Items'
            label={'Items (20Max):'}
            onChange={handleTextChange}
          />
        </Box>
      </Box>
      <Container>
        <Stack
          as={'div'}
          spacing='spacing-05'
          orientation={orientation}
        >
          {Array.from({ length: parseInt(items, 10) }).map((_, index) => (
            <Box
              as='div'
              key={index}
              backgroundColor='tag-background-green'
              padding='spacing-03'
            >
              Item {index + 1}
            </Box>
          ))}
        </Stack>
      </Container>
    </>
  )
}
