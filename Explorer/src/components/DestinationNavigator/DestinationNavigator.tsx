import PrimaryButton from "../PrimaryButton/PrimaryButton";
import styles from "./DestinationNavigator.module.scss";
import useNavigationService from "../../services/NavigationService.tsx";
import destinationChoices from "../../assets/data/placeDetails.json";
import { useRef } from "react";

/**
 * Represents a destination navigation component.
 *
 * @component
 * @returns {React.ReactElement} A navigation element.
 */

const choiceList = destinationChoices.map((destination, key) => {
  return (
    <option value={destination.city} key={key}>
      {destination.city}
    </option>
  );
});

export const dropDownOptions = (
  <>
    <option value="Choose" disabled>
      Choose
    </option>
    {choiceList}
  </>
);

const DestinationNavigator = (): React.ReactElement => {
  const destination = useRef("");
  const navigateToPage = useNavigationService();
  const handleClick = (place: string) => {
    navigateToPage(place);
  };

  return (
    <form className={styles.destinationSelector}>
      <select
        defaultValue={"Choose"}
        className={styles.destinationDropdown}
        onChange={(event) => {
          destination.current = event.target.value;
        }}
      >
        {dropDownOptions}
      </select>
      <PrimaryButton
        buttonContent="EXPLORE"
        handleClick={() => {
          handleClick(destination.current);
        }}
      />
    </form>
  );
};

export default DestinationNavigator;
