import { Container, Flex, Heading, Section } from '@radix-ui/themes';

export default function Handler() {
  return (
    <Section>
      <Container>
        <Flex justify="center" align="center">
          <Heading as="h1">
            Something Went Wrong, Please try to refresh the page
          </Heading>
        </Flex>
      </Container>
    </Section>
  );
}
