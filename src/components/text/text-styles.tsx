import {
  type FontWeight,
  type LetterSpacing,
  type LineHeight,
  type TextColor,
  type TextSizes,
  type TextTags,
} from '@/components/text/text-types'

export const defaultStyles: { [key in TextTags]: string } = {
  h1: 'text-[80px] font-normal leading-[88px]',
  h2: 'text-[30px] font-bold leading-[36px]',
  h3: 'text-[20px] font-bold leading-[24px]',
  h4: 'text-[20px] font-normal leading-[24px]',
  h5: 'text-[15px] font-bold leading-[20px]',
  p: 'text-[15px] font-normal leading-[20px]',
}

export const textSize: { [key in TextSizes]: string } = {
  xs: 'text-sm',
  sm: 'text-base',
  md: 'text-xl',
  lg: 'text-3xl',
  xl: 'text-6xl',
}

export const textWeight: { [key in FontWeight]: string } = {
  normal: 'font-normal',
  bold: 'font-bold',
}

export const textSpacing: { [key in LetterSpacing]: string } = {
  normal: 'tracking-normal',
  wide: 'tracking-[0.16px]',
}

export const textHeight: { [key in LineHeight]: string } = {
  tight: 'leading-5',
  normal: 'leading-6',
  relaxed: 'leading-9',
  loose: 'leading-[70px]',
}

export const textColors: { [key in TextColor]: string } = {
  'text-primary': 'text-text-primary',
  'text-secondary': 'text-text-secondary',
  'text-placeholder': 'text-text-placeholder',
  'text-link': 'text-text-link',
  'text-error': 'text-text-error',
  'text-button': 'text-text-button',
  'text-success': 'text-text-success',
}
