import { Slide, ToastContainer as ToastProvider } from 'react-toastify';
import { StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';
import Store from './libs/Store.lib';
import { Case, Default, Switch } from 'react-if';
import PrivateRouter from './routers/Private.router';
import PublicRouter from './routers/Public.router';
import Api from './Api';

export default function Providers() {
  const isAuthenticated = Store.useUser((s) => s.isAuthenticated);
  const isDark = Store.useTheme((s) => s.isDark);

  return (
    <StrictMode>
      <HelmetProvider>
        <SWRConfig
          value={{
            revalidateOnFocus: true,
            refreshInterval: 3000,
            revalidateOnReconnect: true,
            revalidateIfStale: true,
            fetcher: Api.fetcher,
          }}
        >
          <ToastProvider
            theme={isDark ? 'dark' : 'light'}
            style={{ fontSize: '14px' }}
            toastStyle={{
              backgroundColor: 'var(--color-background)',
              color: 'var(--gray-12)',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
            transition={Slide}
          />
          <Switch>
            <Case condition={isAuthenticated}>
              <RouterProvider router={PrivateRouter} />
            </Case>
            <Default>
              <RouterProvider router={PublicRouter} />
            </Default>
          </Switch>
        </SWRConfig>
      </HelmetProvider>
    </StrictMode>
  );
}
