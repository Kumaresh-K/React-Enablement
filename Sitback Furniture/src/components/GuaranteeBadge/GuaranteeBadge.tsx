import styles from './GuaranteeBadge.module.scss'
import GuaranteeShield from '../../assets/GrarnateeShield.png'
import { GuaranteeBadgeProps } from '../../types/ShoppingPageProps'

/**
 * Represents a guarantee badge component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.years - The number of the year the guarantee apply for furniture.
 * @returns {React.ReactElement} A guarantee badge element.
 */

const GuaranteeBadge = ({ years }: GuaranteeBadgeProps): React.ReactElement => {
  return (
    <div className={styles.guaranteeInfo}>
      <img src={GuaranteeShield} alt='Guarantee tick' />
      <span className={styles.info}>
        <span className={styles.fontSizeForYear}>{years}</span>{' '}
        {years == 1 ? 'YEAR' : 'YEARS'} GUARANTEE
      </span>
    </div>
  )
}

export default GuaranteeBadge
