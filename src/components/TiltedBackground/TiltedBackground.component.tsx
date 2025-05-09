import Hook from '@/libs/Hook.lib';
import Helper from '@/libs/Helper.lib';
import Config from '@/Config';
import styles from './TiltedBackground.component.module.scss';
import type { Props } from '@/types/shared.type';

type P = {
  bgColor: string;
  tallLineColor: string;
  shortLineColor: string;
  hasLines: boolean;
};
/* 
    You need to pass it:
    1. Background color 
    2. tall line color
*/

export default function TiltedBackgroundTemplate(props: Props<'div', P>) {
  const {
    children,
    bgColor,
    tallLineColor,
    shortLineColor,
    className,
    hasLines,
  } = props;

  const { isAbleToAnimate, ref } = Hook.useAnimateDelay(
    Config.globalAnimationDelay
  );

  return (
    <div
      className={Helper.cn(styles.base, className)}
      style={{ backgroundColor: bgColor }}
      ref={ref}
    >
      <div>
        {hasLines && (
          <div
            className={Helper.cn(
              styles.tall,
              isAbleToAnimate && styles.tallAnimate
            )}
            style={{ backgroundColor: tallLineColor }}
          >
            <div
              className={Helper.cn(styles.short)}
              style={{ backgroundColor: shortLineColor }}
            ></div>
          </div>
        )}

        {hasLines && (
          <div
            className={Helper.cn(
              styles.tall2,
              isAbleToAnimate && styles.tall2Animate
            )}
            style={{ backgroundColor: tallLineColor }}
          >
            <div
              className={Helper.cn(styles.short2, shortLineColor)}
              style={{ backgroundColor: shortLineColor }}
            ></div>
          </div>
        )}
      </div>
      <div className={Helper.cn(styles.content)}>{children}</div>
    </div>
  );
}
