import { PageWrapper } from '@/components/page-wrapper'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Stack } from '@/components/stack/stack'
import Image from 'next/image'
import type React from 'react'

const TEXT =
  'Our typographic system utilizes Helvetica as its typeface. This font is easy to read in both small and big scales and weights. Balancing font weight and size is crucial to maintain visual harmony and emphasize important information appropriately.'

export default function TypographyPage() {
  return (
    <PageWrapper name='Typography'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-07'
      >
        <Paragraph text={TEXT} />
        <Image
          src={'/images/general/Headings.png'}
          alt='image'
          width={1000}
          height={1000}
        />
      </Stack>
    </PageWrapper>
  )
}
