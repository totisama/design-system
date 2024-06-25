'use client'

import { Container } from '@/components/container'
import { type ChangeEvent, useState } from 'react'
import { TextInput, type TextInputVariants } from './text-input'

const VARIANTS = ['default', 'disabled', 'error'] as const

export const TextInputPlayground = () => {
  const [variant, setVariant] = useState<TextInputVariants>('default')
  const [label, setLabel] = useState('Label')
  const [helpText, setHelpText] = useState('')

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
        <div className='flex flex-col my-3 w-1/3'>
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
        </div>
        <div className='flex flex-col my-3 w-1/3'>
          <label htmlFor='label'>Label:</label>
          <input
            id='label'
            name='label'
            onChange={handleLabelChange}
            value={label}
            placeholder='Label'
            className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          />
        </div>
        <div className='flex flex-col my-3 w-1/3'>
          <label htmlFor='helpText'>Help text:</label>
          <input
            id='helpText'
            name='helpText'
            onChange={handleHelpTextChange}
            value={helpText}
            placeholder='Help text'
            className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          />
        </div>
      </section>
      <Container>
        <TextInput
          placeholder='Input text'
          label={label}
          variant={variant}
          helpText={helpText}
        />
      </Container>
    </>
  )
}
