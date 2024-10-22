import styles from "./SuccessBanner.module.scss";
import { successBannerProps } from "../../pages/HomePage/HomePagePropDefinitions";

/**
 * Represents a pop up message when user submit the form.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the user.
 * @param {string} props.startingPoint - The starting point of the journey.
 * @param {string} props.endingPoint - The ending point of the journey.
 * @returns {React.ReactElement} A Success banner element.
 */

const SuccessBanner = ({
  name,
  startingPoint,
  endingPoint,
}: successBannerProps): React.ReactElement => {
  return (
    <div className={styles.successBanner}>
      Thank You <strong>{name}</strong> for expressing your interest in
      travelling with us. Our Sales team will get back with the best packages
      from <strong>{startingPoint}</strong> to
      <strong> {endingPoint}</strong>.
    </div>
  );
};

export default SuccessBanner;
