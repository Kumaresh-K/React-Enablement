import {
  NAME_EMPTY_ERROR,
  NAME_LENGTHY_ERROR,
  NAME_NUMBER_ERROR,
  STARTING_POINT_EMPTY_ERROR,
  ENDING_POINT_EMPTY_ERROR,
  SAME_LOCATION_ERROR,
  PHONE_NUMBER_EMPTY_ERROR,
  PHONE_NUMBER_INVALID_ERROR,
} from "../../../constants";

export const isContainNumbers = (str: string): boolean => {
  return /\d/.test(str);
};

export const isPhoneNumber = (phoneNumber: string): boolean => {
  return /^[0-9]{10}$/.test(phoneNumber.trim());
};

export const validateName = (name: string): string | undefined => {
  if (name == "") {
    return NAME_EMPTY_ERROR;
  } else if (name.length > 30) {
    return NAME_LENGTHY_ERROR;
  } else if (isContainNumbers(name)) {
    return NAME_NUMBER_ERROR;
  }
};

export const validateStartingPlace = (place: string): string | undefined => {
  if (place == "") {
    return STARTING_POINT_EMPTY_ERROR;
  }
};

export const validateEndingPlace = (
  startingPoint: string,
  endingPoint: string
): string | undefined => {
  if (endingPoint == "") {
    return ENDING_POINT_EMPTY_ERROR;
  } else if (endingPoint == startingPoint) {
    return SAME_LOCATION_ERROR;
  }
};

export const validatePhoneNumber = (
  phoneNumber: string
): string | undefined => {
  if (phoneNumber == "") {
    return PHONE_NUMBER_EMPTY_ERROR;
  } else if (!isPhoneNumber(phoneNumber)) {
    return PHONE_NUMBER_INVALID_ERROR;
  }
};
