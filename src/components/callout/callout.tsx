import { Box } from '@/components/box/box'
import type React from 'react'
import { Flex } from '@/components/flex/flex'
import { Text } from '@/components/text/text'
// import { Paragraph } from '@/components/paragraph/paragraph'
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '@/iconst'
import {
  type BorderSizes,
  type BackgroundColors,
} from '@/components/box/box-tokens'

export type CalloutVariant = 'primary' | 'success' | 'warning' | 'error'

interface CalloutProps {
  title: string
  description: string
  variant: CalloutVariant
}

const variantStyles: {
  [key in CalloutVariant]: {
    backgroundColor: BackgroundColors
    icon: React.FC
    border?: BorderSizes
  }
} = {
  primary: {
    backgroundColor: 'background',
    icon: InfoIcon,
    border: 'border-1',
  },
  success: {
    backgroundColor: 'tag-background-green',
    icon: SuccessIcon,
  },
  warning: {
    backgroundColor: 'tag-background-yellow',
    icon: WarningIcon,
  },
  error: {
    backgroundColor: 'tag-background-red',
    icon: ErrorIcon,
  },
}

export const Callout = ({ title, variant, description }: CalloutProps) => {
  const style = variantStyles[variant]

  return (
    <Box
      as='article'
      width={'70%'}
      textAlign='start'
      backgroundColor={style.backgroundColor}
      borderRadius='border-radius-03'
      borderSize={style.border}
      padding='spacing-06'
    >
      <Flex direction='row'>
        <Flex
          width={'10%'}
          justifyContent='center'
        >
          <style.icon />
        </Flex>
        <Flex
          width={'90%'}
          direction='column'
          gapY='spacing-02'
        >
          <Text as='h3'>{title}</Text>
          <Text
            as='body'
            color='text-secondary'
          >
            {description}
          </Text>
          {/* <Paragraph
            text={description}
            color='text-secondary'
          /> */}
        </Flex>
      </Flex>
    </Box>
  )
}
