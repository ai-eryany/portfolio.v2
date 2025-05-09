import { Heading, Strong } from '@radix-ui/themes';
import NotFoundLayout from './404.layout';

export default function NotFound() {
  return (
    <NotFoundLayout>
      <Heading>
        <Strong> 404 </Strong> ... Page Not Found
      </Heading>
    </NotFoundLayout>
  );
}
