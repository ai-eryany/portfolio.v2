import { motion, useSpring, useTransform } from 'motion/react';
import { Props } from '@/shared/types';
import { clx } from '@/shared/utils';
import { useEffect } from 'react';
import styles from './NumberBounce.animation.module.scss';

type P = {
  value: number;
};

export default function NumberBounceAnimation(props: Props<'div', P>) {
  const { className, value } = props;
  const spring = useSpring(value || 0, {
    mass: 3,
    stiffness: 30,
    damping: 8,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value || 0);
  }, [spring, value]);

  return (
    <motion.span className={clx(styles.base, className)}>{display}</motion.span>
  );
}
