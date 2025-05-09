import { Link } from 'react-router-dom';
import { useRef, MouseEvent } from 'react';
import { clx } from '@/shared/utils';
import { Props } from '@/shared/types';
import styles from './PAButton.element.module.scss';

type P = {
  to: string;
  className?: string;
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
  rippleBgColor: string;
};

export default function PAButtonElement(props: Props<'div', P>) {
  const { to, className, children, textColor, bgColor, rippleBgColor } = props;
  const rippleRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!rippleRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    rippleRef.current.style.left = `${relX}px`;
    rippleRef.current.style.top = `${relY}px`;
  };

  return (
    <Link
      to={to}
      className={clx(styles.button, className)}
      style={{
        color: textColor,
        backgroundColor: bgColor,
      }}
      onMouseMove={handleMouseMove}
    >
      <span className={styles.content}>{children}</span>
      <span
        ref={rippleRef}
        className={styles.ripple}
        style={{ backgroundColor: rippleBgColor }}
      />
    </Link>
  );
}
