import { useState } from 'react';
import MediaQuery from 'react-responsive';
import Constants from '@/Constants';
import styles from './HiddenCard.animation.module.scss';
import type { Props } from '@/types/shared.type';
import Helper from '@/libs/Helper.lib';

type P = {
  title: string;
  text: string;
};

export default function HiddenCard(props: Props<'div', P>) {
  const { title, text } = props;
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => setIsVisible((state) => !state);

  return (
    <>
      {/* Small screens */}
      <MediaQuery maxWidth={Constants.screens.phoneUpTo}>
        <div
          className={Helper.cn(
            styles.gridItem,
            isVisible && styles.gridItemMove
          )}
          onClick={handleClick}
        >
          <h3
            className={Helper.cn(
              styles.itemTitle,
              isVisible && styles.itemTitleSmallMove
            )}
          >
            {title}
          </h3>
          <p
            className={Helper.cn(
              styles.itemContentSmall,
              isVisible && styles.itemContentSmallMove
            )}
          >
            {text}
          </p>
        </div>
      </MediaQuery>

      {/* Big screens */}
      <MediaQuery minWidth={Constants.screens.tablet}>
        <div
          className={Helper.cn(styles.gridItem)}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          onClick={handleClick}
        >
          <h3
            className={Helper.cn(
              styles.itemTitle,
              isVisible && styles.itemTitleMove
            )}
          >
            {title}
          </h3>
          <p
            className={Helper.cn(
              styles.itemContent,
              isVisible && styles.itemContentMove
            )}
          >
            {text}
          </p>
        </div>
      </MediaQuery>
    </>
  );
}
