import styles from './NavBar.module.css';
import { navigationMenu } from '../../constants/index';
import NavButton from '../NavButton/NavButton';
import { useState } from 'react';

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
        <ul className={styles.navBar}>
            {navItems}
        </ul>
    );
};

export default NavBar;