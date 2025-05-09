import { ProductPriceProps } from '../../types/ShoppingPageProps'
import { numberWithCommas } from '../../utils/commonUtils'
import styles from './ProductPrice.module.scss'

/**
 * Represents a price component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.currencySymbol - The symbol of the currency.
 * @param {string} props.price - The price.
 * @returns {React.ReactElement} A price element.
 */

const ProductPrice = ({
  currencySymbol,
  price,
}: ProductPriceProps): React.ReactElement => {
  return (
    <span className={styles.price}>
      <span className={styles.rupeeFont}>{currencySymbol}</span>{' '}
      {numberWithCommas(price)}
    </span>
  )
}

export default ProductPrice
