import styles from './Button.module.scss'
import { ButtonProps } from '../../pages/HomePage/HomePageProps'

/**
 * Represents a button component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.name - The name for the button.
 * @param {Function} props.handleClick - The biography of the user.
 * @returns {React.ReactElement} A button element.
 */

const Button = ({ name, handleClick }: ButtonProps): React.ReactElement => {
  return (
    <button onClick={handleClick} className={styles.button}>
      {name}
    </button>
  )
}

export default Button
