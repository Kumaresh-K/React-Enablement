import styles from './OrderedProductList.module.scss'
import useLocalStorage from '../../hooks/useLocalStroage'
import OrderedProductCard from '../../components/OrderedProductCard/OrderedProductCard'

/**
 * Represents a ordered furniture list component.
 *
 * @component
 * @returns {React.ReactElement} the list of ordered furniture cards element.
 */

const OrderedProductList = (): React.ReactElement => {
  const [cartItems] = useLocalStorage('order')

  const OrderedFurnitureList = Object.keys(cartItems || {}).map((id) => (
    <OrderedProductCard furniture={cartItems[id]} key={id} />
  ))
  return (
    <section className={styles.orderedFurnitureList}>
      {OrderedFurnitureList}
    </section>
  )
}

export default OrderedProductList
