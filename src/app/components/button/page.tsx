import { ButtonPlayground } from '@/components/button/button-playground'
import { PageWrapper } from '@/components/page-wrapper'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
import type React from 'react'

const TEXT =
  'Buttons are interactive elements designed to initiate actions. They serve to communicate calls to action, and their labels indicate the action that will be performed when clicked.'

export default function ButtonPage() {
  return (
    <PageWrapper name='Button'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-06'
      >
        <Paragraph text={TEXT} />
        <ButtonPlayground />
        <Stack
          as='div'
          orientation='vertical'
          spacing='spacing-05'
        >
          <Stack
            as='div'
            orientation='vertical'
            spacing='spacing-01'
          >
            <Text as='h5'>When to Use</Text>
            <Paragraph text='Utilize buttons to signal available actions to users and facilitate their interaction with the page. Each page should feature a single primary button, with any additional actions indicated by secondary or tertiary buttons.' />
          </Stack>
          <Stack
            as='div'
            orientation='vertical'
            spacing='spacing-01'
          >
            <Text as='h5'>When not to Use</Text>
            <Paragraph text='Avoid using buttons for navigation. Instead, use links.' />
          </Stack>
          <Stack
            as='div'
            orientation='vertical'
            spacing='spacing-01'
          >
            <Text as='h5'>Variants</Text>
            <Paragraph text='Each button variant serves a specific purpose. Consistent implementation of button variants across products is crucial to ensure they accurately communicate the intended actions.' />
            <ul className='list-disc ml-6'>
              <li className='items-start'>
                <Text as='h5'>Primary:</Text> For the principal call to action
                on the page. It&quot;s only used to post something.
              </li>
              <li className='items-start'>
                <Text as='h5'>Secondary:</Text> For less prominent, and
                sometimes independent actions.
              </li>
              <li className='items-start'>
                <Text as='h5'>Tertiary:</Text> Can only be used in conjunction
                with a secondary button to perform the negative action of the
                set, such as “Cancel” or “Back”.
              </li>
              <li className='items-start'>
                <Text as='h5'>Invisible:</Text> Use it when when you need to put
                more than three buttons together. Refer to Cards to see an
                example.
              </li>
            </ul>
          </Stack>
          <Stack
            as='div'
            orientation='vertical'
            spacing='spacing-01'
          >
            <Text as='h5'>Size</Text>
            <ul className='list-disc ml-6'>
              <li className='items-start'>
                <Text as='h5'>Small:</Text> Default button.
              </li>
              <li className='items-start'>
                <Text as='h5'>Medium:</Text> Primary button. To post something.
              </li>
              <li className='items-start'>
                <Text as='h5'>Large:</Text> Use it in cards or small tiles (up
                to 500px) to fill all the width.
              </li>
            </ul>
          </Stack>
          <Stack
            as='div'
            orientation='vertical'
            spacing='spacing-01'
          >
            <Text as='h5'>Alignment</Text>
            <ul className='list-disc ml-6'>
              <li className='items-start'>
                <Text as='h5'>Left-Justified:</Text> Used for banner
                call-to-actions, in-page forms, and nested buttons within
                components like tiles.
              </li>
              <li className='items-start'>
                <Text as='h5'>Right-Justified:</Text> Used for inline
                notifications, inline field buttons, data tables, and
                progressive forms.
              </li>
              <li className='items-start'>
                <Text as='h5'>Full-Span:</Text> Used for cards and small tiles.
              </li>
            </ul>
          </Stack>
        </Stack>
      </Stack>
    </PageWrapper>
  )
}
