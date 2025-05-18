import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import App from '@/App';
import Page from '@/pages/Page';
import Handler from '@/Handler';
import Constants from '@/Constants';

const homePage: RouteObject = {
  index: true,
  element: <Page.Public.Home />,
};
const aboutPage: RouteObject = {
  path: Constants.routes.public.about.url,
  element: <Page.Public.About />,
};
const contactPage: RouteObject = {
  path: Constants.routes.public.contact.url,
  element: <Page.Public.About />,
};

const resumePage: RouteObject = {
  path: Constants.routes.public.resume.url,
  element: <Page.Public.Resume />,
};

const projectsPage: RouteObject = {
  path: Constants.routes.public.projects.url,
  element: <Page.Public.Projects />,
};

const blogsPage: RouteObject = {
  path: Constants.routes.public.blogs.url,
  element: <Page.Public.Blogs />,
};

const hobbiesPage: RouteObject = {
  path: Constants.routes.public.hobbies.url,
  element: <Page.Public.Hobbies />,
};

const loginPage: RouteObject = {
  path: Constants.routes.public.login.url,
  element: <Page.Public.Login />,
};

const notFoundPage: RouteObject = {
  path: Constants.routes.public.notFound.url,
  element: <Page.Public.NotFound />,
};
const testPage: RouteObject = {
  path: Constants.routes.public.test.url,
  element: <Page.Public.Test />,
};

const publicRoute: RouteObject = {
  path: Constants.routes.public.home.url,
  element: <App />,
  errorElement: <Handler />,
  children: [
    homePage,
    aboutPage,
    contactPage,
    resumePage,
    projectsPage,
    blogsPage,
    hobbiesPage,
    loginPage,
    notFoundPage,
    testPage,
  ],
};

const PublicRouter = createBrowserRouter([publicRoute]);

export default PublicRouter;
