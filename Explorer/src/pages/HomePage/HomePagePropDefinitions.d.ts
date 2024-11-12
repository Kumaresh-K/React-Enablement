import exp from "constants";
import { CSSProperties } from "react";
import { ChangeEventHandler } from "react";

export type ButtonProp = {
  buttonContent: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

export type placeAttributes = {
  place: string;
  city: string;
  shortDescription: string;
  fullDescription: string;
  relatedPlaces: string[];
};

export type destinationListProps = {
  header: string;
  catchPhase: string;
  destinations: placeAttributes[];
  className?: string;
};

export type destinationCardProps = {
  catchPhrase: string;
  city: string;
  shortDescription: string;
};

export type headerProps = {
  title: string;
  content: string;
  className?: string;
};

export type userData = {
  name: string;
  startingPoint: string;
  endingPoint: string;
  phoneNumber: string;
  flag: boolean;
};

export type errorTypes = {
  name?: string;
  startingPoint?: string;
  endingPoint?: string;
  phoneNumber?: string;
};

export type contactFormProps = {
  tripDetails: Dispatch<SetStateAction<{ userData }>>;
};

export type contactUsProps = {
  className?: string;
};

export type successBannerProps = {
  name: string;
  startingPoint: string;
  endingPoint: string;
  phoneNumber?: string;
};

export type TextInputProps = {
  id: string;
  inputLabel?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export type errorMessageProps = {
  content: string;
};
