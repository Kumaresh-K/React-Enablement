import styles from "./ErrorMessage.module.scss";
import { errorMessageProps } from "../../pages/HomePage/HomePagePropDefinitions";

const ErrorMessage = ({ content }: errorMessageProps) => {
  return <span className={styles.errorMessage}>{content}</span>;
};

export default ErrorMessage;
