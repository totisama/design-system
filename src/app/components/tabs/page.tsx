import { PageWrapper } from '@/components/page-wrapper'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Stack } from '@/components/stack/stack'
import { Tabs } from '@/components/tabs/tabs'
import { Text } from '@/components/text/text'
import type React from 'react'

const TEXT =
  'Tabs are used to group different but related content, allowing users to navigate views without leaving the page. They can be utilized in full-page layouts or within components like modals, cards, or side panels.'

export default function TabsPage() {
  return (
    <PageWrapper name='Tabs'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-07'
      >
        <Paragraph text={TEXT} />
        <Tabs />
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
            <Text as='h5'>When to Use</Text>
            <ul className='list-disc ml-6'>
              <li>
                Use tabs to reduce cognitive load by grouping related
                information into different categories.
              </li>
              <li>
                Tabs are ideal for organizing content such as forms, settings,
                and dashboards, enabling users to stay within their workflow
                without navigating away from the page.
              </li>
              <li>
                Use horizontal tabs in most cases, as they mimic a physical tab.
              </li>
              <li>Use vertical tabs when the panels are tall and narrow.</li>
            </ul>
          </Stack>
          <Stack
            as='div'
            orientation='vertical'
            spacing='spacing-01'
          >
            <Text as='h5'>When not to Use</Text>
            <ul className='list-disc ml-6'>
              <li>
                For step-by-step linear processes, use a progress indicator
                instead of tabs. Progress indicators guide users through a
                sequence, while tabs organize information hierarchically and
                allow flexible content consumption.
              </li>
              <li>
                Tabs are not suitable for comparing information across different
                groups, as users would need to click back and forth, hindering
                task completion.
              </li>
            </ul>
          </Stack>
        </Stack>
      </Stack>
    </PageWrapper>
  )
}
