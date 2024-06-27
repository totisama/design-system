'use client'

import { Container } from '@/components/container'
import { type ChangeEvent, useState } from 'react'
import { TextInput } from '@/components/text-input/text-input'
import { Card } from '@/components/card/card'
import { Box } from '@/components/box/box'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
import { type Width, type BackgroundColors } from '@/components/box/box-tokens'
import { Paragraph } from '../paragraph/paragraph'

const TEXT =
  'Most moments in our lives pass unnoticed, without remark or consciousness. Then, there are those that mean something, or that we choose to mean something, that become a placeholder for our lives, to add meaning, understanding, passage a demarcation that bestows significance.'

const COLORS = [
  'background',
  'background-hover',
  'tag-background-yellow',
  'tag-background-red',
  'tag-background-green',
]

export const CardPlayground = () => {
  const [background, setBackground] = useState<BackgroundColors>('background')
  const [width, setWidth] = useState<Width | undefined>('50%')

  const handleWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value === '') {
      setWidth(undefined)
      return
    }

    if (!/^\d+(\.\d+)?%?$/.test(value)) {
      return
    }

    setWidth(value as Width)
  }

  const handleBackgroundChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setBackground(e.target.value as BackgroundColors)
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
          marginB='spacing-04'
          width={'50%'}
          display='flex'
          flexDirection='column'
          gap='spacing-03'
        >
          <label htmlFor='background'>Background:</label>
          <select
            id='background'
            name='background'
            defaultValue={background}
            onChange={(e) => {
              handleBackgroundChange(e)
            }}
            className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          >
            {COLORS.map((option) => (
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
            id='width'
            value={width}
            placeholder='Width'
            label={'Width:'}
            onChange={handleWidthChange}
          />
        </Box>
      </Box>
      <Container
        justifyContent='center'
        alignItems='center'
      >
        <Card
          backgroundColor={background}
          width={width}
        >
          <Stack
            as='article'
            spacing='spacing-06'
            orientation='vertical'
          >
            <Text as='h3'>Card title</Text>
            <Paragraph
              text={TEXT}
              color='text-secondary'
            />
          </Stack>
        </Card>
      </Container>
    </>
  )
}
