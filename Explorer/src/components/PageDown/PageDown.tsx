import styles from "./PageDown.module.scss";
import maintenanceImage from "../../assets/Maintenance.jpg";
import { symlink } from "fs";

const PageDown = () => {
  return (
    <div className={styles.pageDownContent}>
      <img src={maintenanceImage} alt="Maintenance Logo" />
      <div className={styles.pageNotAvailable}>Page Unavailable</div>
      <div className={styles.pageNotAvailableInfo}>
        We're sorry, but this page is currently down. Please try again later.
      </div>
    </div>
  );
};

export default PageDown;
