import { Link, LinkProps } from 'react-router-dom';
import { clx } from '@/shared/utils';
import styles from './NavLink.mobile.element.module.scss';

export default function NavLinkMobileElement(props: LinkProps) {
  const { to, className, children } = props;
  return (
    <Link to={to} className={clx(styles.base, className)}>
      {children}
    </Link>
  );
}
