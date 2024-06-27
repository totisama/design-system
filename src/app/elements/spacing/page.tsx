import { PageWrapper } from '@/components/page-wrapper'
import Image from 'next/image'
import type React from 'react'

export default function SpacingPage() {
  return (
    <PageWrapper name='Spacing'>
      <Image
        src={'/images/general/Spacing.png'}
        alt='image'
        width={1000}
        height={1000}
      />
    </PageWrapper>
  )
}
