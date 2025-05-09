import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Utils from '@/shared/utils';
import Elements from '@/services/landing/infrastructure/web/ui/elements';
import Const from '@/shared/constants';
import styles from './FooterList.component.module.scss';
import { nanoid } from 'nanoid';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const { NavItemElement } = Elements.NavItem;
const { NavLinkElement } = Elements.NavLink;

const { clx } = Utils;

const { navList } = Const;

export default function FooterListComponent() {
  const { pathname } = useLocation();

  useEffect(() => {}, [pathname]);
  return (
    <div className={clx(styles.base)}>
      <div className={clx(styles.container)}>
        {navList.map((item) => (
          <NavItemElement key={nanoid()} isSingle={false}>
            <NavLinkElement to={item.url}>{item.name}</NavLinkElement>
          </NavItemElement>
        ))}
      </div>
      <div>
        <div className={clx(styles.IconContainer)}>
          <a href="#" className={clx(styles.link)}>
            <FaLinkedin size={30} />
            <span>LinkedIn</span>
          </a>
          <a href="#" className={clx(styles.link)}>
            <FaXTwitter size={30} />
            <span>Twitter X</span>
          </a>
        </div>
        <p className={clx(styles.text)}>
          &copy; 2025 HRTC, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
