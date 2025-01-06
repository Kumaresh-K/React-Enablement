import { render, screen, fireEvent } from '@testing-library/react'
import { CustomerShoppingContext } from '../pages/ShoppingPage/ShoppingContext'
import FurnitureCard from '../components/FurnitureCard/FurnitureCard'
import { ADD_TO_CART, ADD_TO_WISHLIST, PANELS } from '../constants'

jest.mock(
  '../components/ProductPrice/ProductPrice',
  () =>
    ({ currencySymbol, price }: any) =>
      (
        <div>
          {currencySymbol}
          {price}
        </div>
      )
)

jest.mock(
  '../components/GuaranteeBadge/GuaranteeBadge',
  () =>
    ({ years }: any) =>
      <div>Guarantee: {years} years</div>
)

describe('FurnitureCard Component', () => {
  const mockFurniture = {
    id: 1,
    name: 'Wooden Chair',
    photo: 'chair.jpg',
    price: '1500',
    description: 'A comfortable wooden chair.',
    guarantee: 2,
    rating: 4.3,
    quantity: 1,
  }

  const mockSetCartItems = jest.fn()
  const mockSetWishlistItems = jest.fn()
  const mockSetIsTabVisible = jest.fn()
  const mockSetSelectedTab = jest.fn()

  const renderComponent = () =>
    render(
      <CustomerShoppingContext.Provider
        value={{
          isTabVisible: false,
          setIsTabVisible: mockSetIsTabVisible,
          setCartItems: mockSetCartItems,
          setWishlistItems: mockSetWishlistItems,
          setSelectedTab: mockSetSelectedTab,
        }}
      >
        <FurnitureCard furniture={mockFurniture} />
      </CustomerShoppingContext.Provider>
    )

  it('renders the furniture details correctly', () => {
    renderComponent()
    expect(screen.getByAltText('Wooden Chair picture')).toBeInTheDocument()
    expect(screen.getByText('Wooden Chair')).toBeInTheDocument()
    expect(screen.getByText('₹1500')).toBeInTheDocument()
    expect(screen.getByText('A comfortable wooden chair.')).toBeInTheDocument()
    expect(screen.getByText('Guarantee: 2 years')).toBeInTheDocument()
  })

  it('calls setWishlistItems and updates the tab when "Add to Wishlist" button is clicked', () => {
    renderComponent()
    const wishlistButton = screen.getByText(ADD_TO_WISHLIST)
    fireEvent.click(wishlistButton)
    expect(mockSetWishlistItems).toHaveBeenCalledWith(expect.any(Function))
    expect(mockSetIsTabVisible).toHaveBeenCalledWith(true)
    expect(mockSetSelectedTab).toHaveBeenCalledWith(PANELS[1].id)
  })

  it('calls setCartItems and updates the tab when "Add to Cart" button is clicked', () => {
    renderComponent()
    const cartButton = screen.getByText(ADD_TO_CART)
    fireEvent.click(cartButton)
    expect(mockSetCartItems).toHaveBeenCalledWith(expect.any(Function))
    expect(mockSetIsTabVisible).toHaveBeenCalledWith(true)
    expect(mockSetSelectedTab).toHaveBeenCalledWith(PANELS[0].id)
  })

  it('displays the correct action buttons', () => {
    renderComponent()
    expect(screen.getByText(ADD_TO_WISHLIST)).toBeInTheDocument()
    expect(screen.getByText(ADD_TO_CART)).toBeInTheDocument()
  })
})
