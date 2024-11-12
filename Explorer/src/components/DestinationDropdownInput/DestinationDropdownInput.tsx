import { ChangeEventHandler } from "react";
import "./DestinationDropdownInput.module.scss";
import destinationChoices from "../../assets/data/placeDetails.json";

interface DestinationDropdownInputProps {
  id: string;
  inputLabel?: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  className: string;
}

const choiceList = destinationChoices.map((destination, key) => {
  return (
    <option value={destination.city} key={key}>
      {destination.city}
    </option>
  );
});

export const dropDownOptions = (
  <>
    <option value="Choose" disabled>
      Choose
    </option>
    {choiceList}
  </>
);

const DestinationDropdownInput = ({
  id,
  inputLabel,
  onChange,
  className,
}: DestinationDropdownInputProps) => {
  return (
    <>
      {inputLabel && <label htmlFor={id}>{inputLabel}</label>}
      <select
        id={id}
        defaultValue="Choose"
        className={className}
        onChange={onChange}
      >
        {dropDownOptions}
      </select>
    </>
  );
};

export default DestinationDropdownInput;
