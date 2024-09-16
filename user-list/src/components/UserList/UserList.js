import './UserList.css';
import UserCard from '../UserCard/UserCard';

const UserList = ({users}) => {
    const userList = users.map(user => {
        return <UserCard user={user}></UserCard>;
    });

    return (
        userList
    );
};

export default UserList;