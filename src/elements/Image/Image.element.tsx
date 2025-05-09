// Image.tsx
import { motion } from 'motion/react';
import Hooks from '@/shared/hooks';
import Styles from '@/shared/styles';
import styles from './Image.element.module.scss';
import { Props } from '@/shared/types';

const { useAnimateDelay } = Hooks;
const { EnterAnimation } = Styles.MotionAnimation;

type P = {
  blendMode: 'darken' | 'hard-light' | 'color-burn' | 'multiply' | 'luminosity';
  src: string;
};

export default function ImageElement(props: Props<'div', P>) {
  const { blendMode, src } = props;
  const { ref, isAbleToAnimate } = useAnimateDelay(200);

  return (
    <motion.div className={styles.wrapper}>
      <motion.img
        ref={ref}
        className={styles.image}
        style={{ mixBlendMode: blendMode }}
        src={src}
        animate={isAbleToAnimate ? EnterAnimation.fadeIn.animate : undefined}
        initial={EnterAnimation.fadeIn.initial}
        transition={EnterAnimation.fadeIn.transition}
      />
    </motion.div>
  );
}
