'use client'

import { Container } from '@/components/container'
import { useState } from 'react'
import { Paragraph } from '@/components/paragraph/paragraph'
import { TextInput } from '@/components/text-input/text-input'
import { Box } from '@/components/box/box'

export const ParagraphPlayground = () => {
  const [text, setText] = useState('This is a paragraph')

  return (
    <>
      <Box
        as='section'
        width={'100%'}
        gap='spacing-06'
      >
        <Box
          as='div'
          marginY='spacing-04'
          width={'50%'}
        >
          <TextInput
            id='text'
            value={text}
            placeholder='Input text'
            label={'Text:'}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
        </Box>
      </Box>
      <Container
        justifyContent='center'
        alignItems='center'
      >
        <Paragraph text={text} />
      </Container>
    </>
  )
}
