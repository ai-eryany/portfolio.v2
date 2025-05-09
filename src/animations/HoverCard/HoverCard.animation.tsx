import Hook from '@/libs/Hook.lib';
import { motion } from 'motion/react';
import Config from '@/Config';
import styles from './HoverCard.animation.module.scss';
import type { IconType } from 'react-icons/lib';
import type { Props } from '@/types/shared.type';
import Helper from '@/libs/Helper.lib';
import Theme from '@/styles/theme';

type P = {
  Icon: IconType;
  desc: string;
  more: string;
  linkText: string;
  link: string;
};

export default function HoverCardAnimation(props: Props<'div', P>) {
  const { Icon, desc, linkText, link, more, className } = props;
  const { isAbleToAnimate, ref } = Hook.useAnimateDelay(
    Config.globalAnimationDelay
  );
  return (
    <motion.a
      initial={Theme.EnterAnimation.fadeInScale.initial}
      animate={
        isAbleToAnimate ? Theme.EnterAnimation.fadeInScale.animate : undefined
      }
      transition={Theme.EnterAnimation.fadeInScale.transition}
      ref={ref}
      className={Helper.cn(styles.container, className)}
      href={link}
      target="_blank"
    >
      <div className={Helper.cn(styles.card)}>
        <div className={Helper.cn(styles.circleBackground)}></div>

        <div className={Helper.cn(styles.content)}>
          <span className={Helper.cn(styles.iconWrapper)}>
            <svg className={Helper.cn(styles.icon)} /* ... */>
              <Icon size={24} />
            </svg>
          </span>

          <div className={Helper.cn(styles.textContent)}>
            <p className={Helper.cn(styles.description)}>{desc}</p>
            <p className={Helper.cn(styles.description)}>{more}</p>
          </div>

          <div className={Helper.cn(styles.linkContainer)}>
            <p className={Helper.cn(styles.link)}>{linkText}</p>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
