'use client'

import { Container } from '@/components/container'
import { type ChangeEvent, useState } from 'react'
import { Box } from '@/components/box/box'
import {
  type AlignItems,
  type JustifyContent,
  type FlexDirection,
} from '@/components/box/box-tokens'
import { Flex } from '@/components/flex/flex'

const DIRECTION_OPTIONS = ['row', 'column']
const ALIGN_ITEMS_OPTIONS = ['start', 'end', 'center', 'baseline', 'stretch']
const JUSTIFY_CONTENT_OPTIONS = [
  'start',
  'end',
  'center',
  'between',
  'around',
  'evenly',
]

export const FlexPlayground = () => {
  const [direction, setOrientation] = useState<FlexDirection>('row')
  const [alignItems, setAlignItems] = useState<AlignItems>('start')
  const [justifyContent, setJustifyContent] = useState<JustifyContent>('start')
  const [shouldGrowItems, setShouldGrowItems] = useState({
    one: false,
    two: false,
    three: false,
  })

  const changeGrowItem = (item: string) => {
    setShouldGrowItems((prev) => ({
      ...prev,
      [item]: !prev[item as keyof typeof prev],
    }))
  }

  const handleOrientationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrientation(e.target.value as FlexDirection)
  }
  const handleAlignItemsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAlignItems(e.target.value as AlignItems)
  }
  const handleJustifyContentChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setJustifyContent(e.target.value as JustifyContent)
  }

  return (
    <>
      <Box
        as='section'
        width={'100%'}
        display='flex'
        gap='spacing-06'
      >
        <Box
          as='div'
          marginY='spacing-04'
          width={'50%'}
          display='flex'
          flexDirection='column'
          gap='spacing-03'
        >
          <label htmlFor='type'>Type:</label>
          <select
            id='type'
            name='type'
            onChange={handleOrientationChange}
            className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          >
            {DIRECTION_OPTIONS.map((option) => (
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
          <label htmlFor='type'>Justify content</label>
          <select
            id='type'
            name='type'
            onChange={handleJustifyContentChange}
            className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          >
            {JUSTIFY_CONTENT_OPTIONS.map((option) => (
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
          <label htmlFor='type'>Align items</label>
          <select
            id='type'
            name='type'
            onChange={handleAlignItemsChange}
            className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          >
            {ALIGN_ITEMS_OPTIONS.map((option) => (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
        </Box>
      </Box>
      <Container>
        <Flex
          width={'100%'}
          direction={direction}
          alignItems={alignItems}
          justifyContent={justifyContent}
        >
          <Flex grow={shouldGrowItems.one}>
            <Box
              as='div'
              onClick={() => {
                changeGrowItem('one')
              }}
              backgroundColor='tag-background-red'
              padding='spacing-04'
              height={'100%'}
              width={'100%'}
            >
              Area 1
            </Box>
          </Flex>
          <Flex grow={shouldGrowItems.two}>
            <Box
              as='div'
              onClick={() => {
                changeGrowItem('two')
              }}
              backgroundColor='tag-background-yellow'
              padding='spacing-04'
              height={'100%'}
              width={'100%'}
            >
              Area 2
            </Box>
          </Flex>
          <Flex grow={shouldGrowItems.three}>
            <Box
              as='div'
              onClick={() => {
                changeGrowItem('three')
              }}
              backgroundColor='tag-background-green'
              padding='spacing-04'
              height={'100%'}
              width={'100%'}
            >
              Area 3
            </Box>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}
