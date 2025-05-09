// Title.tsx
import Hooks from '@/shared/hooks';
import { Props } from '@/shared/types';
import { clx } from '@/shared/utils';
import Styles from '@/shared/styles';
import styles from './Title.element.module.scss';

const { useAnimateDelay } = Hooks;

const { theme } = Styles.JsStyle;

export default function TitleElement(props: Props<'div'>) {
  const { children, className } = props;
  const { isAbleToAnimate, ref } = useAnimateDelay(theme.globalDelay);

  return (
    <div
      ref={ref}
      className={clx(
        styles.wrapper,
        isAbleToAnimate && styles.titleInView,
        className
      )}
    >
      <h1 className={clx(styles.title)}>{children}</h1>
    </div>
  );
}
