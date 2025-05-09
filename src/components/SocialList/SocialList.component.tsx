import { Props } from '@/shared/types';
import styles from './SocialList.component.module.scss';
import { clx } from '@/shared/utils';

export default function SocialListComponent(props: Props<'ul'>) {
  const { children, className } = props;
  return <ul className={clx(styles.base, className)}>{children}</ul>;
}
