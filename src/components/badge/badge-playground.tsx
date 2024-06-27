'use client'

import { Container } from '@/components/container'
import { type ChangeEvent, useState } from 'react'
import { Box } from '@/components/box/box'
import { Badge, type BadgeVariant } from '@/components/badge/badge'

const VARIANTS = ['neutral', 'success', 'warning', 'error']

export const BadgePlayground = () => {
  const [variant, setVariant] = useState<BadgeVariant>('neutral')

  const handleAsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setVariant(e.target.value as BadgeVariant)
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
          marginB='spacing-04'
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
            className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
          >
            {VARIANTS.map((option) => (
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
        <Badge variant={variant} />
      </Container>
    </>
  )
}
