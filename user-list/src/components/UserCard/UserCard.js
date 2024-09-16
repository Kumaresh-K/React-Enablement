import './UserCard.css';
import UserTags from '../UserTags/UserTags';

const UserCard = ({user}) => {
    const userImgUrl = "url('"+require('../../assets/images/'+user.userPic)+"')";

    return (
        <div className='user-card flex'>
            <div className='user-image'style={{ 
                backgroundImage: userImgUrl
                }}>
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