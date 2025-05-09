import Elements from '../../elements';
import Const from '@/shared/constants';
import styles from './NavList.mobile.component.module.scss';
import { clx } from '@/shared/utils';
import { nanoid } from 'nanoid';

const { navList } = Const;

const { NavItemMobileElement } = Elements.NavItem;
const { NavLinkMobileElement } = Elements.NavLink;

export default function NavListMobileComponent() {
  return (
    <ul className={clx(styles.base)}>
      {navList.map((item) => (
        <NavItemMobileElement key={nanoid()}>
          <NavLinkMobileElement to={item.url || ''}>
            {item.name}
          </NavLinkMobileElement>
        </NavItemMobileElement>
      ))}
    </ul>
  );
}
