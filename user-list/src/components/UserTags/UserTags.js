import './UserTags.css';

/**
 * Represents tags in user tile component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.tag - The tags of the user.
 * @returns {React.ReactElement} A tag element.
 */

const UserTags = ({tags}) => {
    const userTags = tags.map((tag, i) => {
        return <span key={i} className='tag'>{tag}</span>
    });
    return(
        userTags
    );
};

export default UserTags;