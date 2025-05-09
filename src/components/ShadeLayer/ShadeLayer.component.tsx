import Helper from '@/libs/Helper.lib';
import type { Props } from '@/types/shared.type';
import styles from './ShadeLayer.component.module.scss';

type P = {
  color: string;
  opacity: number;
};

export default function ShadeLayer(props: Props<'div', P>) {
  const { children, className, color, opacity } = props;
  return (
    <div
      style={{ backgroundColor: color, opacity: opacity }}
      className={Helper.cn(styles.base, className)}
    >
      {children}
    </div>
  );
}
