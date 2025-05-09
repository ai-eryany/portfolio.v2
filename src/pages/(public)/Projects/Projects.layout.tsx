import Animation from '@/animations/Animation';
import type { Props } from '@/types/shared.type';
import { Section, Container, Box } from '@radix-ui/themes';

export default function ProjectsLayout(props: Props<'div'>) {
  const { children } = props;
  return (
    <Animation.Page>
      <Section>
        <Container>
          <Box>{children}</Box>
        </Container>
      </Section>
    </Animation.Page>
  );
}
