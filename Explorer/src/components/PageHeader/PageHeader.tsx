import ExplorerLogo from "../../assets/logo.png";
import NavBar from "../NavBar/NavBar";
import styles from "./PageHeader.module.scss";
import { useNavigate } from "react-router-dom";

/**
 * Represents a Page's Header component that contains logo and nav bar.
 *
 * @component
 * @returns {React.ReactElement} a header element.
 */

const PageHeader = (): React.ReactElement => {
  let navigate = useNavigate();
  return (
    <>
      <header className={styles.topBar}>
        <img
          src={ExplorerLogo}
          alt="explorer logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <NavBar />
      </header>
    </>
  );
};

export default PageHeader;
