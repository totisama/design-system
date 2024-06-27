import { PageWrapper } from '@/components/page-wrapper'
import { Text } from '@/components/text/text'
import type React from 'react'
import { RadioButtonPlayground } from '@/components/radio-button/radio-button-playground'
import { Stack } from '@/components/stack/stack'
import { Paragraph } from '@/components/paragraph/paragraph'

const TEXT =
  'Radio buttons are used for exclusive choices, not for multiple selections. When a user chooses a new item, the previous choice is automatically deselected.'

export default function RadioButtonPage() {
  return (
    <PageWrapper name='Radio Button'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-07'
      >
        <Paragraph text={TEXT} />
        <RadioButtonPlayground />
        <Stack
          as='div'
          orientation='vertical'
          spacing='spacing-01'
        >
          <Text as='h5'>When to Use</Text>
          <ul className='list-disc ml-6'>
            <li>
              <Text as='h5'>Forms:</Text> In tiles, data tables, modals, side
              panels, and in full-page forms.
            </li>
            <li>
              <Text as='h5'>Settings:</Text> Used to change from one setting to
              another in a menu, page, or component.
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
              If a user can select from multiple options, use checkboxes
              instead.
            </li>
          </ul>
        </Stack>
        <Stack
          as='div'
          orientation='vertical'
          spacing='spacing-01'
        >
          <Text as='h5'>Main Elements</Text>
          <ul className='list-disc ml-6'>
            <li>
              A heading can accompany a set of radio buttons to provide further
              context.
            </li>
            <li>A labels that appear to the right of radio button inputs.</li>
          </ul>
        </Stack>
      </Stack>
    </PageWrapper>
  )
}
