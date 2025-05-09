import { motion } from 'motion/react';
import { clx } from '@/shared/utils';
import Hooks from '@/shared/hooks';
import { Props } from '@/shared/types';
import Styles from '@/shared/styles';
import styles from './Stroke.animation.module.scss';

const { useAnimateDelay } = Hooks;

const { theme } = Styles.JsStyle;

type P = {
  color: string;
};

export default function StrokeAnimation(props: Props<'div', P>) {
  const { children, className, color } = props;
  const { isAbleToAnimate, ref } = useAnimateDelay(theme.globalDelay);

  return (
    <motion.div
      ref={ref}
      className={clx(styles.base, isAbleToAnimate && styles.inView, className)}
      style={{ color: color }}
    >
      {children}
    </motion.div>
  );
}
