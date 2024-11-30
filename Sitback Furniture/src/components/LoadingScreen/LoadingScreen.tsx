import Loader from '../../assets/loader.gif'
import { LoadingScreenProps } from '../../pages/HomePage/HomePageProps'
import styles from './LoadingScreen.module.scss'

/**
 * Represents a loading screen component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.className - The name of the style to apply.
 * @returns {React.ReactElement} A loader element.
 */

const LoadingScreen = ({ className }: LoadingScreenProps): React.ReactElement => {
  return (
    <img
      src={Loader}
      alt='Loading gif'
      className={`${className ? styles[className] : ''}`}
    />
  )
}

export default LoadingScreen
