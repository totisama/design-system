'use client'

import { Container } from '@/components/container'
import { type ChangeEvent, useState } from 'react'
import {
  HelpText,
  type HelpTextVariant,
} from '@/components/help-text/help-text'
import { TextInput } from '@/components/text-input/text-input'
import { Box } from '@/components/box/box'

const VARIANTS = ['default', 'success', 'error', 'info'] as const

export const HelpTextPlayground = () => {
  const [variant, setVariant] = useState<HelpTextVariant>('default')
  const [text, setText] = useState('This is a help text')

  const handleAsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setVariant(e.target.value as HelpTextVariant)
  }

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
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
          marginB='spacing-04'
          width={'50%'}
          display='flex'
          flexDirection='column'
          gap='spacing-03'
        >
          <label htmlFor='variant'>Variant:</label>
          <select
            id='variant'
            name='variant'
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
          marginB='spacing-04'
          width={'50%'}
        >
          <TextInput
            id='text'
            value={text}
            placeholder='Input text'
            label={'Text:'}
            onChange={handleTextChange}
          />
        </Box>
      </Box>
      <Container
        justifyContent='center'
        alignItems='center'
      >
        <HelpText
          variant={variant}
          text={text}
        />
      </Container>
    </>
  )
}
