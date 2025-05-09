import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { animate } from 'motion/react';
import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';
import * as R from 'ramda';

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
  // const isHeaderVisible = useHeader((s) => s.isHeaderVisible);
  // const isMobileListActive = useNavbar((s) => s.isNavbarActive);
  // const setIsMobileListActive = useNavbar((s) => s.setIsNavbarActive);
  const [ref] = useState(nanoid());

  const handleClosing = () => {
    // setIsMobileListActive(false);
  };

  const handlePrevention = (e: Event) => e.preventDefault();

  useEffect(() => {
    const navbarBg = document.getElementById(ref);
    navbarBg?.addEventListener('touchmove', handlePrevention);

    return () => navbarBg?.removeEventListener('touchmove', handlePrevention);
  }, [ref]);

  // return { isHeaderVisible, isMobileListActive, handleClosing, ref };
}

function usePathname() {
  const { pathname } = useLocation();
  // const [isHome, setIsHome] = useState(R.equals(pathname, objects?.home?.url));
  const [isAbout, setIsAbout] =
    useState();
    // R.equals(pathname, objects?.about_us?.url)
  const [isContact, setIsContact] =
    useState();
    // R.equals(pathname, objects?.contact_us?.url)
  const [isNotFound, setIsNotFound] =
    useState();
    // R.equals(pathname, objects?.["*"]?.url)

  const switchToHome = () => {
    // setIsHome(true);
    // setIsAbout(false);
    // setIsContact(false);
    // setIsNotFound(false);
  };

  const switchToAbout = () => {
    // setIsHome(false);
    // setIsAbout(true);
    // setIsContact(false);
    // setIsNotFound(false);
  };

  const switchToContact = () => {
    // setIsHome(false);
    // setIsAbout(false);
    // setIsContact(true);
    // setIsNotFound(false);
  };

  const switchToNotFound = () => {
    // setIsHome(false);
    // setIsAbout(false);
    // setIsContact(false);
    // setIsNotFound(true);
  };

  useEffect(() => {
    // if (R.equals(pathname, objects?.home?.url)) switchToHome();
    // else if (R.equals(pathname, objects?.about_us?.url)) switchToAbout();
    // else if (R.equals(pathname, objects?.contact_us?.url)) switchToContact();
    // else if (R.equals(pathname, objects?.["*"]?.url)) switchToNotFound();
  }, [pathname]);

  // return { isHome, isAbout, isContact, isNotFound };
}

function usePathNormalizer() {
  const { pathname } = useLocation();
  useEffect(() => {
    // const normalizedPaths = [objects?.home_alt?.url, objects?.home_alt2?.url];
    // if (normalizedPaths.includes(pathname)) window.location.href = "/";
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

const Hook = {
  useAnimateDelay,
  useAnimatedText,
  useHeaderController,
  useNavbarDeps,
  usePathname,
  usePathNormalizer,
  useScroll,
  useWindow,
  useWindowScrolling,
};

export default Hook;
