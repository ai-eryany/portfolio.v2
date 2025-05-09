import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Const from '@/shared/constants';
import { clx } from '@/shared/utils';
import { Props } from '@/shared/types';
import Elements from '../../elements';
import styles from './NavList.component.module.scss';
import { nanoid } from 'nanoid';

const { navList, routes } = Const;

const { NavButtonElement } = Elements.NavButton;
const { NavItemElement } = Elements.NavItem;
const { NavLinkElement } = Elements.NavLink;

export default function NavListComponent(props: Props<'div'>) {
  const { className } = props;
  const { pathname } = useLocation();

  useEffect(() => {}, [pathname]);

  return (
    <ul className={clx(styles.base, className)}>
      <div className={clx(styles.links)}>
        {navList.map((item) => (
          <NavItemElement key={nanoid()} isSingle={false}>
            <NavLinkElement to={item.url || ''}>{item.name}</NavLinkElement>
          </NavItemElement>
        ))}
      </div>
      <NavItemElement isSingle={true}>
        <NavButtonElement to={routes.objects.contact_us.url}>
          Contact Us
        </NavButtonElement>
      </NavItemElement>
    </ul>
  );
}
