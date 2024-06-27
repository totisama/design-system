import { Box } from '@/components/box/box'
import { PageWrapper } from '@/components/page-wrapper'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
import Image from 'next/image'
import type React from 'react'

const TEXT =
  'The application of the color palette brings a unified and recognizable consistency to Xs interfaces. We kept it minimal by using black and white with accents of the new Flex Blue, which meets accessibility standards.'

export default function ColorsPage() {
  return (
    <PageWrapper name='Colors'>
      <Stack
        as='div'
        orientation='vertical'
        spacing='spacing-07'
      >
        <Paragraph text={TEXT} />
        <Box
          as='div'
          padding='spacing-04'
        >
          <Stack
            orientation='vertical'
            as='div'
            spacing='spacing-08'
          >
            <Stack
              orientation='vertical'
              as='div'
              spacing='spacing-03'
            >
              <Text as='h5'>Color Palette</Text>
              <Image
                src={'/images/general/General color palette.png'}
                alt='image'
                width={700}
                height={700}
              />
            </Stack>
            <Stack
              orientation='vertical'
              as='div'
              spacing='spacing-03'
            >
              <Text as='h5'>Background Colors</Text>
              <Image
                src={'/images/general/Background colors.png'}
                alt='image'
                width={700}
                height={700}
              />
            </Stack>
            <Stack
              orientation='vertical'
              as='div'
              spacing='spacing-03'
            >
              <Text as='h5'>Border Colors</Text>
              <Image
                src={'/images/general/Border colors.png'}
                alt='image'
                width={700}
                height={700}
              />
            </Stack>
            <Stack
              orientation='vertical'
              as='div'
              spacing='spacing-03'
            >
              <Text as='h5'>Text Colors</Text>
              <Image
                src={'/images/general/Text colors.png'}
                alt='image'
                width={700}
                height={700}
              />
            </Stack>
            <Stack
              orientation='vertical'
              as='div'
              spacing='spacing-03'
            >
              <Text as='h5'>Button Colors</Text>
              <Image
                src={'/images/general/Button colors.png'}
                alt='image'
                width={700}
                height={700}
              />
            </Stack>
            <Stack
              orientation='vertical'
              as='div'
              spacing='spacing-03'
            >
              <Text as='h5'>Icon Colors</Text>
              <Image
                src={'/images/general/Icon colors.png'}
                alt='image'
                width={700}
                height={700}
              />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </PageWrapper>
  )
}
