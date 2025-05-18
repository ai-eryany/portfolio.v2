import type { UseAppType, UseThemeType, UseUserType } from '@/types/store.type';
import { create } from 'zustand';

const useUser = create<UseUserType>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (b) => set(() => ({ isAuthenticated: b })),

  token: '',
  setToken: (t) => set(() => ({ token: t })),
}));

const useApp = create<UseAppType>((set) => ({
  language: 'en',
  setLanguage: (language) => set(() => ({ language })),

  title: 'ai-eryany',
  setTitle: (title) => set(() => ({ title })),

  pageTitle: '',
  setPageTitle: (pageTitle) => set(() => ({ pageTitle })),

  dir: 'ltr',
  setDir: (dir) => set(() => ({ dir })),

  isUnderConstruction: true,
  setIsUnderConstruction: (isUnderConstruction) =>
    set(() => ({ isUnderConstruction })),
}));

const useTheme = create<UseThemeType>((set) => ({
  isDark: false,
  setIsDark: (b) => set(() => ({ isDark: b })),

  isHeaderVisible: false,
  setIsHeaderVisible: (b) => set(() => ({ isHeaderVisible: b })),

  isNavbarActive: false,
  setIsNavbarActive: (b) => set(() => ({ isNavbarActive: b })),

  isMotionSafe: false,
  setIsMotionSafe: () =>
    set(() => ({
      isMotionSafe: !window.matchMedia('(prefers-reduced-motion: reduce)')
        .matches,
    })),
}));

const Store = {
  useApp,
  useTheme,
  useUser,
};

export default Store;
