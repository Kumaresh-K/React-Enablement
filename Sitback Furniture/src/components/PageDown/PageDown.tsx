import styles from './PageDown.module.scss'
import maintenanceImage from '../../assets/Maintenance.jpg'

/**
 * Represents a page down component.
 *
 * @component
 * @param {Object} props - The component props.
 * @returns {React.ReactElement} A page down element.
 */

const PageDown = (): React.ReactElement => {
  return (
    <div className={styles.pageDownContent}>
      <img src={maintenanceImage} alt='Maintenance Logo' />
      <div className={styles.pageNotAvailable}>Page Unavailable</div>
      <div className={styles.pageNotAvailableInfo}>
        We're sorry, but this page is currently down. Please try again later.
      </div>
    </div>
  )
}

export default PageDown
