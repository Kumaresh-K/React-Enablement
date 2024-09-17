import './Header.css';
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
            <p id='app-name'>Users</p>
            <div className='container flex center'>
                <form>
                <button type='submit' className='submit-button'>
                    <img src={SearchIcon} alt='search icon'></img>
                </button>
                <input type='text' id='search-bar' placeholder='Search users' />
                </form>
                <NavBar reqContent={reqContent}></NavBar>
            </div>
        </header>
    );
};

export default Header;