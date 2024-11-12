import styles from "./ContactForm.module.scss";
import Button from "../Button/Button";
import { useRef, useState } from "react";
import {
  contactFormProps,
  errorTypes,
  userData,
} from "../../pages/HomePage/HomePagePropDefinitions";
import {
  validateEndingPlace,
  validateName,
  validatePhoneNumber,
  validateStartingPlace,
} from "../../services/Utils/InputValidation";
import { CONTACT_FORM_SUBMISSION_BUTTON_NAME } from "../../constants";
import TextInput from "../TextInput/TextInput";
import DestinationDropdownInput from "../DestinationDropdownInput/DestinationDropdownInput";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

/**
 * Represents contact form component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Dispatch<SetStateAction<userData>>} props.tripDetails - setState method for trip details.
 * @returns {React.ReactElement} A contact form element.
 */

const ContactForm = ({ tripDetails }: contactFormProps): React.ReactElement => {
  const tripInfo = useRef({
    name: "",
    startingPoint: "",
    endingPoint: "",
    phoneNumber: "",
    flag: false,
  });

  const [error, setError] = useState<errorTypes>({});

  const validateForm = (data: userData) => {
    const errors: errorTypes = {};
    errors.name = validateName(data.name);
    errors.startingPoint = validateStartingPlace(data.startingPoint);
    errors.endingPoint = validateEndingPlace(
      data.startingPoint,
      data.endingPoint
    );
    errors.phoneNumber = validatePhoneNumber(data.phoneNumber);
    return errors;
  };

  return (
    <form className={styles.contactForm}>
      <span className={styles.inputWrapper}>
        <TextInput
          id="name"
          inputLabel="Name"
          onChange={(e) => {
            tripInfo.current.name = e.target.value.trim();
          }}
        />
        {error.name && <ErrorMessage content={error.name} />}
      </span>
      <span className={styles.inputWrapper}>
        <DestinationDropdownInput
          id="startingPoint"
          inputLabel="Your Home Town"
          className={styles.destinationDropdown}
          onChange={(e) => {
            tripInfo.current.startingPoint = e.target.value;
          }}
        />
        {error.startingPoint && <ErrorMessage content={error.startingPoint} />}
      </span>
      <span className={styles.inputWrapper}>
        <DestinationDropdownInput
          id="endingPoint"
          inputLabel="Where would you like to go?"
          className={styles.destinationDropdown}
          onChange={(e) => {
            tripInfo.current.endingPoint = e.target.value;
          }}
        />
        {error.endingPoint && <ErrorMessage content={error.endingPoint} />}
      </span>
      <span className={styles.inputWrapper}>
        <TextInput
          id="phoneNumber"
          inputLabel="Contact Number"
          onChange={(e) => {
            tripInfo.current.phoneNumber = e.target.value.trim();
          }}
        />
        {error.phoneNumber && <ErrorMessage content={error.phoneNumber} />}
      </span>
      <Button
        buttonContent={CONTACT_FORM_SUBMISSION_BUTTON_NAME}
        handleClick={(e) => {
          e.preventDefault();
          const data = validateForm(tripInfo.current);
          setError(data);
          if (Object.values(data).every((item) => item === undefined)) {
            tripInfo.current.flag = true;
            tripDetails(tripInfo.current);
          }
        }}
      />
    </form>
  );
};

export default ContactForm;
