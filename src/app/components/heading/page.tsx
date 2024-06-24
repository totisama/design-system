import { Heading } from '@/components/heading'
import { PageWrapper } from '@/components/page-wrapper'
import { Playground } from '@/components/playground'
import type React from 'react'

export default function HeadingPage() {
  return (
    <PageWrapper name='Heading'>
      <Playground>
        <Heading as='h1'>This is a heading</Heading>
      </Playground>
    </PageWrapper>
  )
}
