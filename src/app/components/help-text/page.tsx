import { HelpTextPlayground } from '@/components/help-text/help-text-playground'
import { PageWrapper } from '@/components/page-wrapper'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
import type React from 'react'

const TEXT =
  'Help Text is paired with a form element to provide users with information to prevent or correct formatting errors. If you need to highlight important information that is not related to an interactive element, use a Callout or Alert instead.'

export default function HelpTextPage() {
  return (
    <PageWrapper name='Help Text'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-07'
      >
        <Paragraph text={TEXT} />

        <HelpTextPlayground />
        <Stack
          as='div'
          orientation='vertical'
          spacing='spacing-01'
        >
          <Text as='h5'>When to Use Help Text</Text>
          <ul className='list-disc ml-6'>
            <li>Use Help Text in conjunction with a form element.</li>
            <li>
              Help Text should guide users to prevent errors and correctly fill
              out a form field.
            </li>
            <li>
              Keep Help Text concise and simple. If more than two sentences are
              needed to explain a field, link to supporting documentation or use
              a popover.
            </li>
          </ul>
        </Stack>
        <Stack
          as='div'
          orientation='vertical'
          spacing='spacing-01'
        >
          <Text as='h5'>When Not to Use</Text>
          <ul className='list-disc ml-6'>
            <li>Do not use Help Text as a stand-alone component.</li>
            <li>Avoid using help text as placeholder text.</li>
            <li>Limit Help Text to two sentences or fewer.</li>
          </ul>
        </Stack>
      </Stack>
    </PageWrapper>
  )
}
