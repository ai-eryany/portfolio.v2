import { motion } from 'motion/react';
import Hooks from '@/shared/hooks';
import { clx } from '@/shared/utils';
import styles from './ImageText.element.module.scss';
import Styles from '@/shared/styles';
import { Props } from '@/shared/types';
import { TitleElement } from '../Title';

const { useAnimateDelay } = Hooks;

const { theme } = Styles.JsStyle;
const { EnterAnimation } = Styles.MotionAnimation;

type P = {
  image: string;
  title: string;
  position: 'left' | 'right';
};

export default function ImageTextElement(props: Props<'div', P>) {
  const { children, image, position, title } = props;
  const { isAbleToAnimate, ref } = useAnimateDelay(theme.globalDelay);

  return (
    <motion.div
      animate={isAbleToAnimate ? EnterAnimation.fadeIn.animate : undefined}
      initial={EnterAnimation.fadeIn.initial}
      transition={EnterAnimation.fadeIn.transition}
      ref={ref}
    >
      <TitleElement className={clx(styles.title)}>{title}</TitleElement>
      <div
        className={clx(
          styles.container,
          position === 'left' ? styles.imageLeft : styles.imageRight
        )}
      >
        <div className={clx(styles.imageWrapper)}>
          <img src={image} alt="Illustration" className={clx(styles.image)} />
        </div>
        <div className={clx(styles.textWrapper)}>
          <p className={clx(styles.text)}>{children}</p>
        </div>
      </div>
    </motion.div>
  );
}
