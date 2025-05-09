import Hook from '@/libs/Hook.lib';
import { motion } from 'motion/react';
import styles from './FadeDown.animation.module.scss';
import type { Props } from '@/types/shared.type';
import Config from '@/Config';
import Helper from '@/libs/Helper.lib';

type P = {
  title: string;
  subtitle: string;
  desc: string;
};

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' },
  },
};

export default function FadeDown(props: Props<'div', P>) {
  const { title, subtitle, desc, className } = props;
  const { isAbleToAnimate, ref } = Hook.useAnimateDelay(
    Config.globalAnimationDelay
  );

  const midIndex = Math.ceil(title.length / 2); // Find the middle index
  const firstHalf = title.slice(0, midIndex);
  const secondHalf = title.slice(midIndex);

  return (
    <motion.div
      ref={ref}
      className={Helper.cn(styles.base, className)}
      initial="hidden"
      animate={isAbleToAnimate ? 'show' : 'hidden'}
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.h1
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className={Helper.cn(styles.h1)}
      >
        <span className={Helper.cn(styles.span1)}>{firstHalf}</span>
        <span className={Helper.cn(styles.span2)}>{secondHalf}</span>
      </motion.h1>

      <motion.p
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className={Helper.cn(styles.p1)}
      >
        {subtitle}
      </motion.p>
      <motion.p
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className={Helper.cn(styles.p2)}
      >
        {desc}
      </motion.p>
    </motion.div>
  );
}
