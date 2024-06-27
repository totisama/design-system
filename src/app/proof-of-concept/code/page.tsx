import { LoginForm } from '@/components/code/login-form'
import { Flex } from '@/components/flex/flex'
import { PageWrapper } from '@/components/page-wrapper'

export default function BorderRadiusPage() {
  return (
    <PageWrapper name='Code Perspective'>
      <Flex gapX='spacing-05'>
        <Flex width={'50%'}>
          <LoginForm />
        </Flex>
        <Flex width={'50%'}>
          <LoginForm error />
        </Flex>
      </Flex>
    </PageWrapper>
  )
}
