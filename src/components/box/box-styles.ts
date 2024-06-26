import {
  type BorderColors,
  type BackgroundColors,
} from '@/components/box/box-tokens'

export const backgroundStyles: { [key in BackgroundColors]: string } = {
  background: 'bg-background',
  'background-hover': 'bg-background-hover',
  'tag-background-yellow': 'bg-notification-warning-background',
  'tag-background-red': 'bg-tag-background-red',
  'tag-background-green': 'bg-notification-success-background',
}

export const BorderColorsStyles: { [key in BorderColors]: string } = {
  'border-interactive': 'border-border-interactive',
  'border-subtle-00': 'border-border-subtle-00',
  'border-subtle-01': 'border-border-subtle-01',
  'border-error': 'border-error',
}
