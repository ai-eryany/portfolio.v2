import { Case, Default, Switch } from 'react-if';
import Layout from './layouts/Layout';
import { Outlet } from 'react-router-dom';
import Store from './libs/Store.lib';
import Hook from './libs/Hook.lib';
import UnderConstruction from './UnderConstruction/UnderConstruction.page';
import { Helmet } from 'react-helmet-async';

export default function App() {
  const isAuthenticated = Store.useUser((s) => s.isAuthenticated);
  const isUnderConstruction = Store.useApp((s) => s.isUnderConstruction);
  const theme = Store.useTheme((s) => s.theme);

  Hook.usePathNormalizer();
  Hook.useScroll();

  return (
    <>
      <Helmet>
        <html data-theme={theme} />
      </Helmet>
      <Switch>
        <Case condition={isUnderConstruction}>
          <UnderConstruction />
        </Case>
        <Case condition={isAuthenticated}>
          <Layout.Aside>Aside</Layout.Aside>
          <Outlet />
        </Case>
        <Default>
          <Layout.Header>
            <Layout.Navbar>NavBar</Layout.Navbar>
          </Layout.Header>
          <Layout.Main>
            <Outlet />
          </Layout.Main>
          <Layout.Footer>Footer</Layout.Footer>
        </Default>
      </Switch>
    </>
  );
}
