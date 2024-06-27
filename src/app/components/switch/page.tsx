import { PageWrapper } from '@/components/page-wrapper'
import type React from 'react'
import { SwitchPlayground } from '@/components/switch/switch-playground'
import { Stack } from '@/components/stack/stack'
import { Paragraph } from '@/components/paragraph/paragraph'

const TEXT =
  'A toggle is a control used to quickly switch between two possible states. Toggles are specifically used for binary actions that occur immediately after the user &quot;flips the switch.&quot; A label must accompany the toggle to clarify the action it performs.'

export default function SwitchPage() {
  return (
    <PageWrapper name='Switch'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-07'
      >
        <Paragraph text={TEXT} />
        <SwitchPlayground />
      </Stack>
    </PageWrapper>
  )
}
