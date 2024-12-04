import ProductPanelCard from '../ProductPanelCard/ProductPanelCard'
import styles from './ProductPanel.module.scss'
import { data } from '../../constants'
import PaymentSection from '../PaymentSection/PaymentSection'

const ProductPanel = () => {
  const userFavouriteProducts = data.map((product, key) => {
    return (
      <ProductPanelCard
        id={product.id}
        name={product.name}
        photo={product.photo}
        price={product.price}
        key={key}
      />
    )
  })

  return (
    <>
      <div className={styles.userProductList}>{userFavouriteProducts}</div>
      <PaymentSection amount='51490' />
    </>
  )
}

export default ProductPanel
