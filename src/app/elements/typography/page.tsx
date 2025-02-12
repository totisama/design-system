import { Box } from '@/components/box/box'
import { PageWrapper } from '@/components/page-wrapper'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Stack } from '@/components/stack/stack'
import Image from 'next/image'
import type React from 'react'

const TEXT =
  'Utilizes Helvetica as its typeface. This font is easy to read at both small and large scales and in various weights. Balancing font weight and size is crucial to maintaining visual harmony and appropriately emphasizing important information.'

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
      <Box
        as='div'
        marginB='spacing-10'
      >
        <span></span>
      </Box>
    </PageWrapper>
  )
}
