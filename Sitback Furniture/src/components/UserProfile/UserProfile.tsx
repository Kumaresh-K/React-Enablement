import styles from './UserProfile.module.scss'
import Arrow from '../../assets/drop-down-arrow.png'

/**
 * Represents a user profile component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the user.
 * @returns {React.ReactElement} A user profile element.
 */

const UserProfile = ({ name }: any): React.ReactElement => {
  return (
    <span className={styles.userProfile}>
      <span className={styles.userName}>{name}</span>
      <img src={Arrow} alt='Dropdown arrow' />
    </span>
  )
}

export default UserProfile
