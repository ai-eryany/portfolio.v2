import type { Props } from '@/types/shared.type';
import Helper from '@/libs/Helper.lib';
import styles from './FadeLayer.component.module.scss';

export default function FadeLayer(props: Props<'div'>) {
  const { children, className } = props;
  return <div className={Helper.cn(styles.base, className)}>{children}</div>;
}
