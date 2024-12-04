import { useState } from 'react'
import styles from './ProductCardQuantity.module.scss'

const ProductCardQuantity = () => {
  const [count, setCount] = useState(0)

  const setProductQuantity = (value: number) => {
    if (count + value >= 0) setCount((prevCount) => prevCount + value)
  }

  return (
    <span className={styles.productQuantity}>
      <button
        onClick={() => {
          setProductQuantity(-1)
        }}
        className={styles.negative}
      >
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button
        onClick={() => {
          setProductQuantity(+1)
        }}
        className={styles.positive}
      >
        +
      </button>
    </span>
  )
}

export default ProductCardQuantity
