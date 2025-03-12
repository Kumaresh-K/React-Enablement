import { render, screen, fireEvent } from '@testing-library/react'
import { CustomerShoppingContext } from '../pages/ShoppingPage/ShoppingContext'
import ProductPanelCard from '../components/ProductPanelCard/ProductPanelCard'
import { PANELS, ADD_TO_CART } from '../constants'
import { ProductPanelCardProps } from '../pages/ShoppingPage/ShoppingPageProps'

describe('ProductPanelCard Component', () => {
  const mockFurniture = {
    id: 1,
    name: 'Modern Sofa',
    photo: 'sofa.jpg',
    price: '15000',
    description: 'A comfortable modern sofa',
    quantity: 1,
    guarantee: 2,
    rating: 4.3,
  }

  const mockContext = {
    selectedTab: PANELS[1].id,
    cartItems: {},
    setCartItems: jest.fn(),
    setWishlistItems: jest.fn(),
  }

  const renderComponent = (props: Partial<ProductPanelCardProps> = {}) => {
    return render(
      <CustomerShoppingContext.Provider value={mockContext}>
        <ProductPanelCard furniture={{ ...mockFurniture, ...props }} />
      </CustomerShoppingContext.Provider>
    )
  }

  it('renders the product details correctly', () => {
    renderComponent()
    expect(
      screen.getByAltText(`${mockFurniture.name} image`)
    ).toBeInTheDocument()
    expect(screen.getByText(mockFurniture.name)).toBeInTheDocument()
    expect(screen.getByText(/15,000/i)).toBeInTheDocument()
  })

  it('renders "ADD TO CART" button when on wishlist tab', () => {
    renderComponent()
    const addToCartButton = screen.getByRole('button', { name: ADD_TO_CART })
    expect(addToCartButton).toBeInTheDocument()
  })

  it('does not render quantity component when on wishlist tab', () => {
    renderComponent()
    expect(
      screen.queryByTestId('product-card-quantity')
    ).not.toBeInTheDocument()
  })

  it('renders quantity component when on cart tab', () => {
    render(
      <CustomerShoppingContext.Provider
        value={{ ...mockContext, selectedTab: PANELS[0].id }}
      >
        <ProductPanelCard furniture={mockFurniture} />
      </CustomerShoppingContext.Provider>
    )
    expect(screen.getByText('+')).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: ADD_TO_CART })
    ).not.toBeInTheDocument()
  })

  it('adds item to cart and removes it from wishlist on button click', () => {
    renderComponent()
    const addToCartButton = screen.getByRole('button', { name: ADD_TO_CART })
    fireEvent.click(addToCartButton)
    expect(mockContext.setCartItems).toHaveBeenCalledWith(expect.any(Function))
    expect(mockContext.setWishlistItems).toHaveBeenCalledWith(
      expect.any(Function)
    )
  })
})
