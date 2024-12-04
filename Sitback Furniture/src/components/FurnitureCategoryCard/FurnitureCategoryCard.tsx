import styles from './FurnitureCategoryCard.module.scss'
import { FurnitureCategoryCardProps } from '../../pages/HomePage/HomePageProps'
import { FURNITURE_CATEGORY_BUTTON_NAME } from '../../constants'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

/**
 * Represents a furniture category card component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.furniture - contains the all necessary info about particular furniture.
 * @returns {React.ReactElement} - a furniture card element.
 */

const FurnitureCategoryCard = ({
  furniture,
}: FurnitureCategoryCardProps): React.ReactElement => {
  const navigate = useNavigate()
  return (
    <section className={styles.furnitureCategoryCard}>
      <img
        src={furniture.photo}
        alt={`${furniture.id} image`}
        className={styles.sampleImage}
      />
      <div className={styles.funitureCategory}>{furniture.category}</div>
      <div className={styles.aboutFuniture}>{furniture.description}</div>
      <Button
        name={FURNITURE_CATEGORY_BUTTON_NAME}
        handleClick={() => {
          navigate(`/categories/${furniture.id}`)
        }}
      />
    </section>
  )
}

export default FurnitureCategoryCard
