import styles from './Footer.module.scss'
import { COPYRIGHT } from '../../constants'

/**
 * Represents a footer component.
 *
 * @component
 * @param {Object} props - The component props.
 * @returns {React.ReactElement} A footer element.
 */

const Footer = (): React.ReactElement => {
  return <div className={styles.footer}>{COPYRIGHT}</div>
}

export default Footer
