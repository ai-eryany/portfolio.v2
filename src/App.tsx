import { Case, Default, Switch } from 'react-if';
import Layout from './layouts/Layout';
import { Outlet } from 'react-router-dom';
import Store from './libs/Store.lib';
import Hook from './libs/Hook.lib';
import { Button } from '@radix-ui/themes';
import Constants from './Constants';

export default function App() {
  const isAuthenticated = Store.useUser((s) => s.isAuthenticated);
  const setIsAuthenticated = Store.useUser((s) => s.setIsAuthenticated);
  const isDark = Store.useTheme((s) => s.isDark);
  const setIsDark = Store.useTheme((s) => s.setIsDark);

  const handleLogin = () => {
    setIsAuthenticated(true);
    window.location.href = Constants.routes.private.dashboard.url;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    window.location.href = Constants.routes.public.home.url;
  };

  const handleThemeChange = () => {
    setIsDark(!isDark);
  };

  Hook.usePathNormalizer();
  Hook.useScroll();

  return (
    <>
      <Switch>
        <Case condition={isAuthenticated}>
          <Button onClick={handleLogout}>Logout</Button>
          <Button onClick={handleThemeChange}>
            Change Theme To {isDark ? 'Light' : 'Dark'}
          </Button>
          <Outlet />
        </Case>
        <Default>
          <Layout.Header>
            <Layout.Navbar>
              <Button onClick={handleLogin}>Authenticate</Button>
              <Button onClick={handleThemeChange}>
                Change Theme To {isDark ? 'Light' : 'Dark'}
              </Button>
            </Layout.Navbar>
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
