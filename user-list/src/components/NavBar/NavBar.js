import './NavBar.css';
import NewUsers from '../../pages/NewUsers/NewUsers';
import OtherPage from '../../pages/OtherPage/OtherPage';
import NavButton from '../NavButton/NavButton';
import { useState } from 'react';

//Navigation menu with the respective menu content
const navigationMenu = [
    {menu:'Reputation', content:<OtherPage></OtherPage>},
    {menu:'New users', content:<NewUsers></NewUsers>},
    {menu:'Voters', content:<OtherPage></OtherPage>},
    {menu:'Editors', content:<OtherPage></OtherPage>},
    {menu:'Moderators', content:<OtherPage></OtherPage>},
];

/**
 * Represents a navigation menu component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.FunctionComponent} props.reqContent - The function that requires the content based on the navgation menu.
 * @returns {React.ReactElement} A navigation bar element.
 */

const NavBar = ({reqContent}) => {
    const [activeComponent, setActiveComponent] = useState('New users');
    
    function handleClick(selectedMenu) {
        setActiveComponent(selectedMenu.menu);
        reqContent(selectedMenu.content);
    }

    const navItems = navigationMenu.map((menuItem)=>{
       return <NavButton 
        key={menuItem.menu}
        {...menuItem} 
        isActive={menuItem.menu===activeComponent} 
        handleClick={()=>handleClick(menuItem)}>    
        </NavButton>
    })

    return (
        <ul className='nav-bar'>
            {navItems}
        </ul>
    );
};

export default NavBar;