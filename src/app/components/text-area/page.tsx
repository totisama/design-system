import { PageWrapper } from '@/components/page-wrapper'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Stack } from '@/components/stack/stack'
import { TextAreaPlayground } from '@/components/text-area/text-area-playground'
import { Text } from '@/components/text/text'
import type React from 'react'

const TEXT =
  'Use a Text area when the expected user input is more than a few words and may span multiple lines. Text areas are commonly used for user commentary or descriptions.'

export default function TextAreaPage() {
  return (
    <PageWrapper name='Text Area'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-07'
      >
        <Paragraph text={TEXT} />
        <TextAreaPlayground />
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
            <Text as='h5'>Functionalities</Text>
            <Paragraph text='Text areas include features not found in text inputs, such as:' />
            <ul className='list-disc ml-6'>
              <li>Resize handle</li>
              <li>Word counter</li>
              <li>Character counter</li>
            </ul>
          </Stack>
        </Stack>
      </Stack>
    </PageWrapper>
  )
}
