import { ComboBox } from '@/components/combo-box/combo-box'
import { PageWrapper } from '@/components/page-wrapper'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
import type React from 'react'

const TEXT =
  'The combobox component allows users to choose one option from a list, typically within forms where user-provided information is collected.'

export default function ComboBoxPage() {
  return (
    <PageWrapper name='Combo Box'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-07'
      >
        <Paragraph text={TEXT} />
        <ComboBox />
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
                Utilize the select component in a form where users need to pick
                from a list of options and submit data.
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
                Avoid using a select component if there are less than four
                options. In those cases, use a radio button group.
              </li>
            </ul>
          </Stack>
        </Stack>
      </Stack>
    </PageWrapper>
  )
}
