import styles from './OrderedProductCard.module.scss'
import { FurnitureCardProps } from '../../pages/ShoppingPage/ShoppingPageProps'
import ProductPrice from '../ProductPrice/ProductPrice'

/**
 * Represents a furniture card component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.furniture - The details of the furniture.
 * @returns {React.ReactElement} A furniture card element.
 */

const OrderedProductCard = ({
  furniture,
}: FurnitureCardProps): React.ReactElement => {
  return (
    <div className={styles.furniture}>
      <img
        src={furniture.photo}
        alt={`${furniture.name} picture`}
        className={styles.furnitureImage}
      />
      <div className={styles.furnitureInfo}>
        <span className={styles.model}>{furniture.name}</span>
        <ProductPrice currencySymbol={'₹'} price={furniture.price} />
      </div>
      <div className={styles.orderDetails}>
        <div className={styles.quantity}>Quantity : {furniture.quantity}</div>
        <div className={styles.description}>{furniture.description}</div>
      </div>
    </div>
  )
}

export default OrderedProductCard
