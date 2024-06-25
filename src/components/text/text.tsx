import type React from 'react'
import {
  defaultStyles,
  textColors,
  textHeight,
  textSize,
  textSpacing,
  textWeight,
} from '@/components/text/text-styles'

export type TextTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'
export type TextSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type FontWeight = 'normal' | 'bold'
export type LetterSpacing = 'normal' | 'wide'
export type LineHeight = 'tight' | 'normal' | 'relaxed' | 'loose'
export type TextColor =
  | 'text-primary'
  | 'text-secondary'
  | 'text-placeholder'
  | 'text-link'
  | 'text-error'
  | 'text-button'
  | 'text-success'

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

  // Conditionally apply custom styles, or fall back to defaults
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

  // Combine classes ensuring custom styles override defaults
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
