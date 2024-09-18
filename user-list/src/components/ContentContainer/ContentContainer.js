import './ContentContainer.css';

/**
 * Represents a content container component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.content - The content based on navgation menu.
 * @returns {React.ReactElement} content based on navgation menu.
 */

const ContentContainer = (props) => {
    return (
        <div className='content-container'>
            {props.content}
        </div>
    );
};

export default ContentContainer;