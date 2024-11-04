import { headerTextProps } from "../../pages/HomePage/HomePagePropDefinitions";
import styles from "./HeaderText.module.scss";

/**
 * Represents a header component for sections.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The name of the header.
 * @param {string} props.content - The content of the header.
 * @param {React.CSSProperties} props.inlineStyle - inline style for the header component
 * @returns {React.ReactElement} A user profile element.
 */

const HeaderText = ({ title, content, inlineStyle }: headerTextProps): React.ReactElement => {
  return (
    <span className={styles.titleContainer} style={inlineStyle} data-testid='content-container'>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{content}</div>
    </span>
  );
};

export default HeaderText;
