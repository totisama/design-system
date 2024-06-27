'use client'

import { Container } from '@/components/container'
import { type ChangeEvent, useState } from 'react'
import { Box } from '@/components/box/box'
import { TextInput } from '@/components/text-input/text-input'
import { Badge, type BadgeVariant } from '@/components/badge/badge'

const VARIANTS = ['neutral', 'success', 'warning', 'error']

export const BadgePlayground = () => {
  const [title, setTitle] = useState('Title')
  const [variant, setVariant] = useState<BadgeVariant>('neutral')

  const handleAsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setVariant(e.target.value as BadgeVariant)
  }

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
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
            {VARIANTS.map((option) => (
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
          width={'33%'}
        >
          <TextInput
            id='text'
            value={title}
            placeholder='Title'
            label={'Title'}
            onChange={handleTitleChange}
          />
        </Box>
      </Box>
      <Container
        justifyContent='center'
        alignItems='center'
      >
        <Badge
          text={title}
          variant={variant}
        />
      </Container>
    </>
  )
}
