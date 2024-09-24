import styles from './SearchBar.module.css';
import SearchIcon from '../../assets/icon/search.png';

const SearchBar = () => {
    return (
        <form>
            <button type='submit' className={styles.button}>
                <img src={SearchIcon} alt='search icon'></img>
            </button>
            <input type='text' id={styles.searchBar} placeholder='Search users' />
        </form>
    );
};

export default SearchBar;