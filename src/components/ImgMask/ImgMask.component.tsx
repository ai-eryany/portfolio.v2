import type { Props } from '@/types/shared.type';
import styles from './ImgMask.component.module.scss';
import Helper from '@/libs/Helper.lib';

export default function ImgMask(props: Props<'div'>) {
  const { children, className } = props;
  return <div className={Helper.cn(styles.base, className)}>{children}</div>;
}
