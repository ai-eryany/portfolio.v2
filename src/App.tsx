import { Case, Default, Switch } from 'react-if';
import Layout from './layouts/Layout';
import { Outlet } from 'react-router-dom';
import Store from './libs/Store.lib';
import Hook from './libs/Hook.lib';
import UnderConstruction from './UnderConstruction/UnderConstruction.page';
import { Heading } from '@radix-ui/themes';
import Helper from './libs/Helper.lib';

export default function App() {
  const isAuthenticated = Store.useUser((s) => s.isAuthenticated);
  const isUnderConstruction = Store.useApp((s) => s.isUnderConstruction);

  Hook.usePathNormalizer();
  Hook.useScroll();

  return (
    <>
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
            <Layout.Navbar>
              <Heading as="h1" className={Helper.cn()}>
                NavBar
              </Heading>
            </Layout.Navbar>
          </Layout.Header>
          <Layout.Main>
            <Outlet />
          </Layout.Main>
          <Layout.Footer>
            <Heading as="h1"> Footer </Heading>
          </Layout.Footer>
        </Default>
      </Switch>
    </>
  );
}
