import ExplorerLogo from "../../assets/logo.png";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.scss";
import { Outlet, useNavigate } from "react-router-dom";

/**
 * Represents a Header component that contains logo and nav bar.
 *
 * @component
 * @returns {React.ReactElement} a header element.
 */

const Header = (): React.ReactElement => {
  let navigate = useNavigate();
  return (
    <>
      <header className={styles.topBar}>
        <img
          src={ExplorerLogo}
          alt="explorer logo"
          onClick={() => {
            navigate("/places");
          }}
        />
        <NavBar />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
