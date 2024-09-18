import styles from './NavButton.module.css';

/**
 * Represents a particular menu in navgation bar component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.id - The unique id for each menu.
 * @param {string} props.menu - The name of the menu.
 * @param {boolean} props.isActive - Identifies the selected menu.
 * @param {React.FunctionComponent} props.handleClick - The functional component for the navigation operation
 * @returns {React.ReactElement} A menu element.
 */

const NavButton = ({menu, isActive, handleClick}) => {
    return (
        <li className={isActive?`${styles.menuItem} ${styles.active}`:styles.menuItem} onClick={handleClick}>{menu}</li>
    );
}

export default NavButton;