import { motion } from 'motion/react';
import { Props } from '@/shared/types';
import { clx } from '@/shared/utils';
import styles from './NavItem.mobile.element.module.scss';

export default function NavItemMobileElement(props: Props<'li'>) {
  const { children } = props;
  return (
    <motion.li
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 0.6, stiffness: 100 }}
      className={clx(styles.base)}
    >
      {children}
    </motion.li>
  );
}
