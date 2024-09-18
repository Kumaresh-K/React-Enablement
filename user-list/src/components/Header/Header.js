import styles from './Header.module.css';
import NavBar from '../NavBar/NavBar';
import SearchIcon from '../../assets/icon/search.png';

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
            <p id={styles.appName}>Users</p>
            <div className={styles.container}>
                <form>
                <button type='submit' className={styles.button}>
                    <img src={SearchIcon} alt='search icon'></img>
                </button>
                <input type='text' id={styles.searchBar} placeholder='Search users' />
                </form>
                <NavBar reqContent={reqContent}></NavBar>
            </div>
        </header>
    );
};

export default Header;