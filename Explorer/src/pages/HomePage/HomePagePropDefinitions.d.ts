import exp from "constants";
import { CSSProperties } from "react";

export type primaryButtonProp = {
  buttonContent: String;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  inlineStyle?: CSSProperties;
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
  inlineStyle?: CSSProperties;
};

export type destinationCardProps = {
  catchPhrase: string;
  city: string;
  shortDescription: string;
};

export type headerTextProps = {
  title: string;
  content: string;
  inlineStyle?: CSSProperties;
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
  inlineStyle?: CSSProperties;
};

export type successBannerProps = {
  name: string;
  startingPoint: string;
  endingPoint: string;
  phoneNumber?: string;
};