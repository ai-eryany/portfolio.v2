import Helper from '@/libs/Helper.lib';
import { useEffect, useRef } from 'react';
import type { Props } from '@/types/shared.type';
import styles from './ImgBackground.component.module.scss';

type P = {
  image: string;
};

export default function ImgBackground(props: Props<'div', P>) {
  const { children, className, image } = props;
  const shufflerRef = useRef<HTMLDivElement | null>(null); // Explicitly type the ref

  useEffect(() => {
    if (shufflerRef.current) {
      shufflerRef.current.style.backgroundImage = `url(${image})`;
    }
  }, [image]);

  return (
    <div ref={shufflerRef} className={Helper.cn(styles.base, className)}>
      {children}
    </div>
  );
}
