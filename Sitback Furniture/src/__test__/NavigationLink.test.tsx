import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NavigationLink from '../components/NavigationLink/NavigationLink'

describe('NavigationLink Component', () => {
  const category = 'chairs'

  const renderComponent = (initialRoute = '/') =>
    render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <NavigationLink category={category} />
      </MemoryRouter>
    )

  it('renders the navigation link correctly', () => {
    renderComponent()
    const linkElement = screen.getByRole('link', {
      name: category.toUpperCase(),
    })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', `/categories/${category}`)
  })

  it('applies the active class when the link is active', () => {
    renderComponent(`/categories/${category}`)
    const linkElement = screen.getByRole('link', {
      name: category.toUpperCase(),
    })
    expect(linkElement).toHaveClass('activeLink')
  })

  it('does not apply the active class when the link is not active', () => {
    renderComponent()
    const linkElement = screen.getByRole('link', {
      name: category.toUpperCase(),
    })
    expect(linkElement).not.toHaveClass('activeLink')
  })
})
