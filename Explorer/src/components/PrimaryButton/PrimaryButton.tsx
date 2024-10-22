import styles from "./PrimaryButton.module.scss";
import { primaryButtonProp } from "../../pages/HomePage/HomePagePropDefinitions";

/**
 * Represents a user profile component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.buttonConent - The name of the button.
 * @param {React.MouseEventHandler<HTMLButtonElement>} props.handleClick - function for button click action
 * @returns {React.ReactElement} A button element.
 */

const PrimaryButton = ({
  buttonContent,
  handleClick,
  inlineStyle
}: primaryButtonProp): React.ReactElement => {
  return (
    <button onClick={handleClick} className={styles.primaryButton} style={inlineStyle}>
      {buttonContent}
    </button>
  );
};

export default PrimaryButton;
