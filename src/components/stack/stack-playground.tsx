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

    if (parseInt(value) >= 20) {
      return
    }

    setText(e.target.value)
  }

  const handleOrientationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrientation(e.target.value as Orientation)
  }

  return (
    <>
      <section className='flex gap-5 w-full'>
        <div className='flex flex-col my-3 w-1/2 gap-1.5'>
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
        </div>
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
            label={'Items:'}
            onChange={handleTextChange}
          />
        </Box>
      </section>
      <Container>
        <Stack
          spacing='spacing-05'
          as={'div'}
          orientation={orientation}
        >
          {Array.from({ length: parseInt(items, 10) }).map((_, index) => (
            <Box
              as='div'
              key={index}
              backgroundColor='tag-background-green'
              padding='spacing-02'
            >
              Item {index + 1}
            </Box>
          ))}
        </Stack>
      </Container>
    </>
  )
}
