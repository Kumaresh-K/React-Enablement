import Button from "../Button/Button";
import styles from "./DestinationNavigator.module.scss";
import useNavigationService from "../../services/NavigationService";
import { useRef } from "react";
import DestinationDropdownInput from "../DestinationDropdownInput/DestinationDropdownInput";

/**
 * Represents a destination navigation component.
 *
 * @component
 * @returns {React.ReactElement} A navigation element.
 */

const DestinationNavigator = (): React.ReactElement => {
  const destination = useRef("");
  const navigateToPage = useNavigationService();
  const handleClick = (place: string) => {
    navigateToPage(place);
  };

  return (
    <form className={styles.destinationSelector}>
      <DestinationDropdownInput
        id="startingPoint"
        className={styles.destinationDropdown}
        onChange={(e) => {
          destination.current = e.target.value;
        }}
      />
      <Button
        buttonContent="EXPLORE"
        handleClick={() => {
          handleClick(destination.current);
        }}
      />
    </form>
  );
};

export default DestinationNavigator;
