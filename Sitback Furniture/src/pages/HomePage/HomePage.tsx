import styles from './HomePage.module.scss'
import FurnitureCategoryList from '../../components/FurnitureCategoryList/FurnitureCategoryList'
import PromotionContent from '../../components/PromotionContent/PromotionContent'
import {
  FURNITURE_CATEGORY_HEADLINE,
  FURNITURE_CATEGORY_TAGLINE,
} from '../../constants'
import Footer from '../../components/Footer/Footer'
import useAPI from '../../hooks/useAPI'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import PageDown from '../../components/PageDown/PageDown'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'

/**
 * Represents the home page.
 *
 * @component
 * @returns {React.ReactElement} the home page element.
 */

const HomePage = (): React.ReactElement => {
  const { data, loading, error } = useAPI('categories')
  if (loading) return <LoadingScreen className='verticalHorizontalCenter'/>
  if (error) return <PageDown />
  return (
    <ErrorBoundary>
      <div className={styles.FurnitureShowcase}>
        <PromotionContent
          headline={FURNITURE_CATEGORY_HEADLINE}
          tagline={FURNITURE_CATEGORY_TAGLINE}
        />
        <FurnitureCategoryList furnitureDetails={data ?? []} />
      </div>
      <Footer />
    </ErrorBoundary>
  )
}

export default HomePage
