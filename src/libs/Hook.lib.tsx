import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { animate } from 'motion/react';
import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';
import Store from './Store.lib';
import Constants from '@/Constants';
import useSWR, { mutate } from 'swr';
import Api from '@/Api';
import type { Maybe } from '@/types/shared.type';

function useAnimateDelay(delay: number) {
  const [isAbleToAnimate, setIsAbleToAnimate] = useState(false);
  const { inView, ref } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) setTimeout(() => setIsAbleToAnimate(true), delay);
  }, [inView, setIsAbleToAnimate, delay]);

  return { isAbleToAnimate, ref };
}

function useAnimatedText(text: string, timePerChar: number = 0.05) {
  const [cursor, setCursor] = useState(0);
  const [prevText, setPrevText] = useState(text);
  const [startingCursor, setStartingCursor] = useState(0);

  const delimiter = ''; // Use ' ' for words, '' for characters
  const totalChars = text.split(delimiter).length;
  const duration = totalChars * timePerChar; // Smooth animation duration

  useEffect(() => {
    if (prevText !== text) {
      setPrevText(text);
      setStartingCursor(text.startsWith(prevText) ? cursor : 0);
    }
  }, [text, prevText, cursor]);

  useEffect(() => {
    const controls = animate(startingCursor, totalChars, {
      duration, // Adaptive duration
      ease: 'easeOut',
      onUpdate(latest: number) {
        setCursor(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [startingCursor, text, duration, totalChars]);

  return text.split(delimiter).slice(0, cursor).join(delimiter);
}

function useHeaderController() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return [isVisible];
}

function useNavbarDeps() {
  const isHeaderVisible = Store.useTheme((s) => s.isHeaderVisible);
  const isMobileListActive = Store.useTheme((s) => s.isNavbarActive);
  const setIsMobileListActive = Store.useTheme((s) => s.setIsNavbarActive);
  const [ref] = useState(nanoid());

  const handleClosing = () => {
    setIsMobileListActive(false);
  };

  const handlePrevention = (e: Event) => e.preventDefault();

  useEffect(() => {
    const navbarBg = document.getElementById(ref);
    navbarBg?.addEventListener('touchmove', handlePrevention);

    return () => navbarBg?.removeEventListener('touchmove', handlePrevention);
  }, [ref]);

  return { isHeaderVisible, isMobileListActive, handleClosing, ref };
}

function usePathNormalizer() {
  const { pathname } = useLocation();
  useEffect(() => {
    const normalizedPaths = [
      Constants.routes.public.homeAlt.url,
      Constants.routes.public.homeAlt2.url,
    ];
    if (normalizedPaths.includes(pathname)) window.location.href = '/';
  }, [pathname]);

  return null;
}

function useScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 0);
  }, [pathname]);

  return null;
}

function useWindow() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const applyWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', applyWindowSize);
    return () => window.removeEventListener('resize', applyWindowSize);
  }, []);

  return [windowWidth];
}

function useWindowScrolling() {
  window.onscroll = () => {};
  return null;
}

type UseRequestProps = {
  method: Maybe<'GET' | 'POST' | 'PUT' | 'DELETE'>;
  url: Maybe<string>;
  payload: Maybe<any>;
  isSubmit: Maybe<boolean>;
};

function useRequest(props: UseRequestProps) {
  const { method, url, payload, isSubmit } = props;

  const isGet = method?.toUpperCase() === 'GET';
  const {
    data,
    error,
    mutate: localMutate,
    isLoading,
  } = useSWR(isGet && isSubmit ? url : null);

  const trigger = async (newPayload: any) => {
    try {
      const response = await Api.client.request({
        url: url || '',
        method: method || '',
        data: newPayload ?? payload,
      });

      // Always revalidate the path after successful write
      mutate(url);

      return response.data;
    } catch (e) {
      const err = e as Error;
      console.error('Request failed:', err.message);
      return null;
    }
  };

  return {
    data: data ?? [],
    error,
    isLoading,
    mutate: localMutate,
    trigger,
  };
}

function useDisclosure(initial = false) {
  const [isOpen, setIsOpen] = useState(initial);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((state) => !state), []);

  return { isOpen, open, close, toggle };
}

const Hook = {
  useAnimateDelay,
  useAnimatedText,
  useHeaderController,
  useNavbarDeps,
  usePathNormalizer,
  useScroll,
  useWindow,
  useWindowScrolling,
  useDisclosure,
  useRequest,
};

export default Hook;
