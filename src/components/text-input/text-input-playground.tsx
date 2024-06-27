'use client'

import { Container } from '@/components/container'
import { type ChangeEvent, useState } from 'react'
import { TextInput, type TextInputVariants } from './text-input'

const VARIANTS = ['default', 'disabled', 'error'] as const

export const TextInputPlayground = () => {
  const [variant, setVariant] = useState<TextInputVariants>('default')
  const [label, setLabel] = useState('Label')
  const [helpText, setHelpText] = useState('')
  const [text, setText] = useState('Input text')

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleAsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setVariant(e.target.value as TextInputVariants)
  }

  const handleLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value)
  }

  const handleHelpTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHelpText(e.target.value)
  }

  return (
    <>
      <section className='flex gap-5 w-full'>
        <div className='flex flex-col my-3 w-1/3 gap-1.5'>
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
        <div className='my-3 w-1/3'>
          <TextInput
            id='label'
            value={label}
            placeholder='Input text'
            label={'Label:'}
            onChange={handleLabelChange}
          />
        </div>
        <div className='my-3 w-1/3'>
          <TextInput
            id='helpText'
            value={helpText}
            placeholder='Input text'
            label={'Help text:'}
            onChange={handleHelpTextChange}
          />
        </div>
      </section>
      <Container
        justifyContent='center'
        alignItems='center'
      >
        <div>
          <TextInput
            value={text}
            placeholder='Input text'
            label={label}
            variant={variant}
            helpText={helpText}
            onChange={handleTextChange}
          />
        </div>
      </Container>
    </>
  )
}
