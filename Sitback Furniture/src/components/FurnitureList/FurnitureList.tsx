import { FurnitureListProps } from '../../pages/ShoppingPage/ShoppingPageProps'
import FurnitureCard from '../FurnitureCard/FurnitureCard'
import CartAndWishlist from '../CartAndWishlist/CartAndWishlist'
import styles from './FurnitureList.module.scss'
import { CustomerShoppingContext } from '../../pages/ShoppingPage/ShoppingContext'
import { useContext } from 'react'
import classNames from 'classnames'

/**
 * Represents a Furniture List component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.furnitures - The list of furnitures details.
 * @returns {React.ReactElement} the list of furniture cards element.
 */

const FurnitureList = ({
  furnitures,
}: FurnitureListProps): React.ReactElement => {
  const { isTabVisible } = useContext(CustomerShoppingContext)

  const availableFurniture = furnitures.map((furniture, key) => (
    <FurnitureCard furniture={furniture} key={key} />
  ))

  return (
    <main className={styles.shopping}>
      <section
        className={classNames(styles.furnitureListHero, {
          [styles.showTab]: isTabVisible,
        })}
      >
        <div className={styles.whiteBlock}></div>
        <div
          className={classNames(styles.furnitureList, {
            [styles.threeColumnList]: isTabVisible,
          })}
        >
          {availableFurniture}
        </div>
      </section>
      {isTabVisible && <CartAndWishlist />}
    </main>
  )
}

export default FurnitureList
