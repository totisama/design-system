'use client'

import { type ChangeEvent, useState } from 'react'
import { Container } from '@/components/container'
import {
  TextArea,
  type TextAreaVariants,
} from '@/components/text-area/text-area'
import { TextInput } from '@/components/text-input/text-input'
import { Box } from '@/components/box/box'

const VARIANTS = ['default', 'focus', 'error'] as const

export const TextAreaPlayground = () => {
  const [label, setLabel] = useState('Label')
  const [text, setText] = useState('')
  const [placeholder, setPlaceholder] = useState('Placeholder')
  const [maxCharacters, setMaxCharacters] = useState<undefined | number>(
    undefined
  )
  const [variant, setVariant] = useState<TextAreaVariants>('default')

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value)
  }

  const handlePlaceholderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlaceholder(e.target.value)
  }

  const handleMaxCharactersChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxCharacters(Number(e.target.value))
  }

  const handleAsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setVariant(e.target.value as TextAreaVariants)
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
          width={'25%'}
          display='flex'
          flexDirection='column'
          gap='spacing-03'
        >
          <label
            className='text-text-secondary'
            htmlFor='variant'
          >
            Variant:
          </label>
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
          marginY='spacing-04'
          width={'25%'}
        >
          <TextInput
            id='label'
            value={label}
            placeholder='Input text'
            label={'Label:'}
            onChange={handleLabelChange}
          />
        </Box>
        <Box
          as='div'
          marginY='spacing-04'
          width={'25%'}
        >
          <TextInput
            id='placeholder'
            value={placeholder}
            placeholder='Placeholder text'
            label={'Placeholder:'}
            onChange={handlePlaceholderChange}
          />
        </Box>
        <Box
          as='div'
          marginY='spacing-04'
          width={'25%'}
        >
          <TextInput
            id='maxCharacters'
            type='number'
            value={maxCharacters ?? ''}
            placeholder='Max characters'
            label={'Max characters:'}
            onChange={handleMaxCharactersChange}
          />
        </Box>
      </Box>
      <Container
        justifyContent='center'
        alignItems='center'
      >
        <div>
          <TextArea
            id='text-area'
            label={label}
            value={text}
            variant={variant}
            maxCharacters={maxCharacters}
            placeholder={placeholder}
            onChange={handleTextChange}
          />
        </div>
      </Container>
    </>
  )
}
