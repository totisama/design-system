import { PageWrapper } from '@/components/page-wrapper'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
import Image from 'next/image'
import type React from 'react'

const TEXT =
  'Spacing is the negative area between elements. It is commonly controlled in code with margin and padding properties, applied to both vertical and horizontal edges.'

export default function SpacingPage() {
  return (
    <PageWrapper name='Spacing'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-07'
      >
        <Paragraph text={TEXT} />
        <Image
          src={'/images/general/Spacing.png'}
          alt='image'
          width={1000}
          height={1000}
        />
        <Stack
          as='div'
          orientation='vertical'
          spacing='spacing-06'
        >
          <Stack
            as='div'
            orientation='vertical'
            spacing='spacing-01'
          >
            <Text as='h5'>Good Practices</Text>
            <ul className='list-disc ml-6'>
              <li>
                Elements with more spacing around them are often perceived as
                more important than those with less space.
              </li>
              <li>
                Elements placed close together can be easily overlooked. Users
                might see the grouping but not process each individual item.
                Ensure related elements are spaced appropriately to convey their
                relationship.
              </li>
            </ul>
          </Stack>
        </Stack>
      </Stack>
    </PageWrapper>
  )
}
