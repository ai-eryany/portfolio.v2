import { useCallback, useEffect, useState } from 'react';
import { clx } from '@/shared/utils';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import styles from './ScrollTopButton.element.module.scss';

export default function ScrollTopButtonElement() {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = useCallback(() => {
    if (!isVisible && window.pageYOffset > 0) {
      setIsVisible(true);
    } else if (isVisible && window.pageYOffset === 0) {
      setIsVisible(false);
    }
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [isVisible, checkScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      disabled={!isVisible}
      className={clx(styles.base, isVisible && styles.view)}
      onClick={scrollToTop}
    >
      <FaArrowAltCircleUp className={clx(styles.icon)} size={20} />
    </button>
  );
}
