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
  type NumberPercentage,
  type BorderSizes,
  type TextAlign,
  type FlexWrap,
} from '@/components/box/box-tokens'
import {
  alignItemsStyles,
  backgroundStyles,
  borderColorsStyles,
  borderRadiusStyles,
  borderSizeStyles,
  textAlignStyles,
  displayStyles,
  flexDirectionStyles,
  gapStyles,
  gapXStyles,
  gapYStyles,
  justifyContentStyles,
  marginBStyles,
  marginLStyles,
  marginRStyles,
  marginStyles,
  marginTStyles,
  marginXStyles,
  marginYStyles,
  paddingBStyles,
  paddingLStyles,
  paddingRStyles,
  paddingStyles,
  paddingTStyles,
  paddingXStyles,
  paddingYStyles,
  positionStyles,
  flexWrapStyles,
} from '@/components/box/box-styles'

interface BaseBoxProps {
  as: ContainerTags
  children: React.ReactNode
  backgroundColor?: BackgroundColors
  borderSize?: BorderSizes
  borderColor?: BorderColors
  textAlign?: TextAlign
  padding?: Padding
  paddingX?: Padding
  paddingY?: Padding
  paddingT?: Padding
  paddingR?: Padding
  paddingB?: Padding
  paddingL?: Padding
  margin?: Margin
  marginX?: Margin
  marginY?: Margin
  marginT?: Margin
  marginR?: Margin
  marginB?: Margin
  marginL?: Margin
  display?: Display
  flexDirection?: FlexDirection
  flexWrap?: FlexWrap
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  gap?: Gap
  gapX?: Gap
  gapY?: Gap
  borderRadius?: BorderRadius
  position?: Position
  top?: NumberPercentage
  right?: NumberPercentage
  bottom?: NumberPercentage
  left?: NumberPercentage
  width?: Width
  minWidth?: Width
  maxWidth?: Width
  height?: Height
  minHeight?: Height
  maxHeight?: Height
  grow?: boolean
}

const toClassString = (value: string | number | undefined, prefix: string) => {
  if (value === undefined) return ''
  if (typeof value === 'number') return [prefix, `${value}px`]
  return value.toString().includes('%')
    ? [prefix, `${value}`]
    : [prefix, `${value}px`]
}

export const Box = ({
  as: Tag = 'div',
  children,
  backgroundColor,
  borderSize,
  borderColor,
  textAlign,
  padding,
  paddingX,
  paddingY,
  paddingT,
  paddingR,
  paddingB,
  paddingL,
  margin,
  marginX,
  marginY,
  marginT,
  marginR,
  marginB,
  marginL,
  display,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  gap,
  gapX,
  gapY,
  borderRadius,
  position,
  top,
  right,
  bottom,
  left,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  grow = false,
}: BaseBoxProps) => {
  const combinedClasses = [
    backgroundColor && backgroundStyles[backgroundColor],
    borderSize && borderSizeStyles[borderSize],
    borderColor && borderColorsStyles[borderColor],
    textAlign && textAlignStyles[textAlign],
    padding && paddingStyles[padding],
    paddingX && paddingXStyles[paddingX],
    paddingY && paddingYStyles[paddingY],
    paddingT && paddingTStyles[paddingT],
    paddingR && paddingRStyles[paddingR],
    paddingB && paddingBStyles[paddingB],
    paddingL && paddingLStyles[paddingL],
    margin && marginStyles[margin],
    marginX && marginXStyles[marginX],
    marginY && marginYStyles[marginY],
    marginT && marginTStyles[marginT],
    marginR && marginRStyles[marginR],
    marginB && marginBStyles[marginB],
    marginL && marginLStyles[marginL],
    display && displayStyles[display],
    flexDirection && flexDirectionStyles[flexDirection],
    flexWrap && flexWrapStyles[flexWrap],
    justifyContent && justifyContentStyles[justifyContent],
    alignItems && alignItemsStyles[alignItems],
    gap && gapStyles[gap],
    gapX && gapXStyles[gapX],
    gapY && gapYStyles[gapY],
    borderRadius && borderRadiusStyles[borderRadius],
    position && positionStyles[position],
    grow && growStyles[grow],
  ]
    .filter(Boolean)
    .join(' ')

  const customStyles = () => {
    const styles = [
      toClassString(top, 'top'),
      toClassString(right, 'right'),
      toClassString(bottom, 'bottom'),
      toClassString(left, 'left'),
      toClassString(width, 'width'),
      toClassString(minWidth, 'min-width'),
      toClassString(maxWidth, 'max-width'),
      toClassString(height, 'height'),
      toClassString(minHeight, 'min-height'),
      toClassString(maxHeight, 'max-height'),
    ]

    return styles.reduce((acc, [key, value]) => {
      if (value) {
        return {
          ...acc,
          [key]: value,
        }
      }

      return acc
    }, {})
  }

  const combinedStyles = customStyles()

  return (
    <Tag
      className={combinedClasses}
      style={combinedStyles}
    >
      {children}
    </Tag>
  )
}
