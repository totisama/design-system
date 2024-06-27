import { LoginForm } from '@/components/code/login-form'
import { TWOFAForm } from '@/components/code/twofa-form'
import { Flex } from '@/components/flex/flex'
import { PageWrapper } from '@/components/page-wrapper'
import { Stack } from '@/components/stack/stack'

export default function BorderRadiusPage() {
  return (
    <PageWrapper name='Code Perspective'>
      <Stack
        as='div'
        spacing='spacing-11'
        orientation='vertical'
      >
        <Flex gapX='spacing-05'>
          <Flex width={'50%'}>
            <LoginForm />
          </Flex>
          <Flex width={'50%'}>
            <LoginForm error />
          </Flex>
        </Flex>
        <TWOFAForm />
      </Stack>
    </PageWrapper>
  )
}
