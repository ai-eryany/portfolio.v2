import { motion } from 'motion/react';
import styles from './BlurIn.animation.module.scss';
import type { Props } from '@/types/shared.type';
import Helper from '@/libs/Helper.lib';

const variants = {
  hidden: { filter: 'blur(10px)', opacity: 0 },
  visible: { filter: 'blur(0px)', opacity: 1 },
};

export default function BlurIn(props: Props<'div'>) {
  const { children, className } = props;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      className={Helper.cn(styles.base, className)}
    >
      {children}
    </motion.div>
  );
}
