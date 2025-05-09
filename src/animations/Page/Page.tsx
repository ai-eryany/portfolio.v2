import { Box } from '@radix-ui/themes';
import Helper from '@/libs/Helper.lib';
import styles from './Page.module.scss';
import type { Props } from '@/types/shared.type';

export default function Page(props: Props<'div'>) {
  const { children, className } = props;
  return <Box className={Helper.cn(styles.base, className)}>{children}</Box>;
}
