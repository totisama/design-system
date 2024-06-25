import {
  type FontWeight,
  type LetterSpacing,
  type LineHeight,
  type TextColor,
  type TextSizes,
  type TextTags,
} from '@/components/text/text'

export const defaultStyles: { [key in TextTags]: string } = {
  h1: 'text-6xl font-bold leading-[70px]',
  h2: 'text-3xl font-bold leading-9 tracking-[0.16px]',
  h3: 'text-xl font-bold leading-6',
  h4: 'text-xl font-normal leading-6',
  h5: 'text-base font-bold tracking-[0.16px] leading-5',
  p: 'text-base font-normal leading-5',
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
