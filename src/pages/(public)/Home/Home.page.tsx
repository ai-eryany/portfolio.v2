import { Heading } from '@radix-ui/themes';
import HomeLayout from './Home.layout';

export default function Home() {
  return (
    <HomeLayout>
      <Heading as="h1"> Home Page</Heading>
    </HomeLayout>
  );
}
