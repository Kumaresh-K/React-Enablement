import styles from "./PlaceFocusPromo.module.scss";
import { placeFocusPromoProps } from "../../pages/DestinationProfile/DestinationProfileProps";
import { formatString } from "../../services/PlaceServices";

/**
 * Represents a detailed page of particular destination component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.destination - Object of the destination.
 * @returns {React.ReactElement} A detailed destination element.
 */

const PlaceFocusPromo = ({
  destination,
}: placeFocusPromoProps): React.ReactElement => {
  return (
    <>
      <section className={styles.placeBanner}>
        <div className={styles.placeContent}>
          <div className={styles.placeName}>{destination.city}</div>
          <div className={styles.catchPhrase}>{destination.place}</div>
          <div className={styles.temperature}>
            32<span className={styles.weight}>°</span>C
          </div>
        </div>
        <div className={styles.placeCoverImage}>
          <img
            src={`/src/assets/${destination.city.toLowerCase()}.png`}
            alt={`${destination} cover image`}
          />
        </div>
      </section>
      <div
        dangerouslySetInnerHTML={{
          __html: formatString(destination.fullDescription),
        }}
        className={styles.description}
      />
    </>
  );
};

export default PlaceFocusPromo;
