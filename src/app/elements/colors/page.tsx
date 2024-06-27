import { Box } from '@/components/box/box'
import { PageWrapper } from '@/components/page-wrapper'
import { Stack } from '@/components/stack/stack'
import { Text } from '@/components/text/text'
import Image from 'next/image'
import type React from 'react'

export default function ColorsPage() {
  return (
    <PageWrapper name='Colors'>
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
              width={1000}
              height={1000}
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
              width={1000}
              height={1000}
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
              width={1000}
              height={1000}
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
              width={1000}
              height={1000}
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
              width={1000}
              height={1000}
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
              width={1000}
              height={1000}
            />
          </Stack>
        </Stack>
      </Box>
    </PageWrapper>
  )
}
