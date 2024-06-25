'use client'

import { Container } from '@/components/container'
import { type ChangeEvent, useState } from 'react'
import {
  HelpText,
  type HelpTextVariant,
} from '@/components/help-text/help-text'
import { TextInput } from '@/components/text-input/text-input'

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
      <section className='flex gap-5 w-full'>
        <div className='flex flex-col my-3 w-1/2 gap-1.5'>
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
        <div className='my-3 w-1/2'>
          <TextInput
            id='text'
            value={text}
            placeholder='Input text'
            label={'Text:'}
            onChange={handleTextChange}
          />
        </div>
      </section>
      <Container>
        <HelpText
          variant={variant}
          text={text}
        />
      </Container>
    </>
  )
}
