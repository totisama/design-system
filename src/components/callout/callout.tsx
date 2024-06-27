import { Box } from '@/components/box/box'
import type React from 'react'
import { Flex } from '@/components/flex/flex'
import { Text } from '@/components/text/text'
// import { Paragraph } from '@/components/paragraph/paragraph'
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '@/iconst'
import {
  type BackgroundColors,
  type BorderColors,
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
    borderColor: BorderColors
  }
} = {
  primary: {
    backgroundColor: 'background',
    icon: InfoIcon,
    borderColor: 'border-subtle-00',
  },
  success: {
    backgroundColor: 'tag-background-green',
    icon: SuccessIcon,
    borderColor: 'border-success',
  },
  warning: {
    backgroundColor: 'tag-background-yellow',
    icon: WarningIcon,
    borderColor: 'border-warning',
  },
  error: {
    backgroundColor: 'tag-background-red',
    icon: ErrorIcon,
    borderColor: 'border-error',
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
      borderSize='border-1'
      borderColor={style.borderColor}
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
