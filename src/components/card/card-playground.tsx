'use client'

import { Container } from '@/components/container'
import { type ChangeEvent, useState } from 'react'
import { TextInput } from '@/components/text-input/text-input'
import { Card } from '@/components/card/card'
import { Box } from '../box/box'

export const HeadingPlayground = () => {
  const [text, setText] = useState('This is a heading')

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length >= 30) {
      return
    }

    setText(e.target.value)
  }

  return (
    <>
      <Box
        as='section'
        display='flex'
        gap='spacing-05'
        width={'100%'}
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
            onChange={handleTextChange}
          />
        </Box>
      </Box>
      <Container>
        <Card>{text}</Card>
      </Container>
    </>
  )
}
