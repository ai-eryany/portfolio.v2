import { Link, LinkProps } from 'react-router-dom';
import { Props } from '@/shared/types';
import { clx } from '@/shared/utils';
import styles from './NavButton.element.module.scss';

export default function NavButtonElement(props: Props<'div', LinkProps>) {
  const { children, className, to } = props;
  return (
    <Link to={to} className={clx(styles.base, className)}>
      {children}
    </Link>
  );
}
