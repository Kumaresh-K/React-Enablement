import { ProductPriceProps } from '../../pages/ShoppingPage/ShoppingPageProps'
import { numberWithCommas } from '../../utils/commonUtils'
import styles from './ProductPrice.module.scss'

const ProductPrice = ({ currencySymbol, price }: ProductPriceProps) => {
  return (
    <span className={styles.price}>
      <span className={styles.rupeeFont}>{currencySymbol}</span>{' '}
      {numberWithCommas(price)}
    </span>
  )
}

export default ProductPrice
