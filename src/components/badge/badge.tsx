import { Box } from '@/components/box/box'
import { type BackgroundColors, type BorderColors } from '../box/box-tokens'

export type BadgeVariant = 'neutral' | 'success' | 'warning' | 'error'

interface BadgeProps {
  variant: BadgeVariant
}

const variantStyles: {
  [key in BadgeVariant]: {
    backgroundColor: BackgroundColors
    borderColor: BorderColors
  }
} = {
  neutral: {
    backgroundColor: 'background-hover',
    borderColor: 'border-interactive',
  },
  success: {
    backgroundColor: 'tag-background-green',
    borderColor: 'border-success',
  },
  warning: {
    backgroundColor: 'tag-background-yellow',
    borderColor: 'border-warning',
  },
  error: {
    backgroundColor: 'tag-background-red',
    borderColor: 'border-error',
  },
}

export const Badge = ({ variant }: BadgeProps) => {
  const style = variantStyles[variant]
  const text = variant[0].toLocaleUpperCase() + variant.slice(1)

  return (
    <Box
      as='article'
      textAlign='center'
      backgroundColor={style.backgroundColor}
      borderRadius='border-radius-04'
      borderSize='border-2'
      borderColor={style.borderColor}
      paddingX='spacing-04'
      paddingY='spacing-02'
    >
      {text}
    </Box>
  )
}
