import styles from './PageDown.module.scss'
import maintenanceImage from '../../assets/Maintenance.jpg'
import { PAGE_UNAVAILABLE, REGRET_MESSAGE } from '../../constants'

/**
 * Represents a page down component.
 *
 * @component
 * @returns {React.ReactElement} A page down element.
 */

const PageDown = (): React.ReactElement => {
  return (
    <div className={styles.pageDownContent}>
      <img src={maintenanceImage} alt='Maintenance Logo' />
      <div className={styles.pageNotAvailable}>{PAGE_UNAVAILABLE}</div>
      <div className={styles.pageNotAvailableInfo}>{REGRET_MESSAGE}</div>
    </div>
  )
}

export default PageDown
