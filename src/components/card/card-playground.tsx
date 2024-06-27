'use client'

import { Container } from '@/components/container'
import { type ChangeEvent, useState } from 'react'
import { TextInput } from '@/components/text-input/text-input'
import { Card } from '@/components/card/card'
import { Box } from '@/components/box/box'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'

export const CardPlayground = () => {
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
      <Container
        justifyContent='center'
        alignItems='center'
      >
        <Card
          paddingX='spacing-06'
          paddingY='spacing-06'
          width={'50%'}
          height={'80%'}
        >
          <Stack
            as='article'
            spacing='spacing-03'
            orientation='vertical'
          >
            <Text
              as='h2'
              size='lg'
            >
              Card title
            </Text>
            <TextInput
              id='name'
              placeholder='Enter your name'
              label={'Name:'}
            />
            <TextInput
              id='surname'
              placeholder='Enter you surname'
              label={'Surname:'}
            />
          </Stack>
        </Card>
      </Container>
    </>
  )
}
