import { FurnitureCardProps } from '../../pages/ShoppingPage/ShoppingPageProps'
import Button from '../Button/Button'
import GuaranteeBadge from '../GuaranteeBadge/GuaranteeBadge'
import styles from './FurnitureCard.module.scss'
import ProductPrice from '../ProductPrice/ProductPrice'
import useLocalStorage from '../../hooks/useLocalStroage'

const FurnitureCard = ({ furniture }: FurnitureCardProps) => {
  const [data, setData] = useLocalStorage('cart', {})
  return (
    <div className={styles.furniture}>
      <img
        src={furniture.photo}
        alt={`${furniture.name} picture`}
        className={styles.furnitureImage}
      />
      <div className={styles.furnitureInfo}>
        <span className={styles.model}>{furniture.name}</span>
        <ProductPrice currencySymbol={'₹'} price={furniture.price} />
      </div>
      <div className={styles.aboutFurniture}>{furniture.description}</div>
      <GuaranteeBadge years={furniture.guarantee} />
      <div className={styles.underline}></div>
      <div className={styles.furnitureActionButtons}>
        <Button
          name={'ADD TO WISHLIST'}
          handleClick={() => {}}
          secondary={true}
        />
        <Button
          name={'ADD TO CART'}
          handleClick={() => {
            setData((prevData: object) => {
              return { ...prevData, [furniture.id]: { ...furniture } }
            })
          }}
        />
      </div>
    </div>
  )
}

export default FurnitureCard
