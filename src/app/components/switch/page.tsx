import { PageWrapper } from '@/components/page-wrapper'
import { Switch } from '@/components/switch'
import { Text } from '@/components/text'
import type React from 'react'

export default function SwitchPage() {
  return (
    <PageWrapper name='Switch'>
      <section className='w-full my-10'>
        <Text as='p'>
          A toggle is a control used to quickly switch between two possible
          states. Toggles are designed for binary actions that take effect
          immediately after the user &quot;flips the switch&quot;. They are
          commonly used for &quot;on/off&quot; switches.
        </Text>
      </section>
      <section className='h-96 w-full'>
        <div className='w-full bg-[#F0F3F4] h-4/5 flex items-center justify-center rounded-2xl'>
          <Switch />
        </div>
      </section>
    </PageWrapper>
  )
}
