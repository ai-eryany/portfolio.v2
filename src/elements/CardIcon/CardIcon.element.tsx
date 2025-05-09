import { Props } from '@/shared/types';
import styles from './CardIcon.element.module.scss';
import { clx } from '@/shared/utils';

type P = {
  bgColor: string;
  titleColor: string;
  textColor: string;
  title: string;
  Icon: React.ElementType;
};

export default function CardIconElement(props: Props<'div', P>) {
  const { children, Icon, title, bgColor, titleColor, textColor } = props;

  return (
    <div className={clx(styles.base)}>
      <div className={clx(styles.upper)} style={{ backgroundColor: bgColor }}>
        <div className={clx(styles.iconWrapper)}>
          <Icon size={70} />
        </div>
        <h1 className={clx(styles.title)} style={{ color: titleColor }}>
          {title}
        </h1>
      </div>
      <div className={clx(styles.lower)}>
        <p className={clx(styles.text)} style={{ color: textColor }}>
          {children}
        </p>
      </div>
    </div>
  );
}
