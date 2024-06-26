import type React from 'react'
import {
  type BorderColors,
  type BackgroundColors,
  type ContainerTags,
  type Padding,
  type Margin,
  type Display,
  type FlexDirection,
  type JustifyContent,
  type AlignItems,
  type Gap,
  type BorderRadius,
  type Position,
  type Width,
  type Height,
  type MinWidth,
  type MaxWidth,
  type MinHeight,
  type MaxHeight,
} from '@/components/box/box-tokens'

interface BaseBoxProps {
  as: ContainerTags
  children: React.ReactNode
  backgroundColor?: BackgroundColors
  borderColor?: BorderColors
  padding?: Padding
  paddingX?: Padding
  paddingY?: Padding
  margin?: Margin
  marginX?: Margin
  marginY?: Margin
  display?: Display
  flexDirection?: FlexDirection
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  gap?: Gap
  borderRadius?: BorderRadius
  position?: Position
  top?: number
  right?: number
  bottom?: number
  left?: number
  width?: Width
  minwidth?: MinWidth
  maxwidth?: MaxWidth
  height?: Height
  minheight?: MinHeight
  maxheight?: MaxHeight
  // className?: string
}

export const Box = ({
  as,
  children,
  backgroundColor,
  borderColor,
  padding,
  paddingX,
  paddingY,
  margin,
  marginX,
  marginY,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  borderRadius,
  position,
  top,
  right,
  bottom,
  left,
  width,
  height,
  // className,
  // ...props
}: BaseBoxProps) => {
  const Tag = as ?? 'div'

  const combinedClasses = [
    backgroundColor,
    borderColor,
    padding,
    paddingX,
    paddingY,
    margin,
    marginX,
    marginY,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    gap,
    borderRadius,
    position,
    top,
    right,
    bottom,
    left,
    width,
    height,
    // className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag
      className={combinedClasses}
      // {...props}
    >
      {children}
    </Tag>
  )
}
