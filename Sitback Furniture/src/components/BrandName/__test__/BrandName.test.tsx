import { render, screen, fireEvent } from '@testing-library/react'
import { useNavigate } from 'react-router-dom'
import BrandName from '../BrandName'
import { BRAND_NAME } from '../../../constants'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))

describe('BrandName Component', () => {
  const mockNavigate = jest.fn()

  beforeEach(() => {
    ;(useNavigate as jest.Mock).mockReturnValue(mockNavigate)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the component correctly', () => {
    render(<BrandName />)
    expect(screen.getByText(BRAND_NAME)).toBeInTheDocument()
  })

  it('displays the correct brand name', () => {
    render(<BrandName />)
    const brandNameElement = screen.getByText(BRAND_NAME)
    expect(brandNameElement).toHaveTextContent(BRAND_NAME)
  })

  it('navigates to the root path when clicked', () => {
    render(<BrandName />)
    const brandNameElement = screen.getByText(BRAND_NAME)
    fireEvent.click(brandNameElement)
    expect(mockNavigate).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenCalledWith('/')
  })
})
