import { useContext, useState } from 'react'
import styles from './ProductCardQuantity.module.scss'
import { CustomerShoppingContext } from '../../pages/ShoppingPage/ShoppingContext'
import { PANELS } from '../../constants'
import {
  FurnitureStructure,
  ProductCardQuantityProps,
} from '../../pages/ShoppingPage/ShoppingPageProps'

/**
 * Represents a card quantity component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.furnitureID - The id of the furniture.
 * @returns {React.ReactElement} A quantity controlling element.
 */

const ProductCardQuantity = ({
  furnitureID,
}: ProductCardQuantityProps): React.ReactElement => {
  const {
    selectedTab,
    cartItems,
    setCartItems,
    wishlistItems,
    setWishlistItems,
  } = useContext(CustomerShoppingContext)

  const [count, setCount] = useState(
    selectedTab === PANELS[0].id
      ? cartItems[furnitureID]?.quantity ?? 0
      : wishlistItems[furnitureID]?.quantity ?? 0
  )

  const setProductQuantity = (value: number) => {
    const updateItems =
      selectedTab === PANELS[0].id ? setCartItems : setWishlistItems
    updateItems((prevItems: FurnitureStructure) => {
      const updatedItems = { ...prevItems }
      updatedItems[furnitureID].quantity += value
      return updatedItems
    })
    if (count + value > 0) {
      setCount((prevCount: number) => prevCount + value)
    } else {
      updateItems((prevItems: FurnitureStructure) => {
        const updatedItems = { ...prevItems }
        delete updatedItems[furnitureID]
        return updatedItems
      })
    }
  }

  return (
    <span className={styles.productQuantity}>
      <button
        onClick={() => {
          setProductQuantity(-1)
        }}
        className={styles.negative}
      >
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button
        onClick={() => {
          setProductQuantity(+1)
        }}
        className={styles.positive}
      >
        +
      </button>
    </span>
  )
}

export default ProductCardQuantity
