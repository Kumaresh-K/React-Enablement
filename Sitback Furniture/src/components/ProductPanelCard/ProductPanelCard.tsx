import { useContext } from 'react'
import { ADD_TO_CART, PANELS } from '../../constants'
import { CustomerShoppingContext } from '../../pages/ShoppingPage/ShoppingContext'
import {
  FurnitureStructure,
  ProductPanelCardProps,
} from '../../pages/ShoppingPage/ShoppingPageProps'
import Button from '../Button/Button'
import ProductCardQuantity from '../ProductCardQuantity/ProductCardQuantity'
import ProductPrice from '../ProductPrice/ProductPrice'
import styles from './ProductPanelCard.module.scss'

/**
 * Represents a product panel card component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.furniture - The furniture details that need to be shown in the card
 * @returns {React.ReactElement} A product panel card element.
 */

const ProductPanelCard = ({
  furniture,
}: ProductPanelCardProps): React.ReactElement => {
  const { selectedTab, cartItems, setCartItems, setWishlistItems } = useContext(
    CustomerShoppingContext
  )

  return (
    <div className={styles.userProductCard}>
      <div className={styles.productImageContainer}>
        <img src={furniture.photo} alt={`${furniture.name} image`} />
      </div>
      <div className={styles.panelCard}>
        <div className={styles.productDetails}>
          <div className={styles.productModel}>{furniture.name}</div>
          <ProductPrice currencySymbol={'₹'} price={furniture.price} />
          {selectedTab == PANELS[0].id ? (
            <ProductCardQuantity furnitureID={furniture.id} />
          ) : (
            <Button
              name={ADD_TO_CART}
              handleClick={() => {
                if (
                  Object.keys(cartItems).indexOf(String(furniture.id)) === -1
                ) {
                  setCartItems((prevCartItems: FurnitureStructure) => {
                    return {
                      ...prevCartItems,
                      [furniture.id]: { ...furniture },
                    }
                  })
                }
                setWishlistItems((prevWishlistItems: FurnitureStructure) => {
                  const updatedItems = { ...prevWishlistItems }
                  delete updatedItems[furniture.id]
                  return updatedItems
                })
              }}
            ></Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductPanelCard
