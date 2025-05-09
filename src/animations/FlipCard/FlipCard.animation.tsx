import { useState } from 'react';
import styles from './FlipCard.animation.module.scss';
import type { Props } from '@/types/shared.type';
import Helper from '@/libs/Helper.lib';

type P = {
  name: string;
  description: string;
  src: string;
};

export default function FlipCard(props: Props<'img', P>) {
  const { src, name, description } = props;

  const [isMasked, setIsMasked] = useState(false);

  const handleMasking = () => setIsMasked(() => true);
  const handleUnMasking = () => setIsMasked(() => false);

  return (
    <div className={Helper.cn(styles.flipBox)}>
      <div className={Helper.cn(styles.flipBoxInner)}>
        <div
          className={Helper.cn(styles.flipBoxFront)}
          onMouseEnter={handleMasking}
        >
          <div className={Helper.cn(styles.frontMask)}></div>
          <img src={src} className={Helper.cn(styles.imgBox)} />
          <p className={Helper.cn(styles.txtBox)}>{name}</p>
        </div>
        <div
          className={Helper.cn(
            styles.flipBoxBack,
            isMasked && styles.flipBoxBackMask
          )}
          onMouseLeave={handleUnMasking}
        >
          <p className={Helper.cn(styles.descBox)}>{description}</p>
        </div>
      </div>
    </div>
  );
}
