import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { NAVIGATION_DATA } from "../../constants";
/**
 * Represents the navigation bar component containing menu items.
 *
 * @component
 * @returns {JSX.Element} The navigation bar element with menu links.
 */

const NavBar = (): JSX.Element => {
  const menuList = NAVIGATION_DATA.map((menuItem, key) => {
    return (
      <li className={styles.menuItem} key={key}>
        <NavLink to={menuItem.menuNavigationPath}>{menuItem.menuName}</NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul className={styles.menu}>{menuList}</ul>
    </nav>
  );
};

export default NavBar;
