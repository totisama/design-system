import { PageWrapper } from '@/components/page-wrapper'
import { Text } from '@/components/text/text'
import type React from 'react'
import { SwitchPlayground } from '@/components/switch/switch-playground'

export default function SwitchPage() {
  return (
    <PageWrapper name='Switch'>
      <section className='w-full my-5'>
        <Text as='p'>
          A toggle is a control used to quickly switch between two possible
          states. Toggles are designed for binary actions that take effect
          immediately after the user &quot;flips the switch&quot;. They are
          commonly used for &quot;on/off&quot; switches.
        </Text>
      </section>
      <SwitchPlayground />
    </PageWrapper>
  )
}
