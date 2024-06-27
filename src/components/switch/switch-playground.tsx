'use client'

import { Container } from '@/components/container'
import { type ChangeEvent, useState } from 'react'
import { TextInput } from '@/components/text-input/text-input'
import { Switch } from '@/components/switch/switch'
import { Box } from '@/components/box/box'
import { Flex } from '@/components/flex/flex'

export const SwitchPlayground = () => {
  const [label, setLabel] = useState('This is a label')

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value)
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
          width={'50%'}
          marginY='spacing-03'
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
            <Switch label={label} />
          </Flex>
        </Flex>
      </Container>
    </>
  )
}
