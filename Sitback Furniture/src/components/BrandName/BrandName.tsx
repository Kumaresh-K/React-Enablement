import styles from './BrandName.module.scss'
import { useNavigate } from 'react-router-dom'
import { BRAND_NAME } from '../../constants'

/**
 * Represents a brand name of the application.
 *
 * @component
 * @returns {React.ReactElement} A user profile element.
 */

const BrandName = (): React.ReactElement => {
  const navigator = useNavigate()

  return (
    <span className={styles.brandName} onClick={() => navigator('/')}>
      {BRAND_NAME}
    </span>
  )
}

export default BrandName
