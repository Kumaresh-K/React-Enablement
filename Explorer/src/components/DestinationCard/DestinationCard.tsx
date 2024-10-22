import styles from "./DestinationCard.module.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { DESTINATION_BUTTON_NAME } from "../../constants/index.tsx";
import useNavigationService from "../../services/NavigationService.tsx";
import { destinationCardProps } from "../../pages/HomePage/HomePagePropDefinitions";
import { formatString } from "../../services/PlaceServices.tsx";

/**
 * Represents Destination card that contains the details of the single destination.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.catchPhrase - Single line about the destination
 * @param {string} props.city - name of the destination.
 * @param {string} props.shortDescription - short description about the place.
 * @returns {React.ReactElement} A single destination element.
 */

const DestinationCard = ({
  catchPhrase,
  city,
  shortDescription,
}: destinationCardProps): React.ReactElement => {
  const navigatePage = useNavigationService();
  return (
    <div className={styles.destinationCard}>
      <img src={`/src/assets/${city}.png`} alt={city + " cover image"} />
      <div className={styles.catchPhrase}>{catchPhrase}</div>
      <div className={styles.city}>{city}</div>
      <div className={styles.shortDescription}>{formatString(shortDescription)}</div>
      <PrimaryButton
        buttonContent={DESTINATION_BUTTON_NAME}
        handleClick={(e) => {
          e.preventDefault();
          navigatePage(city);
        }}
      />
    </div>
  );
};

export default DestinationCard;
