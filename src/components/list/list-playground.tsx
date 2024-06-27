'use client'

import { Container } from '@/components/container'
import { List, type ListType } from '@/components/list/list'
import { type ChangeEvent, useState } from 'react'
import { Box } from '../box/box'

const ITEMS = [
  { text: 'Item 1' },
  { text: 'Item 2', children: ['Child 1', 'Child 2', 'Child 3'] },
  { text: 'Item 3' },
]

const TYPE = ['ordered', 'unordered']

export const ListPlayground = () => {
  const [type, setType] = useState<ListType>('unordered')

  const handleAsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as ListType)
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
            onChange={handleAsChange}
            defaultValue={type}
            className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          >
            {TYPE.map((option) => (
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
      <Container
        justifyContent='center'
        alignItems='center'
      >
        <List
          items={ITEMS}
          type={type}
        />
      </Container>
    </>
  )
}
