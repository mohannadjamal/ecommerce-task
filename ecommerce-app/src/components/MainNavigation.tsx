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
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              PAGES
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              LOOKBOOK
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
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
