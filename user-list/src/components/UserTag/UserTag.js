import styles from "./UserTag.module.css";

/**
 * Represents tags in user tile component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.tag - The tags of the user.
 * @returns {React.ReactElement} A tag element.
 */

const UserTags = ({ label }) => {
  return <span className={styles.tag}>{label}</span>;
};

export default UserTags;
