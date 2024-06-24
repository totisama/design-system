import { PageWrapper } from '@/components/page-wrapper'
import { Container } from '@/components/container'
import { Switch } from '@/components/switch'
import { Text } from '@/components/text'
import type React from 'react'

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
      <Container>
        <Switch />
      </Container>
    </PageWrapper>
  )
}
