import Hooks from '@/shared/hooks';
import { clx } from '@/shared/utils';
import { Props } from '@/shared/types';
import styles from './TextStroke.animation.module.scss';

const { useAnimateDelay } = Hooks;

type P = {
  textColor: string;
  lineColor: string;
};

export default function TextStrokeAnimation(props: Props<'div', P>) {
  const { children, className, lineColor, textColor } = props;
  const { isAbleToAnimate, ref } = useAnimateDelay(200);

  return (
    <div ref={ref} className={clx(styles.base, className)}>
      <div
        className={clx(
          styles.leftStroke,
          isAbleToAnimate && styles.strokeInView
        )}
        style={{ '--after-bg': lineColor } as React.CSSProperties}
      />
      <h1
        className={clx(
          styles.middleStroke,
          isAbleToAnimate && styles.middleStrokeInView
        )}
        style={{ color: textColor }}
      >
        {children}
      </h1>
      <div
        className={clx(
          styles.rightStroke,
          isAbleToAnimate && styles.strokeInView
        )}
        style={{ '--after-bg': lineColor } as React.CSSProperties}
      />
    </div>
  );
}
