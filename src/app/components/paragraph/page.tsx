import { PageWrapper } from '@/components/page-wrapper'
import { Paragraph } from '@/components/paragraph/paragraph'
import { ParagraphPlayground } from '@/components/paragraph/paragraph-playground'
import { Stack } from '@/components/stack/stack'
import type React from 'react'

const TEXT =
  'A Paragraph is a block of text with consistent values for font-size, line-height, and margin-bottom across different themes.'

export default function ParagraphPage() {
  return (
    <PageWrapper name='Paragraph'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-05'
      >
        <Paragraph text={TEXT} />
        <ParagraphPlayground />
      </Stack>
    </PageWrapper>
  )
}
