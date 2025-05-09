import { clx } from '@/shared/utils';
import { Link, LinkProps as P } from 'react-router-dom';
import styles from './ActionButton.element.module.scss';
import { Props } from '@/shared/types';

export default function ActionButtonScrollElement(props: Props<'div', P>) {
  const { children, className, to } = props;

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const targetElement = document.getElementById(to as string);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link
      className={clx(styles.base, className)}
      to={`#${to}`}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
