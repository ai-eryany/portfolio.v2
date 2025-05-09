import Elements from '@/services/landing/infrastructure/web/ui/elements';
import { Props } from '@/shared/types';
import styles from './PageTitle.component.module.scss';
import { clx } from '@/shared/utils';

const { TitleElement } = Elements.Title;

export default function PageTitleComponent(props: Props<'div'>) {
  const { children, className } = props;
  return (
    <div className={clx(styles.base, className)}>
      <TitleElement className={clx(styles.title)}>{children}</TitleElement>
    </div>
  );
}
