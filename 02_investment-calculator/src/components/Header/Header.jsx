import styles from './Header.module.css';
import Logo from '../../assets/investment-calculator-logo.png';

const Header = () => {
    return(
        <header id={styles.header}>
            <img src={Logo} alt='inverstment logo image'/>
            <h2>Investment Calculator</h2>
        </header>
    );
};

export default Header;