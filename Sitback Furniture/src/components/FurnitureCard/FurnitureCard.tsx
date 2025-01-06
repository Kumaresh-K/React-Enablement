import { useContext } from 'react'
import {
  FurnitureCardProps,
  FurnitureStructure,
} from '../../pages/ShoppingPage/ShoppingPageProps'
import styles from './FurnitureCard.module.scss'
import Button from '../Button/Button'
import GuaranteeBadge from '../GuaranteeBadge/GuaranteeBadge'
import ProductPrice from '../ProductPrice/ProductPrice'
import { CustomerShoppingContext } from '../../pages/ShoppingPage/ShoppingContext'
import { ADD_TO_CART, ADD_TO_WISHLIST, PANELS } from '../../constants'

/**
 * Represents a furniture card component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.furniture - The details of the furniture.
 * @returns {React.ReactElement} A furniture card element.
 */

const FurnitureCard = ({
  furniture,
}: FurnitureCardProps): React.ReactElement => {
  const {
    isTabVisible,
    setIsTabVisible,
    setCartItems,
    setWishlistItems,
    setSelectedTab,
  } = useContext(CustomerShoppingContext)

  const addItemToPanel = (
    setPanelItems: React.Dispatch<any>,
    panel: string
  ) => {
    setPanelItems((prevPanelItems: FurnitureStructure) => {
      return {
        ...prevPanelItems,
        [furniture.id]: { ...furniture, quantity: 1 },
      }
    })
    if (!isTabVisible) {
      setIsTabVisible(true)
      setSelectedTab(panel)
    }
  }

  return (
    <div className={styles.furniture}>
      <img
        src={furniture.photo}
        alt={`${furniture.name} picture`}
        className={styles.furnitureImage}
      />
      <div className={styles.furnitureInfo}>
        <span className={styles.model}>{furniture.name}</span>
        <ProductPrice currencySymbol={'₹'} price={furniture.price} />
      </div>
      <div className={styles.aboutFurniture}>{furniture.description}</div>
      <GuaranteeBadge years={furniture.guarantee} />
      <div className={styles.underline}></div>
      <div className={styles.furnitureActionButtons}>
        <Button
          name={ADD_TO_WISHLIST}
          handleClick={() => addItemToPanel(setWishlistItems, PANELS[1].id)}
          secondary={true}
        />
        <Button
          name={ADD_TO_CART}
          handleClick={() => addItemToPanel(setCartItems, PANELS[0].id)}
        />
      </div>
    </div>
  )
}

export default FurnitureCard
