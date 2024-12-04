import styles from "./UserCard.module.css";
import UserTag from "../UserTag/UserTag";

/**
 * Represents a user tile component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.user - The details of the user.
 * @returns {React.ReactElement} A user tile element.
 */

const UserCard = ({ user }) => {
  const userTags = user.tags.map((label, key) => {
    return <UserTag label={label} key={key}></UserTag>;
  });
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={require("../../assets/images/" + user.userPic)}
          alt={user.firstName + " " + user.lastName + "'s profile picture"}
        ></img>
      </div>
      <div className={styles.details}>
        <span className={styles.name}>
          {user.firstName + " " + user.lastName}
        </span>
        <div className={styles.location}>{user.location}</div>
        <div className={styles.tags}>{userTags}</div>
      </div>
    </div>
  );
};

export default UserCard;
