import styles from './PromotionContent.module.scss'
import { PromotionContentProps } from '../../types/HomePageProps'

/**
 * Represents a promotion component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.headline - The title of the content
 * @param {string} props.tagline - The subtitle of the content.
 * @returns {React.ReactElement} A promotion element.
 */

const PromotionContent = ({
  headline,
  tagline,
  customStyle,
}: PromotionContentProps): React.ReactElement => {
  return (
    <section className={customStyle ? styles[customStyle] : styles.promotion}>
      <div className={styles.headline}>{headline}</div>
      <div className={styles.tagline}>{tagline}</div>
    </section>
  )
}

export default PromotionContent
