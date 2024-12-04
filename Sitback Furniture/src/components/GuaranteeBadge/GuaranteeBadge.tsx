import styles from './GuaranteeBadge.module.scss'
import GuaranteeShield from '../../assets/GrarnateeShield.png'
import { GuaranteeBadgeProps } from '../../pages/ShoppingPage/ShoppingPageProps'

const GuaranteeBadge = ({ years }: GuaranteeBadgeProps) => {
  return (
    <div className={styles.guaranteeInfo}>
      <img src={GuaranteeShield} alt='Guarantee tick' />
      <span className={styles.info}>
        <span className={styles.fontSizeForYear}>{years}</span> {years == 1 ? 'YEAR' : 'YEARS'} GUARANTEE
      </span>
    </div>
  )
}

export default GuaranteeBadge
