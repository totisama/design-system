import Image from 'next/image'

import { PageWrapper } from '@/components/page-wrapper'
import type React from 'react'
import { Stack } from '@/components/stack/stack'
import { Paragraph } from '@/components/paragraph/paragraph'

const TEXT =
  'All X components have a border radius, ranging from 4px for small components like inputs to 24px for large containers.'

export default function BorderRadiusPage() {
  return (
    <PageWrapper name='Border radius'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-07'
      >
        <Paragraph text={TEXT} />
        <Image
          src={'/images/general/border.png'}
          alt='image'
          width={700}
          height={700}
        />
      </Stack>
    </PageWrapper>
  )
}
