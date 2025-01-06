import React, { createContext, useState } from 'react'
import useLocalStorage from '../../hooks/useLocalStroage'

export const CustomerShoppingContext = createContext<any>(null)

const ShoppingContext = ({ children }: { children: React.ReactNode }) => {
  const [isTabVisible, setIsTabVisible] = useLocalStorage(
    'tabVisibility',
    false
  )
  const [selectedTab, setSelectedTab] = useState('cart')
  const [cartItems, setCartItems] = useLocalStorage('cart', {})
  const [wishlistItems, setWishlistItems] = useLocalStorage('wishlist', {})
  return (
    <CustomerShoppingContext.Provider
      value={{
        isTabVisible,
        setIsTabVisible,
        selectedTab,
        setSelectedTab,
        cartItems,
        setCartItems,
        wishlistItems,
        setWishlistItems,
      }}
    >
      {children}
    </CustomerShoppingContext.Provider>
  )
}

export default ShoppingContext
