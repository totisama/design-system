'use client'

import { type ChangeEvent, useState } from 'react'
import { Container } from '@/components/container'
import {
  TextArea,
  type TextAreaVariants,
} from '@/components/text-area/text-area'
import { TextInput } from '@/components/text-input/text-input'

const VARIANTS = ['default', 'error'] as const

export const TextAreaPlayground = () => {
  const [label, setLabel] = useState('Label')
  const [text, setText] = useState('')
  const [placeholder, setPlaceholder] = useState('')
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
      <section className='flex gap-5 w-full'>
        <div className='flex flex-col my-3 w-1/4 gap-1.5'>
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
        </div>
        <div className='my-3 w-1/4'>
          <TextInput
            id='label'
            value={label}
            placeholder='Input text'
            label={'Label:'}
            onChange={handleLabelChange}
          />
        </div>
        <div className='my-3 w-1/4'>
          <TextInput
            id='placeholder'
            value={placeholder}
            placeholder='Placeholder text'
            label={'Placeholder:'}
            onChange={handlePlaceholderChange}
          />
        </div>
        <div className='my-3 w-1/4'>
          <TextInput
            id='maxCharacters'
            type='number'
            value={maxCharacters ?? ''}
            placeholder='Max characters'
            label={'Max characters:'}
            onChange={handleMaxCharactersChange}
          />
        </div>
      </section>
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
