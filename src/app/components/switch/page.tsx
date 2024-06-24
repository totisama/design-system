import { PageWrapper } from '@/components/page-wrapper'
import { Switch } from '@/components/switch'
import type React from 'react'

export default function SwitchPage() {
  return (
    <PageWrapper name='Switch'>
      <section className='h-96 w-full'>
        <div className='w-full bg-[#F0F3F4] h-4/5 flex items-center justify-center rounded-2xl'>
          <Switch />
        </div>
      </section>
    </PageWrapper>
  )
}
