import { ProductPanelCardProps } from '../../pages/ShoppingPage/ShoppingPageProps'
import ProductCardQuantity from '../ProductCardQuantity/ProductCardQuantity'
import ProductPrice from '../ProductPrice/ProductPrice'
import styles from './ProductPanelCard.module.scss'

const ProductPanelCard = ({
  id,
  name,
  photo,
  price,
}: ProductPanelCardProps) => {
  return (
    <div className={styles.userProductCard}>
      <div className={styles.productImageContainer}>
        <img src={photo} alt='dummy image' />
      </div>
      <div className={styles.panelCard}>
        <div className={styles.productDetails}>
          <div className={styles.productModel}>{name}</div>
          <ProductPrice currencySymbol={'₹'} price={price} />
          <ProductCardQuantity />
        </div>
      </div>
    </div>
  )
}

export default ProductPanelCard
