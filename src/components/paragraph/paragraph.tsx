import { Text } from '@/components/text'

export const Paragraph = ({ text }: { text: string }) => {
  return <Text as='p'>{text}</Text>
}
