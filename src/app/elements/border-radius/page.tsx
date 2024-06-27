import Image from 'next/image'

import { PageWrapper } from '@/components/page-wrapper'
import type React from 'react'

export default function BorderRadiusPage() {
  return (
    <PageWrapper name='Border radius'>
      <Image
        src={'/images/general/Radius border.png'}
        alt='image'
        width={1000}
        height={1000}
      />
    </PageWrapper>
  )
}
