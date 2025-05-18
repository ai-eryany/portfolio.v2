import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import Helper from '@/libs/Helper.lib';
import type { Props } from '@/types/shared.type';
import styles from './SpotLightCard.animation.module.scss';

type P = {
  smallTitle: string;
  bigTitle: string;
  desc: string;
};

export default function SpotLightCard(props: Props<'div', P>) {
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
    <div
      onMouseMove={handleMouseMove}
      className={Helper.cn(styles.base, className)}
    >
      <motion.div
        className={Helper.cn(styles.spotLight)}
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
        <div className={Helper.cn(styles.smallTitle)}>{props.smallTitle}</div>
        <div className={Helper.cn(styles.bigTitleWrapper)}>
          <div className={Helper.cn(styles.bigTitle)}>{props.bigTitle}</div>
        </div>
        <div className={Helper.cn(styles.description)}>{props.desc}</div>
      </div>
    </div>
  );
}
