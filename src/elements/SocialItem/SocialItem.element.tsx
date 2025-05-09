import { Props } from '@/shared/types';
import styles from './SocialItem.element.module.scss';
import { clx } from '@/shared/utils';

type Socials = {
  name: string;
  url: string;
  isEven: boolean;
};

export default function SocialItemElement(props: Props<'div', Socials>) {
  const { children, className, url, name, isEven } = props;
  return (
    <li className={clx(styles.base, className)}>
      <a
        className={clx(styles.link, isEven ? styles.linkEven : styles.linkOdd)}
        href={url}
        target="_blank"
      >
        {name}
        {children}
      </a>
    </li>
  );
}
