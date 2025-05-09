import styles from './CartAndWishlist.module.scss'
import PanelHeader from '../../components/PanelHeader/PanelHeader'
import ProductPanel from '../../components/ProductPanel/ProductPanel'
import { PANELS } from '../../constants'
import PaymentSection from '../../components/PaymentSection/PaymentSection'
import { useContext, useEffect, useState } from 'react'
import { CustomerShoppingContext } from '../../context/ShoppingContext'

/**
 * Represents a Cart/Wishlist component.
 *
 * @component
 * @returns {React.ReactElement} A Cart/Wishlist element.
 */

const CartAndWishlist = (): React.ReactElement => {
  const { selectedTab, cartItems, wishlistItems } = useContext(
    CustomerShoppingContext
  )
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const currentTabItems =
      selectedTab === PANELS[0].id ? cartItems : wishlistItems
    const itemPrices = Object.values(currentTabItems).map(
      (item: any) => Number(item.price) * Number(item.quantity)
    )
    setTotal(itemPrices.reduce((total, num) => total + num, 0))
  }, [selectedTab, cartItems, wishlistItems])

  return (
    <div className={styles.cartAndWishlist}>
      <PanelHeader />
      <ProductPanel />
      {selectedTab === PANELS[0].id && <PaymentSection amount={total} />}
    </div>
  )
}

export default CartAndWishlist
