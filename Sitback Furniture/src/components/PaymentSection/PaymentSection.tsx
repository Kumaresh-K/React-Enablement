import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './PaymentSection.module.scss'
import ProductPrice from '../ProductPrice/ProductPrice'
import useLocalStorage from '../../hooks/useLocalStroage'
import {
  FurnitureStructure,
  PaymentSectionProps,
} from '../../types/ShoppingPageProps'
import { getCombinedOrderSet } from '../../utils/commonUtils'
import { useContext } from 'react'
import { CustomerShoppingContext } from '../../context/ShoppingContext'
import { PAYMENT_BUTTON } from '../../constants'

/**
 * Represents a payment or order placement component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.amount - The amount.
 * @returns {React.ReactElement} A payment element.
 */

const PaymentSection = ({
  amount,
}: PaymentSectionProps): React.ReactElement => {
  const navigate = useNavigate()
  const { cartItems, setCartItems } = useContext(CustomerShoppingContext)
  const [, setOrderItems] = useLocalStorage('order', {})

  return (
    <section className={styles.paymentSection}>
      <div className={styles.amountDetails}>
        <div className={styles.amountLabel}>TOTAL AMOUNT</div>
        <ProductPrice currencySymbol={'₹'} price={amount} />
      </div>
      <Button
        name={PAYMENT_BUTTON}
        handleClick={() => {
          console.log(cartItems)
          setOrderItems((prevOrderItems: FurnitureStructure) => {
            return getCombinedOrderSet(prevOrderItems, cartItems)
          })
          setCartItems({})
          navigate('/confirmOrder')
        }}
      />
    </section>
  )
}

export default PaymentSection
