import { useContext, useEffect, useState } from 'react'
import ProductPanelCard from '../ProductPanelCard/ProductPanelCard'
import styles from './ProductPanel.module.scss'
import { CustomerShoppingContext } from '../../pages/ShoppingPage/ShoppingContext'
import { PANELS } from '../../constants'
import EmptyCart from '../EmptyCart/EmptyCart'
import { FurnitureStructure } from '../../pages/ShoppingPage/ShoppingPageProps'

/**
 * Represents a Cart/Wishlist product panel component.
 *
 * @component
 * @returns {React.ReactElement} A product panel element.
 */

const ProductPanel = (): React.ReactElement => {
  const { setIsTabVisible, selectedTab, cartItems, wishlistItems } = useContext(
    CustomerShoppingContext
  )
  const [panelItems, setPanelItems] = useState<FurnitureStructure>({})

  useEffect(() => {
    const currentTabItems =
      selectedTab === PANELS[0].id ? cartItems : wishlistItems
    setPanelItems(currentTabItems)
    if (
      Object.keys(cartItems).length === 0 &&
      Object.keys(wishlistItems).length === 0
    ) {
      setIsTabVisible(false)
    }
  }, [selectedTab, cartItems, wishlistItems])

  const userFavouriteProducts = Object.keys(panelItems).length ? (
    Object.keys(panelItems).map((key: string) => (
      <ProductPanelCard furniture={panelItems[Number(key)]} key={key} />
    ))
  ) : (
    <EmptyCart />
  )

  return (
    <>
      <div className={styles.userProductList}>{userFavouriteProducts}</div>
    </>
  )
}

export default ProductPanel
