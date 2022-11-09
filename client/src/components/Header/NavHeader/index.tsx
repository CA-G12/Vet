import { useState } from 'react';

import {
  AppsIconNav,
  CloseIconNav,
  Diversity1IconNav,
  HomeIconNav,
  HomeRepairServiceIconNav,
  NavigationAnchor,
  Navigations,
  NavItems,
} from '../components.styled';

export const NavHeader = () => {
  const [active, setActive] = useState(false);

  const menuDisActive = () => {
    setActive(false);
  };
  const menuActive = () => {
    setActive(true);
  };

  return (
    <>
      <Navigations className={active ? 'navigation active' : 'navigation'}>
        <NavItems className="nav-items">
          <CloseIconNav onClick={menuDisActive} />
          <NavigationAnchor to="/home" onClick={menuDisActive}>
            <HomeIconNav />
            Community
          </NavigationAnchor>
          <NavigationAnchor to="/doctors" onClick={menuDisActive}>
            <Diversity1IconNav />
            Doctors
          </NavigationAnchor>
          <NavigationAnchor to="/" onClick={menuDisActive}>
            <HomeRepairServiceIconNav />
            Services
          </NavigationAnchor>
        </NavItems>
      </Navigations>
      <AppsIconNav onClick={menuActive} />
    </>
  );
};
