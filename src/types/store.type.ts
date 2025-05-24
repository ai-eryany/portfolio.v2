import type { Maybe } from './shared.type';

export type UseAppType = {
  language: Maybe<'en' | 'ar'>;
  setLanguage: (language: Maybe<'en' | 'ar'>) => void;

  title: Maybe<string>;
  setTitle: (title: Maybe<string>) => void;

  pageTitle: Maybe<string>;
  setPageTitle: (pageTitle: Maybe<string>) => void;

  dir: Maybe<'ltr' | 'rtl'>;
  setDir: (dir: Maybe<'ltr' | 'rtl'>) => void;

  isUnderConstruction: Maybe<boolean>;
  setIsUnderConstruction: (isUnderConstruction: Maybe<boolean>) => void;
};

export type UseUserType = {
  isAuthenticated: Maybe<boolean>;
  setIsAuthenticated: (b: Maybe<boolean>) => void;

  token: Maybe<string>;
  setToken: (t: Maybe<string>) => void;
};

export type UseThemeType = {
  theme: Maybe<string>;
  setTheme: (theme: Maybe<string>) => void;

  isHeaderVisible: Maybe<boolean>;
  setIsHeaderVisible: (b: Maybe<boolean>) => void;

  isNavbarActive: Maybe<boolean>;
  setIsNavbarActive: (b: Maybe<boolean>) => void;

  isMotionSafe: Maybe<boolean>;
  setIsMotionSafe: () => void;
};
