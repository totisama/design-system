import type React from 'react'
import {
  defaultStyles,
  textColors,
  textHeight,
  textSize,
  textSpacing,
  textWeight,
} from '@/components/text/text-styles'
import {
  type FontWeight,
  type LetterSpacing,
  type LineHeight,
  type TextColor,
  type TextSizes,
  type TextTags,
} from '@/components/text/text-types'

interface TextProps {
  as: TextTags
  children: React.ReactNode
  size?: TextSizes
  weight?: FontWeight
  letterSpacing?: LetterSpacing
  lineHeight?: LineHeight
  color?: TextColor
}

export const Text: React.FC<TextProps> = ({
  as,
  children,
  size,
  weight,
  letterSpacing,
  lineHeight,
  color,
}: TextProps) => {
  const Tag = as

  const sizeClass = size ? textSize[size] : defaultStyles[as].split(' ')[0]
  const weightClass = weight
    ? textWeight[weight]
    : defaultStyles[as].split(' ').find((cls) => cls.includes('font-'))
  const spacingClass = letterSpacing
    ? textSpacing[letterSpacing]
    : defaultStyles[as].split(' ').find((cls) => cls.includes('tracking-'))
  const heightClass = lineHeight
    ? textHeight[lineHeight]
    : defaultStyles[as].split(' ').find((cls) => cls.includes('leading-'))
  const colorClass = color ? textColors[color] : ''

  const combinedStyles = [
    sizeClass,
    weightClass,
    spacingClass,
    heightClass,
    colorClass,
  ]
    .filter(Boolean)
    .join(' ')

  return <Tag className={combinedStyles}>{children}</Tag>
}
