'use client'

import { Box } from '@/components/box/box'
import React from 'react'
import { type Spacing, type ContainerTags } from '@/components/box/box-tokens'

export type Orientation = 'horizontal' | 'vertical'

export interface StackProps {
  as: ContainerTags
  children: React.ReactNode
  orientation: Orientation
  spacing: Spacing
}

export const Stack = ({ as, children, orientation, spacing }: StackProps) => {
  const isHorizontal = orientation === 'horizontal'
  const display = isHorizontal ? 'flex' : 'block'
  let marginR: Spacing | undefined
  let marginB: Spacing | undefined

  if (isHorizontal) {
    marginR = spacing
  }

  if (!isHorizontal) {
    marginB = spacing
  }
  const childrenArray = React.Children.toArray(children)

  return (
    <Box
      as={as}
      display={display}
      alignItems='center'
      flexWrap='wrap'
      gapX={marginR}
    >
      {childrenArray.map((child, index) => (
        <Box
          as='div'
          key={index}
          marginB={index + 1 === childrenArray.length ? undefined : marginB}
        >
          {child}
        </Box>
      ))}
    </Box>
  )
}
