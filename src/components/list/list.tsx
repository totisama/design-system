import React from 'react'
import { Box } from '../box/box'
import { type Margin } from '../box/box-tokens'
import { Text } from '../text/text'

export interface Items {
  text: string
  children?: string[]
}

export type ListType = 'ordered' | 'unordered' | 'ordered-nested'

interface ListProps {
  items: Items[]
  marginL?: Margin
  type?: ListType
  nested?: boolean
}

export const List = ({
  items,
  marginL = 'spacing-08',
  type = 'unordered',
  nested,
}: ListProps) => {
  const finalType = nested && type === 'ordered' ? 'ordered-nested' : type

  return (
    <Box
      listType={finalType}
      marginL={marginL}
      display='flex'
      flexDirection='column'
      gapY='spacing-01'
      as={type === 'ordered' ? 'ol' : 'ul'}
    >
      {items.map((item, index) => (
        <React.Fragment key={item.text + index}>
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
              nested
              type={type}
              marginL={marginL}
              items={item.children.map((child) => ({ text: child }))}
            />
          )}
        </React.Fragment>
      ))}
    </Box>
  )
}
