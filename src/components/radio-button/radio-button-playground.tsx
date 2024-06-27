'use client'

import { Container } from '@/components/container'
import type React from 'react'
import { type ChangeEvent, useState } from 'react'
import { TextInput } from '@/components/text-input/text-input'
import { Box } from '@/components/box/box'
import { Flex } from '@/components/flex/flex'
import {
  RadioButton,
  type States,
} from '@/components/radio-button/radio-button'

const RADIO_BUTTON_STATES = ['', 'disabled', 'error']

export const RadioButtonPlayground = () => {
  const [label, setLabel] = useState('Button label')
  const [isChecked, setIsChecked] = useState(false)
  const [state, setState] = useState<States | ''>('')

  const handleRadioChange = () => {
    setIsChecked(!isChecked)
  }

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value)
  }

  const handleAsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value as States)
  }

  return (
    <>
      <Box
        as='section'
        display='flex'
        gap='spacing-06'
        width={'100%'}
      >
        <Box
          as='div'
          marginY='spacing-04'
          width={'50%'}
          display='flex'
          flexDirection='column'
          gap='spacing-03'
        >
          <label htmlFor='type'>States:</label>
          <select
            id='type'
            name='type'
            onChange={handleAsChange}
            className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          >
            {RADIO_BUTTON_STATES.map((option) => (
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
          width={'50%'}
          marginY='spacing-04'
        >
          <TextInput
            id='label'
            value={label}
            placeholder='Label'
            label={'Label:'}
            onChange={handleTextChange}
          />
        </Box>
      </Box>
      <Container
        justifyContent='center'
        alignItems='center'
      >
        <Flex
          width='100%'
          direction='row'
          alignItems='center'
          justifyContent='center'
        >
          <Flex width='45%'>
            <span />
          </Flex>
          <Flex width='55%'>
            <RadioButton
              key={state}
              label={label}
              name='radio1'
              checked={isChecked}
              onClick={handleRadioChange}
              disabled={state === 'disabled'}
              error={state === 'error'}
            />
          </Flex>
        </Flex>
      </Container>
    </>
  )
}
