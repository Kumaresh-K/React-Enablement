import './NewUsers.css';
import UserDetails from '../../assets/data/userData';
import UserCard from '../../components/UserCard/UserCard';

/**
 * Represents the list of users component.
 *
 * @component
 * @param {Object} props - The component props.
 * @returns {React.ReactElement} A set of user element.
 */

const NewUsers = () => {

    const userList = UserDetails.map(user => {
        return <UserCard user={user}></UserCard>;
    });

   return (   
        <div className='user-container'>
            {userList}
        </div>
   ); 
};

export default NewUsers;