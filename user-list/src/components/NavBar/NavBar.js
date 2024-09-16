import './NavBar.css';
import NavButton from "../NavButton/NavButton";

const navigationMenu = [
    {id:1, menu:'Reputation'},
    {id:2, menu:'New users'},
    {id:3, menu:'Voters'},
    {id:4, menu:'Editors'},
    {id:5, menu:'Moderators'},
];

const NavBar = () => {
    let navItems = navigationMenu.map((menuItem)=>{
       return <NavButton {...menuItem}></NavButton>
    })
    return (
        <ul className='nav-bar'>
            {navItems}
        </ul>
    );
};

export default NavBar;