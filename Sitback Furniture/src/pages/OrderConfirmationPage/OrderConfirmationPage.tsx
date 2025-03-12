import styles from './OrderConfirmationPage.module.scss'
import HomePage from '../HomePage/HomePage'
import OrderedProductList from '../../container/OrderedProductList/OrderedProductList'
import PromotionContent from '../../components/PromotionContent/PromotionContent'
import { ORDER_HEADLINE, ORDER_TAGLINE } from '../../constants'

/**
 * Represents the order confirmation page.
 *
 * @component
 * @returns {React.ReactElement} the order confirmation page element with items.
 */

const OrderConfirmationPage = (): React.ReactElement => {
  return (
    <>
      <div className={styles.orderConfirmationContainer}>
        <div className={styles.orderConfirmationSection}>
          <PromotionContent
            headline={ORDER_HEADLINE}
            tagline={ORDER_TAGLINE}
            customStyle='orderPromotion'
          ></PromotionContent>
          <OrderedProductList />
        </div>
      </div>
      <HomePage />
    </>
  )
}

export default OrderConfirmationPage
