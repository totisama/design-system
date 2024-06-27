'use client'

import { Container } from '@/components/container'
import { type ChangeEvent, useState } from 'react'
import { TextInput } from '@/components/text-input/text-input'
import { Card } from '@/components/card/card'
import { Box } from '@/components/box/box'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
import {
  type Height,
  type Width,
  type Spacing,
} from '@/components/box/box-tokens'

const SPACING = [
  'spacing-01',
  'spacing-02',
  'spacing-03',
  'spacing-04',
  'spacing-05',
  'spacing-06',
  'spacing-07',
  'spacing-08',
  'spacing-09',
  'spacing-10',
  'spacing-11',
  'spacing-12',
  'spacing-13',
]

export const CardPlayground = () => {
  const [paddingY, setPaddingY] = useState<Spacing>('spacing-05')
  const [paddingX, setPaddinX] = useState<Spacing>('spacing-05')
  const [width, setWidth] = useState<Width | undefined>('50%')
  const [height, setHeight] = useState<Height | undefined>('80%')

  const handleAsChange = (
    e: ChangeEvent<HTMLSelectElement>,
    setValue: (value: Spacing) => void
  ) => {
    setValue(e.target.value as Spacing)
  }

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

  const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value === '') {
      setHeight(undefined)
      return
    }

    if (!/^\d+(\.\d+)?%?$/.test(value)) {
      return
    }

    setHeight(value as Height)
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
          width={'25%'}
          display='flex'
          flexDirection='column'
          gap='spacing-03'
        >
          <label htmlFor='paddingY'>PaddingY:</label>
          <select
            id='paddingY'
            name='paddingY'
            defaultValue={paddingY}
            onChange={(e) => {
              handleAsChange(e, setPaddingY)
            }}
            className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          >
            {SPACING.map((option) => (
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
          display='flex'
          flexDirection='column'
          gap='spacing-03'
        >
          <label htmlFor='paddingX'>PaddingX:</label>
          <select
            id='paddingX'
            name='paddingX'
            defaultValue={paddingX}
            onChange={(e) => {
              handleAsChange(e, setPaddinX)
            }}
            className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          >
            {SPACING.map((option) => (
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
            id='width'
            value={width}
            placeholder='Width'
            label={'Width:'}
            onChange={handleWidthChange}
          />
        </Box>
        <Box
          as='div'
          marginY='spacing-04'
          width={'25%'}
        >
          <TextInput
            id='height'
            value={height}
            placeholder='height'
            label={'Height:'}
            onChange={handleHeightChange}
          />
        </Box>
      </Box>
      <Container
        justifyContent='center'
        alignItems='center'
      >
        <Card
          paddingX={paddingX}
          paddingY={paddingY}
          width={width}
          height={height}
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
