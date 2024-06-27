import { CalloutPlayground } from '@/components/callout/callout-playground'
import { PageWrapper } from '@/components/page-wrapper'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
import type React from 'react'

const TEXT =
  'Use a Callout to emphasize information either on a page or within a specific section.'

export default function CalloutPage() {
  return (
    <PageWrapper name='Callout'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-07'
      >
        <Paragraph text={TEXT} />
        <CalloutPlayground />
        <Stack
          as='div'
          orientation='vertical'
          spacing='spacing-01'
        >
          <Text as='h5'>Elements</Text>
          <ul className='list-disc ml-6'>
            <li>
              <Text as='h5'>Icon:</Text> Reflects the type of callout.
            </li>
            <li>
              <Text as='h5'>Title:</Text> It&lsquo;s mandatory, so the
              information is easier to navigate for people who use screen
              readers.
            </li>
            <li>
              <Text as='h5'>Description:</Text> Don&lsquo;t repeat the
              information contained in the
            </li>
          </ul>
        </Stack>
      </Stack>
    </PageWrapper>
  )
}
