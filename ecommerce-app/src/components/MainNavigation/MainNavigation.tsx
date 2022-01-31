import { NavLink } from 'react-router-dom';

import styles from './MainNavigation.module.scss';

function MainNavigation() {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/shop'
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/pages'
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              PAGES
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/lookbook'
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              LOOKBOOK
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/brands'
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              BRANDS
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default MainNavigation;
