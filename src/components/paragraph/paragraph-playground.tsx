'use client'

import { Container } from '@/components/container'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Box } from '@/components/box/box'

const TEXT =
  'Most moments in our lives pass unnoticed, without remark or consciousness. Then, there are those that mean something, or that we choose to mean something, that become a placeholder for our lives, to add meaning, understanding, passage a demarcation that bestows significance.'

export const ParagraphPlayground = () => {
  return (
    <>
      <Container
        justifyContent='center'
        alignItems='center'
        textAlign='start'
      >
        <Box
          as='div'
          maxWidth={500}
          alignItems='start'
        >
          <Paragraph text={TEXT} />
        </Box>
      </Container>
    </>
  )
}
