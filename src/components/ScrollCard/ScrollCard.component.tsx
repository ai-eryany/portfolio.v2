import Elements from '../../elements';
import { Props } from '@/shared/types';
import { clx } from '@/shared/utils';
import styles from './ScrollCard.component.module.scss';

const { TitleElement } = Elements.Title;

type P = {
  title: string;
};

export default function ScrollCardComponent(props: Props<'div', P>) {
  const { children, title, className } = props;
  return (
    <div className={clx(styles.base, className)}>
      <TitleElement className={clx(styles.title)}>{title}</TitleElement>
      <div className={clx(styles.textContainer)}>
        <p className={clx(styles.text)}>{children}</p>
      </div>
    </div>
  );
}
