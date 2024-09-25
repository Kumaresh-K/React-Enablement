import styles from './Header.module.css';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';
/**
 * Represents a header component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.FunctionComponent} props.reqContent - The function that requires the content based on the navgation menu.
 * @returns {React.ReactElement} A header element.
 */

const Header = ({reqContent}) => {
    return (
        <header>
            <p className={styles.headerText}>Users</p>
            <div className={styles.topBar}>
                <SearchBar />
                <NavBar reqContent={reqContent}></NavBar>
            </div>
        </header>
    );
};

export default Header;