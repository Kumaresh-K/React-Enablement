import { headerTextProps } from "../../pages/HomePage/HomePagePropDefinitions";
import styles from "./HeaderText.module.scss";

/**
 * Represents a header component for sections.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The name of the user.
 * @param {string} props.content - The biography of the user.
 * @param {React.CSSProperties} props.inlineStyle - inline style for the header component
 * @returns {React.ReactElement} A user profile element.
 */

const HeaderText = ({ title, content, inlineStyle }: headerTextProps) => {
  return (
    <span className={styles.titleContainer} style={inlineStyle}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{content}</div>
    </span>
  );
};

export default HeaderText;
