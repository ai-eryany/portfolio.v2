import { Props } from '@/shared/types';
import { clx } from '@/shared/utils';
import styles from './NavItem.element.module.scss';

type P = {
  isSingle: boolean;
};

export default function NavItemElement(props: Props<'li', P>) {
  const { children, className, isSingle } = props;
  return (
    <li className={clx(styles.base, isSingle && styles.isSingle, className)}>
      {children}
    </li>
  );
}
