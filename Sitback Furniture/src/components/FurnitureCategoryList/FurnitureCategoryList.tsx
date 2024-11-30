import { FurnitureDataAsProps } from '../../pages/HomePage/HomePageProps'
import styles from './FurnitureCategoryList.module.scss'
import FurnitureCategoryCard from '../FurnitureCategoryCard/FurnitureCategoryCard'

/**
 * Represents a furniture category list component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.furnitureDetails - contains the all necessary info about all furniture.
 * @returns {React.ReactElement} A furniture category list element.
 */

const FurnitureCategoryList = ({
  furnitureDetails,
}: FurnitureDataAsProps): React.ReactElement => {
  const FurnitureCategories = furnitureDetails.map((furniture, key) => {
    return <FurnitureCategoryCard furniture={furniture} key={key} />
  })
  return <div className={styles.furnitureCategory}>{FurnitureCategories}</div>
}

export default FurnitureCategoryList
