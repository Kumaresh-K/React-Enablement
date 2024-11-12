import styles from "./ContactUs.module.scss";
import ContactForm from "../ContactForm/ContactForm";
import Header from "../Header/Header";
import SuccessBanner from "../SuccessBanner/SuccessBanner";
import { CONTACT_HEADER, CONTACT_CONTENT } from "../../constants";
import { useState } from "react";
import {
  contactUsProps,
  userData,
} from "../../pages/HomePage/HomePagePropDefinitions";

/**
 * Represents a Contact us section component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.inlineStyle - inline style for the html element.
 * @returns {React.ReactElement} A contact section element.
 */

const ContactUs = ({ className }: contactUsProps): React.ReactElement => {
  const [userData, setUserData] = useState({
    name: "",
    startingPoint: "",
    endingPoint: "",
    phoneNumber: "",
    flag: false,
  });

  return (
    <div className={`${styles.contactSection} ${styles[className ?? ""]}`}>
      <div className={styles.contactHeaderSection}>
        <Header
          title={CONTACT_HEADER}
          content={CONTACT_CONTENT}
          className="contactUsContainer"
        />
      </div>
      <ContactForm
        tripDetails={(userData: userData) => {
          setUserData({ ...userData });
        }}
      />
      {userData.flag && (
        <SuccessBanner
          name={userData.name}
          startingPoint={userData.startingPoint}
          endingPoint={userData.endingPoint}
          phoneNumber={userData.phoneNumber}
        />
      )}
    </div>
  );
};

export default ContactUs;
