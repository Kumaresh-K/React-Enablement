import './UserTags.css';

const UserTags = ({tags}) => {
    const userTags = tags.map(tag => {
        return <span className='tag'>{tag}</span>
    });
    return(
        userTags
    );
};

export default UserTags;