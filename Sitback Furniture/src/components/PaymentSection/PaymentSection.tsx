import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './PaymentSection.module.scss'
import ProductPrice from '../ProductPrice/ProductPrice'

const PaymentSection = ({ amount }: any) => {
  const navigate = useNavigate()

  return (
    <div className={styles.paymentSection}>
      <div className={styles.amountDetails}>
        <div className={styles.amountLabel}>TOTAL AMOUNT</div>
        <ProductPrice currencySymbol={'₹'} price={amount} />
      </div>
      <Button
        name={'PLACE ORDER'}
        handleClick={() => {
          navigate('/')
        }}
      />
    </div>
  )
}

export default PaymentSection
