import { Text } from '@/components/text/text'
import { type TextColor } from '../text/text-types'

export const Paragraph = ({
  text,
  color = 'text-primary',
}: {
  text: string
  color?: TextColor
}) => {
  return (
    <Text
      as='p'
      color={color}
    >
      {text}
    </Text>
  )
}
