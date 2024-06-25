import { Text } from '@/components/text/text'

export const Paragraph = ({ text }: { text: string }) => {
  return <Text as='p'>{text}</Text>
}
