import { Box } from '../box/box'
import { type Margin } from '../box/box-tokens'
import { Text } from '../text/text'

export interface Items {
  text: string
  children?: string[]
}

export type ListType = 'ordered' | 'unordered'

interface ListProps {
  items: Items[]
  marginL?: Margin
  type?: ListType
}

export const List = ({ items, marginL, type = 'unordered' }: ListProps) => {
  return (
    <Box
      listType={type}
      marginL={marginL}
      display='flex'
      flexDirection='column'
      gapY='spacing-01'
      as={type === 'ordered' ? 'ol' : 'ul'}
    >
      {items.map((item) => (
        <>
          <Box
            key={item.text}
            as='li'
          >
            <Text
              as='p'
              color='text-primary'
            >
              {item.text}
            </Text>
          </Box>
          {item.children && (
            <List
              type={type}
              marginL='spacing-08'
              items={item.children.map((child) => ({ text: child }))}
            />
          )}
        </>
      ))}
    </Box>
  )
}
