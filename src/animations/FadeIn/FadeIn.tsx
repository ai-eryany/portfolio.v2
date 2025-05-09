import Helper from '@/libs/Helper.lib';
import { Box } from '@radix-ui/themes';
import styles from './FadeIn.module.scss';
import type { Props } from '@/types/shared.type';

export default function FadeIn(props: Props<'div'>) {
  const { children, className } = props;
  return <Box className={Helper.cn(styles.base, className)}>{children}</Box>;
}
