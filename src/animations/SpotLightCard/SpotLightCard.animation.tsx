import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { Props } from '@/shared/types';
import styles from './SpotLightCard.animation.module.scss';
import { clx } from '@/shared/utils';

type P = {
  smallTitle: string;
  bigTitle: string;
  desc: string;
};

export default function SpotLightCardAnimation(props: Props<'div', P>) {
  const { className } = props;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  }

  return (
    <div onMouseMove={handleMouseMove} className={clx(styles.base, className)}>
      <motion.div
        className={clx(styles.spotLight)}
        style={{
          background: useMotionTemplate`
                        radial-gradient(
                          650px circle at ${mouseX}px ${mouseY}px,
                          rgba(189, 39, 40, 0.15),
                          transparent 80%
                        )
                    `,
        }}
      />
      <div>
        <div className={clx(styles.smallTitle)}>{props.smallTitle}</div>
        <div className={clx(styles.bigTitleWrapper)}>
          <div className={clx(styles.bigTitle)}>{props.bigTitle}</div>
        </div>
        <div className={clx(styles.description)}>{props.desc}</div>
      </div>
    </div>
  );
}
