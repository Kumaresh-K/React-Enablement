import styles from "./Button.module.scss";
import { ButtonProp } from "../../pages/HomePage/HomePagePropDefinitions";

/**
 * Represents a user profile component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.buttonConent - The name of the button.
 * @param {React.MouseEventHandler<HTMLButtonElement>} props.handleClick - function for button click action
 * @returns {React.ReactElement} A button element.
 */

const Button = ({
  buttonContent,
  handleClick,
}: ButtonProp): React.ReactElement => {
  return (
    <button onClick={handleClick} className={styles.Button}>
      {buttonContent}
    </button>
  );
};

export default Button;
