import { Props } from '@/shared/types';
import { clx } from '@/shared/utils';
import styles from './Loader.element.module.scss';

export default function LoaderElement(props: Props<'div'>) {
  const { className } = props;
  return (
    <div className={clx(styles.base, className)}>
      <div className={clx(styles.spinnerWrapper)}>
        <div className={clx(styles.spinner)} />
      </div>
    </div>
  );
}
