'use client'

import { Container } from '@/components/container'
import { useState } from 'react'
import { Paragraph } from '@/components/paragraph/paragraph'
import { TextInput } from '@/components/text-input/text-input'

export const ParagraphPlayground = () => {
  const [text, setText] = useState('This is a paragraph')

  return (
    <>
      <section className='flex gap-5 w-full'>
        <div className='my-3 w-1/2'>
          <TextInput
            id='text'
            value={text}
            placeholder='Input text'
            label={'Text:'}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
        </div>
      </section>
      <Container
        justifyContent='center'
        alignItems='center'
      >
        <Paragraph text={text} />
      </Container>
    </>
  )
}
