import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import type { Props } from '@/types/shared.type';
import Helper from '@/libs/Helper.lib';
import styles from './RotateText.animation.module.scss';

type P = {
  words: string[];
};

export default function RotateText(props: Props<'div', P>) {
  const { className, words = [] } = props;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words.length) return;
    const interval = setInterval(() => {
      setIndex((prevIndex: number) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={Helper.cn(styles.base, className)}
        key={words[index]}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {words[index]}
      </motion.div>
    </AnimatePresence>
  );
}
