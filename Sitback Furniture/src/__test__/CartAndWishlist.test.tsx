import { render, screen } from '@testing-library/react'
import { CustomerShoppingContext } from '../pages/ShoppingPage/ShoppingContext'
import CartAndWishlist from '../components/CartAndWishlist/CartAndWishlist'
import { PANELS } from '../constants'

jest.mock('../components/PanelHeader/PanelHeader', () => () => (
  <div>PanelHeader</div>
))
jest.mock('../components/ProductPanel/ProductPanel', () => () => (
  <div>ProductPanel</div>
))
jest.mock(
  '../components/PaymentSection/PaymentSection',
  () =>
    ({ amount }: { amount: number }) =>
      <div>PaymentSection: ₹{amount}</div>
)

describe('CartAndWishlist Component', () => {
  const mockCartItems = {
    1: { id: 1, name: 'Item 1', price: '100', quantity: 2 },
    2: { id: 2, name: 'Item 2', price: '200', quantity: 1 },
  }

  const mockWishlistItems = {
    3: { id: 3, name: 'Wishlist Item 1', price: '300', quantity: 1 },
  }

  const renderComponent = (
    selectedTab: string,
    cartItems = {},
    wishlistItems = {}
  ) =>
    render(
      <CustomerShoppingContext.Provider
        value={{ selectedTab, cartItems, wishlistItems }}
      >
        <CartAndWishlist />
      </CustomerShoppingContext.Provider>
    )

  it('renders PanelHeader and ProductPanel', () => {
    renderComponent(PANELS[0].id, mockCartItems, mockWishlistItems)
    expect(screen.getByText('PanelHeader')).toBeInTheDocument()
    expect(screen.getByText('ProductPanel')).toBeInTheDocument()
  })

  it('renders PaymentSection when the cart tab is selected', () => {
    renderComponent(PANELS[0].id, mockCartItems, mockWishlistItems)
    expect(screen.getByText('PaymentSection: ₹400')).toBeInTheDocument() // Total: 100*2 + 200*1
  })

  it('does not render PaymentSection when the wishlist tab is selected', () => {
    renderComponent(PANELS[1].id, mockCartItems, mockWishlistItems)
    expect(screen.queryByText(/PaymentSection:/)).not.toBeInTheDocument()
  })

  it('calculates the total correctly for cart items', () => {
    renderComponent(PANELS[0].id, mockCartItems)
    expect(screen.getByText('PaymentSection: ₹400')).toBeInTheDocument()
  })

  it('calculates the total correctly for wishlist items when switched', () => {
    renderComponent(PANELS[1].id, {}, mockWishlistItems)
    expect(screen.queryByText(/PaymentSection:/)).not.toBeInTheDocument()
  })
})
