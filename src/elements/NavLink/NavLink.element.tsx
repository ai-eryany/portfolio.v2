import { Link, LinkProps } from 'react-router-dom';
import { Props } from '@/shared/types';
import { clx } from '@/shared/utils';
import styles from './NavLink.element.module.scss';

export default function NavLinkElement(props: Props<'a', LinkProps>) {
  const { children, className, to } = props;
  return (
    <Link to={to} className={clx(styles.base, className)}>
      {children}
    </Link>
  );
}
