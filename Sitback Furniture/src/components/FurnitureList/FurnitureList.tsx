import styles from './FurnitureList.module.scss'
import { FurnitureListProps } from '../../pages/ShoppingPage/ShoppingPageProps'
import FurnitureCard from '../FurnitureCard/FurnitureCard'
import ProductPanel from '../ProductPanel/ProductPanel'
import CartAndWishlist from '../CartAndWishlist/CartAndWishlist'

const FurnitureList = ({ furnitures }: FurnitureListProps) => {
  const availableFurniture = furnitures.map((furniture, key) => {
    return <FurnitureCard furniture={furniture} key={key} />
  })

  return (
    <main className={styles.shopping}>
      <section className={styles.furnitureListHero}>
        <div className={styles.whiteBlock}></div>
        <div className={styles.furnitureList}>{availableFurniture}</div>
      </section>
      <CartAndWishlist />
    </main>
  )
}
export default FurnitureList
