import styles from './PageHeader.module.scss'
import NavigationBar from '../NavigationBar/NavigationBar'
import UserProfile from '../UserProfile/UserProfile'
import BrandName from '../BrandName/BrandName'
import { FurnitureDataAsProps } from '../../types/HomePageProps'

/**
 * Represents a page header component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.furnitureDetails - contains the details of the avaliable furnitures.
 * @returns {React.ReactElement} A page header element.
 */

const PageHeader = ({
  furnitureDetails,
}: FurnitureDataAsProps): React.ReactElement => {
  return (
    <div className={styles.pageHeader}>
      <BrandName />
      <NavigationBar furnitureDetails={furnitureDetails} />
      <UserProfile name='Nijin Vinodan' />
    </div>
  )
}

export default PageHeader
