import styles from './Button.module.scss'
import { ButtonProps } from '../../types/HomePageProps'

/**
 * Represents a primary button component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.name - The name for the button.
 * @param {Function} props.handleClick - The biography of the user.
 * @returns {React.ReactElement} A button element.
 */

const Button = ({
  name,
  handleClick,
  secondary,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      onClick={handleClick}
      className={secondary ? styles.secondaryButton : styles.button}
    >
      {name}
    </button>
  )
}

export default Button
