import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import Store from '@/libs/Store.lib';
import Hook from '@/libs/Hook.lib';
import styles from './ScreenShade.component.module.scss';
import type { Props } from '@/types/shared.type';
import Helper from '@/libs/Helper.lib';

export default function ScreenShade(props: Props<'div'>) {
  const { children, className } = props;
  const setIsMobileListActive = Store.useTheme((s) => s.setIsNavbarActive);
  const { handleClosing, isMobileListActive, isHeaderVisible, ref } =
    Hook.useNavbarDeps();

  useEffect(() => {
    if (!isHeaderVisible) setIsMobileListActive(false);
  }, [isHeaderVisible, setIsMobileListActive]);
  return (
    <AnimatePresence>
      {isMobileListActive && isHeaderVisible && (
        <motion.div
          className={Helper.cn(styles.base, className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          exit={{ opacity: 0 }}
          id={ref}
          onClick={handleClosing}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
