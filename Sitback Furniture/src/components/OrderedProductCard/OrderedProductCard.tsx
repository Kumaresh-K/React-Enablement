import styles from './OrderedProductCard.module.scss'
import { FurnitureCardProps } from '../../types/ShoppingPageProps'
import ProductPrice from '../ProductPrice/ProductPrice'
import ImageWithDefault from '../ImageWithDefault/ImageWithDefault'
import PlaceholderPic from '../../assets/Image_not_available.jpg'

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
      <ImageWithDefault
        srcImage={furniture.photo}
        altInfo={`${furniture.name} picture`}
        defaultSrc={PlaceholderPic}
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
