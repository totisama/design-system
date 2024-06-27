'use client'

import { Container } from '@/components/container'
import { type ChangeEvent, useState } from 'react'
import { Box } from '@/components/box/box'
import { TextInput } from '@/components/text-input/text-input'
import {
  Button,
  type ButtonSize,
  type ButtonVariant,
  type ButtonAlign,
} from '@/components/button/button'

const VARIANTS = ['primary', 'secondary', 'tertiary', 'invisible']
const SIZES = ['small', 'medium', 'large']
const ALIGNS = ['start', 'center', 'end']

export const ButtonPlayground = () => {
  const [text, setText] = useState('Button')
  const [variant, setVariant] = useState<ButtonVariant>('primary')
  const [size, setSize] = useState<ButtonSize>('small')
  const [align, setAlign] = useState<ButtonAlign>('start')

  const handleAsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setVariant(e.target.value as ButtonVariant)
  }

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value as ButtonSize)
  }

  const handleAlignChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAlign(e.target.value as ButtonAlign)
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
          width={'25%'}
          display='flex'
          flexDirection='column'
          gap='spacing-03'
        >
          <label htmlFor='variant'>Variant</label>
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
          width={'25%'}
          display='flex'
          flexDirection='column'
          gap='spacing-03'
        >
          <label htmlFor='size'>Size</label>
          <select
            id='size'
            name='size'
            onChange={handleSizeChange}
            className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          >
            {SIZES.map((option) => (
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
          width={'25%'}
          display='flex'
          flexDirection='column'
          gap='spacing-03'
        >
          <label htmlFor='align'>Align</label>
          <select
            id='align'
            name='align'
            onChange={handleAlignChange}
            className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          >
            {ALIGNS.map((option) => (
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
          width={'25%'}
        >
          <TextInput
            id='text'
            value={text}
            placeholder='Text'
            label={'Text'}
            onChange={handleTextChange}
          />
        </Box>
      </Box>
      <Container
        justifyContent='center'
        alignItems='center'
      >
        <Button
          size={size}
          buttonAlign={align}
          variant={variant}
        >
          {text}
        </Button>
      </Container>
    </>
  )
}
