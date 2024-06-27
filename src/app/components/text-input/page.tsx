import { PageWrapper } from '@/components/page-wrapper'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Stack } from '@/components/stack/stack'
import { TextInputPlayground } from '@/components/text-input/text-input-playground'
import { Text } from '@/components/text/text'
import type React from 'react'

const TEXT =
  'Input text enable users to enter free-form text data. Default input texts are for one-line entries, while text areas accommodate longer, multi-line entries.'

export default function TextInputPage() {
  return (
    <PageWrapper name='Text Input'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-07'
      >
        <Paragraph text={TEXT} />
        <TextInputPlayground />
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
            <Text as='h5'>When to Use</Text>
            <ul className='list-disc ml-6'>
              <li>
                Use text inputs when users need to enter unique information that
                cannot be anticipated with preset options.
              </li>
              <li>
                Use text inputs for memorable data that users can quickly enter
                in a free-hand format, rather than through a more complex
                control.
              </li>
            </ul>
          </Stack>
          <Stack
            as='div'
            orientation='vertical'
            spacing='spacing-01'
          >
            <Text as='h5'>When not to Use</Text>
            <ul className='list-disc ml-6'>
              <li>
                Avoid free-form text inputs if users must select from a
                predefined list, as this can lead to errors. Opt for selection
                controls like dropdowns, selects, or radio button groups.
              </li>
              <li>
                For inputs longer than a few words that may span multiple lines,
                use a text area instead.
              </li>
            </ul>
          </Stack>
        </Stack>
      </Stack>
    </PageWrapper>
  )
}
