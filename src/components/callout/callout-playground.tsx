'use client'

import { Container } from '@/components/container'
import { Callout, type CalloutVariant } from '@/components/callout/callout'
import { type ChangeEvent, useState } from 'react'
import { Box } from '@/components/box/box'
import { TextInput } from '@/components/text-input/text-input'

const VARIANTS = ['primary', 'success', 'warning', 'error']

const DESCRIPTION =
  'Description. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.'

export const CalloutPlayground = () => {
  const [title, setTitle] = useState('Title')
  const [description, setDescription] = useState(DESCRIPTION)
  const [variant, setVariant] = useState<CalloutVariant>('primary')

  const handleAsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setVariant(e.target.value as CalloutVariant)
  }

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
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
          width={'33%'}
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
        <Box
          as='div'
          marginY='spacing-04'
          width={'33%'}
        >
          <TextInput
            id='description'
            value={description}
            placeholder='Input text'
            label={'Description'}
            onChange={handleDescriptionChange}
          />
        </Box>
      </Box>
      <Container
        justifyContent='center'
        alignItems='center'
      >
        <Callout
          title={title}
          description={description}
          variant={variant}
        />
      </Container>
    </>
  )
}
