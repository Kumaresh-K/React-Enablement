import './NavButton.css';

const NavButton = ({id, menu}) => {
    return (
        <li className='menu-item center' key={id}>{menu}</li>
    );
}

export default NavButton;