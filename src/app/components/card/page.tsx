import { CardPlayground } from '@/components/card/card-playground'
import { PageWrapper } from '@/components/page-wrapper'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
import type React from 'react'

const TEXT =
  'Cards are flexible containers that group related content and actions. Common elements of a card include headings, images, paragraphs, and buttons or links.'

export default function CardPage() {
  return (
    <PageWrapper name='Card'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-07'
      >
        <Paragraph text={TEXT} />
        <CardPlayground />
        <Stack
          as='div'
          orientation='vertical'
          spacing='spacing-01'
        >
          <Text as='h5'>Layout and elements</Text>
          <ul className='list-disc ml-6'>
            <li>Use 24px padding.</li>
            <li>$heading-03 for titles and $body-01 for body text.</li>
            <li>Use large buttons that fill the container width.</li>
            <li>
              If in the page there more than two secondary buttons, opt for
              using a link instead of a button inside the card.
            </li>
            <li>
              If you present multiple cards on a single page, structure their
              content similarly.
            </li>
            <li>
              Avoid using more than one secondary and one tertiary button per
              card, unless it&lsquo;s the “Relevant people card”.
            </li>
          </ul>
        </Stack>
      </Stack>
    </PageWrapper>
  )
}
