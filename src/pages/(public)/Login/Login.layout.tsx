import Animation from '@/animations/Animation';
import type { Props } from '@/types/shared.type';
import { Box, Flex, Section } from '@radix-ui/themes';

export default function LoginLayout(props: Props<'div'>) {
  const { children } = props;
  return (
    <Animation.Page>
      <Section>
        <Flex>
          <Box>{children}</Box>
        </Flex>
      </Section>
    </Animation.Page>
  );
}
