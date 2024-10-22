import styles from "./ContactForm.module.scss";
import { dropDownOptions } from "../DestinationNavigator/DestinationNavigator";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useRef, useState } from "react";
import {
  contactFormProps,
  errorTypes,
  userData,
} from "../../pages/HomePage/HomePagePropDefinitions";
import {
  NAME_EMPTY_ERROR,
  NAME_LENGTHY_ERROR,
  NAME_NUMBER_ERROR,
  STARTING_POINT_EMPTY_ERROR,
  ENDING_POINT_EMPTY_ERROR,
  SAME_LOCATION_ERROR,
  PHONE_NUMBER_EMPTY_ERROR,
  PHONE_NUMBER_INVALID_ERROR,
  CONTACT_FORM_SUBMISSION_BUTTON_NAME
} from "../../constants";

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
    const isContainNumbers = (str: string): boolean => {
      return /\d/.test(str);
    };
    const isPhoneNumber = (phoneNumber: string): boolean => {
      return /^[0-9]{10}$/.test(phoneNumber.trim());
    };

    if (!data.name) {
      errors.name = NAME_EMPTY_ERROR;
    } else if (data.name.length > 30) {
      errors.name = NAME_LENGTHY_ERROR;
    } else if (isContainNumbers(data.name)) {
      errors.name = NAME_NUMBER_ERROR;
    }

    if (!data.startingPoint) {
      errors.startingPoint = STARTING_POINT_EMPTY_ERROR;
    }

    if (!data.endingPoint) {
      errors.endingPoint = ENDING_POINT_EMPTY_ERROR;
    } else if (data.endingPoint === data.startingPoint) {
      errors.endingPoint = SAME_LOCATION_ERROR;
    }

    if (!data.phoneNumber) {
      errors.phoneNumber = PHONE_NUMBER_EMPTY_ERROR;
    } else if (!isPhoneNumber(data.phoneNumber)) {
      errors.phoneNumber = PHONE_NUMBER_INVALID_ERROR;
    }

    return errors;
  };

  return (
    <form className={styles.contactForm}>
      <span className={styles.inputWrapper}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => {
            tripInfo.current.name = e.target.value.trim();
          }}
        />
        {error.name && (
          <span className={styles.errorMessage}>{error.name}</span>
        )}
      </span>
      <span className={styles.inputWrapper}>
        <label>Your Home Town</label>
        <select
          name="startingPoint"
          defaultValue={"Choose"}
          className={styles.destinationDropdown}
          onChange={(e) => {
            tripInfo.current.startingPoint = e.target.value;
          }}
        >
          {dropDownOptions}
        </select>
        {error.startingPoint && (
          <span className={styles.errorMessage}>{error.startingPoint}</span>
        )}
      </span>
      <span className={styles.inputWrapper}>
        <label>Where would you like to go?</label>
        <select
          name="endingPoint"
          defaultValue={"Choose"}
          className={styles.destinationDropdown}
          onChange={(e) => {
            tripInfo.current.endingPoint = e.target.value;
          }}
        >
          {dropDownOptions}
        </select>
        {error.endingPoint && (
          <span className={styles.errorMessage}>{error.endingPoint}</span>
        )}
      </span>
      <span className={styles.inputWrapper}>
        <label>Contact Number</label>
        <input
          name="phoneNumber"
          type="tel"
          onChange={(e) => {
            tripInfo.current.phoneNumber = e.target.value;
          }}
        />
        {error.phoneNumber && (
          <span className={styles.errorMessage}>{error.phoneNumber}</span>
        )}
      </span>
      <PrimaryButton
        buttonContent={CONTACT_FORM_SUBMISSION_BUTTON_NAME}
        handleClick={(e) => {
          e.preventDefault();
          const data = validateForm(tripInfo.current);
          setError(data);
          if (Object.keys(data).length === 0) {
            tripInfo.current.flag = true;
            tripDetails(tripInfo.current);
          }
        }}
        inlineStyle={{ width: "235px" }}
      />
    </form>
  );
};

export default ContactForm;
