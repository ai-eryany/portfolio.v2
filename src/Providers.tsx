import { StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { Theme as ThemeProvider } from '@radix-ui/themes';
import { SWRConfig } from 'swr';
import Router from './Router';

export default function Providers() {
  return (
    <StrictMode>
      <HelmetProvider>
        <SWRConfig
          value={{
            revalidateOnFocus: true,
            refreshInterval: 3000,
            revalidateOnReconnect: true,
            revalidateIfStale: true,
          }}
        >
          <ThemeProvider
            appearance="dark"
            scaling="100%"
            radius="medium"
            accentColor="gold"
          >
            <RouterProvider router={Router} />
          </ThemeProvider>
        </SWRConfig>
      </HelmetProvider>
    </StrictMode>
  );
}
