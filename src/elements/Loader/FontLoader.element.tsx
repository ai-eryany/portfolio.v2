import { Props } from '@/shared/types';
import { clx } from '@/shared/utils';
import styles from './FontLoader.element.module.scss';

export default function FontLoaderElement(props: Props<'div'>) {
  const { children, className } = props;
  return (
    <div className={clx(styles.base, className)}>
      <svg className={clx(styles.svg)}>
        <text
          className={clx(styles.text)}
          x="50%"
          y="50%"
          dy=".35em"
          textAnchor="middle"
        >
          {children}
        </text>
      </svg>
    </div>
  );
}
