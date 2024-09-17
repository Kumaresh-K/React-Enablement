import './UserCard.css';
import UserTags from '../UserTags/UserTags';

/**
 * Represents a user tile component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.user - The details of the user.
 * @returns {React.ReactElement} A user tile element.
 */

const UserCard = ({user}) => {
    const userImgUrl = "url('"+require('../../assets/images/'+user.userPic)+"')";

    return (
        <div className='user-card flex'>
            <div className ='user-image-container'>
            <div className='user-image'style={{ 
                backgroundImage: userImgUrl
                }}>
            </div>
            </div>
            <div className='user-details'>
                <span className='user-name'>{user.firstName +' '+ user.lastName}</span>
                <div className='user-location'>{user.location}</div>
                <div className='user-tags flex'>
                    <UserTags tags={user.tags}></UserTags>
                </div>
            </div>
        </div>
    );
};

export default UserCard;