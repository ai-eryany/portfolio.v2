import { motion } from 'motion/react';
import Hooks from '@/shared/hooks';
import Styles from '@/shared/styles';
import styles from './TitleCard.element.module.scss';
import { Props } from '@/shared/types';

const { useAnimateDelay } = Hooks;
const { EnterAnimation } = Styles.MotionAnimation;

export default function TitleCardElement(props: Props<'div'>) {
  const { children } = props;
  const { ref, isAbleToAnimate } = useAnimateDelay(200);

  return (
    <motion.div className={styles.wrapper}>
      <motion.h1
        ref={ref}
        className={styles.title}
        animate={isAbleToAnimate ? EnterAnimation.fadeIn.animate : undefined}
        initial={EnterAnimation.fadeIn.initial}
        transition={EnterAnimation.fadeIn.transition}
      >
        {children}
      </motion.h1>
    </motion.div>
  );
}
