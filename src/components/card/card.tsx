import type React from 'react'
import { Box } from '@/components/box/box'
import {
  type Padding,
  type BorderColors,
  type BorderRadius,
  type BorderSizes,
  type Margin,
  type BackgroundColors,
  type Width,
  type Height,
} from '@/components/box/box-tokens'

export interface CardProps {
  children: React.ReactNode
  backgroundColor?: BackgroundColors
  borderColor?: BorderColors
  borderRadius?: BorderRadius
  borderSize?: BorderSizes
  paddingX: Padding
  paddingY: Margin
  width?: Width
  height?: Height
}

export const Card = ({
  children,
  backgroundColor = 'background',
  borderColor = 'border-subtle-01',
  borderRadius = 'border-radius-05',
  borderSize = 'border-2',
  paddingX,
  paddingY,
  width,
  height,
}: CardProps) => {
  return (
    <Box
      as='div'
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      borderSize={borderSize}
      paddingX={paddingX}
      paddingY={paddingY}
      width={width}
      height={height}
    >
      {children}
    </Box>
  )
}
