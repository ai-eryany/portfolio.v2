import { motion } from 'motion/react';
import { Props } from '@/shared/types';
import { clx } from '@/shared/utils';
import styles from './StaggeredText.animation.module.scss';

type P = {
  words: string;
};

export default function StaggeredTextAnimation(props: Props<'div', P>) {
  const { className, words = '' } = props;
  const letters = words.split('');

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
      },
    }),
  };

  return (
    <div className={clx(styles.base, className)}>
      {letters.map((letter, i) => (
        <motion.p
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={i}
          className={clx(styles.text)}
        >
          {letter === ' ' ? <span>&nbsp;</span> : letter}
        </motion.p>
      ))}
    </div>
  );
}
