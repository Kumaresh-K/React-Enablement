import CoverImage from "../../assets/cover.png";
import styles from "./Promo.module.scss";
import DestinationNavigator from "../DestinationNavigator/DestinationNavigator.tsx";

/**
 * Represents a promo component.
 *
 * @component
 * @returns {React.ReactElement} A home banner element.
 */

const Promo = (): React.ReactElement => {
  return (
    <section className={styles.promoBanner}>
      <div className={styles.promoContent}>
        <span className={styles.welcomeText}>WELCOME TO EXPLORER</span>
        <span className={styles.promoStatement}>
          Your Adventure Travel Expert in the
          <span className={styles.bold}> SOUTH</span>
        </span>
      <DestinationNavigator />
      </div>
      <div className={styles.promoCoverImage}>
        <img src={CoverImage} alt="A biker rides the bike in the mountains" />
      </div>
    </section>
  );
};

export default Promo;