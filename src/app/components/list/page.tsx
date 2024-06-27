import { ListPlayground } from '@/components/list/list-playground'
import { PageWrapper } from '@/components/page-wrapper'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
import type React from 'react'

const TEXT =
  'Lists consist of related content grouped together and organized vertically. Use bulleted lists when there is no need to convey a specific order for the items. Use numbered lists to indicate priority, hierarchy, or sequence among items.'

export default function ListPage() {
  return (
    <PageWrapper name='List'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-07'
      >
        <Paragraph text={TEXT} />
        <ListPlayground />
        <Stack
          as='div'
          orientation='vertical'
          spacing='spacing-01'
        >
          <Text as='h5'>Types of Lists</Text>
          <ul className='list-disc ml-6'>
            <li>
              <Text as='h5'>Ordered Lists:</Text> Use when the order of items is
              important for context.
            </li>
            <li>
              <Text as='h5'>Unordered Lists:</Text> Use when the order of items
              does not change the meaning.
            </li>
          </ul>
        </Stack>
      </Stack>
    </PageWrapper>
  )
}
