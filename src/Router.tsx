import { createBrowserRouter } from 'react-router-dom';
import { Button, Heading } from '@radix-ui/themes';

const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Button>Hello</Button>
        <Heading>Portfolio</Heading>
      </div>
    ),
  },
]);

export default Router;
