import { Grid } from '@/components/grid/grid'
import { PageWrapper } from '@/components/page-wrapper'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
import type React from 'react'

const TEXT =
  'Spacing is the negative area between elements and components. It is commonly controlled in code with margin and padding properties, applied to both vertical and horizontal edges.'

export default function GridPage() {
  return (
    <PageWrapper name='Grid'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-07'
      >
        <Paragraph text={TEXT} />
        <Grid />
      </Stack>
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
              We suggest using a grid of 14 columns, letting the first column
              and the last one as horizontal margins.{' '}
            </li>
            <li>
              For one column content, use the first two columns and the last two
              columns as margins.
            </li>
            <li>Use $spacing-12 (96px) for vertical margins.</li>
            <li>
              Dividing the available space in 12 columns is useful because it
              can be divided by 2, 3, 4, or even 6 small columns.
            </li>
          </ul>
        </Stack>
      </Stack>
    </PageWrapper>
  )
}
