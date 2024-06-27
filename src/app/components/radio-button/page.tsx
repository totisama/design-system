import { PageWrapper } from '@/components/page-wrapper'
import { Text } from '@/components/text/text'
import type React from 'react'
import { RadioButtonPlayground } from '@/components/radio-button/radio-button-playground'

export default function RadioButtonPage() {
  return (
    <PageWrapper name='Radio Button'>
      <section className='w-full my-5'>
        <Text as='p'>
          Radio buttons are used for exclusive choices, not for multiple
          selections. When a user chooses a new item, the previous choice is
          automatically deselected.
        </Text>
      </section>
      <RadioButtonPlayground />
    </PageWrapper>
  )
}
