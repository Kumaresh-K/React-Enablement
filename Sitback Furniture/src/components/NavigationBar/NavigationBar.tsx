import styles from './NavigationBar.module.scss'
import { getFurnitureCategories } from '../../utils/apiHelperUtils'
import { FurnitureDataAsProps } from '../../pages/HomePage/HomePageProps'
import NavigationLink from '../NavigationLink/NavigationLink'
import LoadingScreen from '../LoadingScreen/LoadingScreen'

/**
 * Represents a navigation bar component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.furnitureDetails - Contains the data that related to all furniture category.
 * @returns {React.ReactElement} A navbar element.
 */

const NavigationBar = ({
  furnitureDetails,
}: FurnitureDataAsProps): React.ReactElement => {
  const FurnitureCategories = getFurnitureCategories(furnitureDetails)

  const navigationItems =
    furnitureDetails.length === 0 ? (
      <LoadingScreen className='verticalCenter' />
    ) : (
      FurnitureCategories.map((furniture: string, key: number) => {
        return <NavigationLink category={furniture} key={key} />
      })
    )
  return (
    <nav className={styles.navigationBar}>
      <ul>{navigationItems}</ul>
    </nav>
  )
}

export default NavigationBar
