import { BadgePlayground } from '@/components/badge/badge-playground'
import { PageWrapper } from '@/components/page-wrapper'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
import type React from 'react'

const TEXT =
  'A Badge is a label for quick identification. It can be applied in marking beta product features, notifications, counts, or status.'

export default function BadgePage() {
  return (
    <PageWrapper name='Badge'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-07'
      >
        <Paragraph text={TEXT} />
        <BadgePlayground />
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
              <li>Be concise, use 1-3 words.</li>
              <li>
                Use the Badge to highlight an attribute of an object for quick
                identification, ensuring the text clearly communicates the
                intended information or issue.
              </li>
            </ul>
          </Stack>
        </Stack>
      </Stack>
    </PageWrapper>
  )
}
