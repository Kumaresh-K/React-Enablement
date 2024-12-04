import { TextInputProps } from "../../pages/HomePage/HomePagePropDefinitions";
import "./TextInput.module.scss";

const TextInput = ({ id, inputLabel, onChange }: TextInputProps) => {
  return (
    <>
      {inputLabel && <label htmlFor={id}>{inputLabel}</label>}
      <input type="text" id={id} onChange={onChange} />
    </>
  );
};

export default TextInput;
