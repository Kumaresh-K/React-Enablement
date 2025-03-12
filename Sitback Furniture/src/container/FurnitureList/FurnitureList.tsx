import { FurnitureListProps } from '../../types/ShoppingPageProps'
import FurnitureCard from '../../components/FurnitureCard/FurnitureCard'
import CartAndWishlist from '../../components/CartAndWishlist/CartAndWishlist'
import styles from './FurnitureList.module.scss'
import { CustomerShoppingContext } from '../../context/ShoppingContext'
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

  const availableFurniture = Object.values(furnitures).map((furniture, key) => {
    return <FurnitureCard furniture={furniture} key={key} />
  })

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
