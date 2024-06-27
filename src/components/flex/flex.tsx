'use client'

import { Box } from '@/components/box/box'
import type React from 'react'
import {
  type FlexDirection,
  type ContainerTags,
  type Gap,
  type Width,
  type Height,
  type AlignItems,
  type JustifyContent,
  type BackgroundColors,
} from '@/components/box/box-tokens'

export interface StackProps {
  as?: ContainerTags
  children: React.ReactNode
  direction?: FlexDirection
  alignItems?: AlignItems
  justifyContent?: JustifyContent
  gapX?: Gap
  gapY?: Gap
  width?: Width
  height?: Height
  grow?: boolean
  wrap?: boolean
  backgroundColor?: BackgroundColors
}

export const Flex = ({
  as = 'div',
  children,
  direction = 'row',
  alignItems = 'start',
  justifyContent = 'start',
  gapX,
  gapY,
  width,
  height,
  grow,
  wrap = false,
  backgroundColor,
}: StackProps) => {
  const flexWrap = wrap ? 'wrap' : 'nowrap'

  return (
    <Box
      as={as}
      display={'flex'}
      backgroundColor={backgroundColor}
      flexDirection={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexWrap={flexWrap}
      grow={grow}
      gapX={gapX}
      gapY={gapY}
      width={width}
      height={height}
    >
      {children}
    </Box>
  )
}
