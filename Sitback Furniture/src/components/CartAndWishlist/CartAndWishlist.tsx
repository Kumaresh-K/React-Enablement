import styles from './CartAndWishlist.module.scss'
import PanelHeader from '../PanelHeader/PanelHeader'
import ProductPanel from '../ProductPanel/ProductPanel'

const CartAndWishlist = () => {
  return (
    <div className={styles.cartAndWishlist}>
      <PanelHeader />
      <ProductPanel />
    </div>
  )
}

export default CartAndWishlist
