import { NavLink } from 'react-router-dom'
import styles from './NavigationLink.module.scss'
import { NavigationLinkProps } from '../../types/HomePageProps'

/**
 * Represents a individual navigation links.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.category - The name of the furniture category.
 * @returns {React.ReactElement} A navigatable link element.
 */

const NavigationLink = ({
  category,
}: NavigationLinkProps): React.ReactElement => {
  return (
    <li className={styles.navigationLink}>
      <NavLink
        to={`/categories/${category}`}
        className={({ isActive }) => (isActive ? styles.activeLink : '')}
      >
        {category.toUpperCase()}
      </NavLink>
    </li>
  )
}

export default NavigationLink
