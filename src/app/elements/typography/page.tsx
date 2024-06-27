import { PageWrapper } from '@/components/page-wrapper'
import Image from 'next/image'
import type React from 'react'

export default function TypographyPage() {
  return (
    <PageWrapper name='Typography'>
      <Image
        src={'/images/general/Headings.png'}
        alt='image'
        width={1000}
        height={1000}
      />
    </PageWrapper>
  )
}
