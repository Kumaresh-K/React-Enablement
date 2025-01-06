import styles from './EmptyCart.module.scss'
import emptyBox from '../../assets/empty-box.png'

/**
 * Represents a Empty cart component.
 *
 * @component
 * @param {Object} props - The component props.
 * @returns {React.ReactElement} A empty cart element.
 */

const EmptyCart = (): React.ReactElement => {
  return (
    <div className={styles.emptyCart}>
      <img src={emptyBox} alt='Empty cart image' />
      <span>Oops.. It's Empty</span>
    </div>
  )
}

export default EmptyCart
