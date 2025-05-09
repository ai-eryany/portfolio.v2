import { clx } from '@/shared/utils';
import { Link, LinkProps } from 'react-router-dom';
import styles from './ActionButton.element.module.scss';
import { Props } from '@/shared/types';

export default function ActionButtonElement(props: Props<'div', LinkProps>) {
  const { children, className, to } = props;

  return (
    <Link className={clx(styles.base, className)} to={to}>
      {children}
    </Link>
  );
}
