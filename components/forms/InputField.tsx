import { FieldValues, UseFormRegister } from "react-hook-form";
import { ERROR_MSG_STYLE, INPUT_STYLE, LABEL_STYLE } from "./styles";

type props = {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  error?: string;
  classNames?: string;
  register: UseFormRegister<any>;
};

const InputField = ({
  type,
  name,
  placeholder,
  label,
  error,
  classNames,
  register,
}: props) => {
  return (
    <div className="w-full text-left mb-3">
      <label className={LABEL_STYLE}>
        {label}
        <input
          className={`${classNames} ${
            error && "border-red-500"
          } ${INPUT_STYLE}`}
          type={type}
          name={name}
          {...register(name)}
          placeholder={placeholder}
        />
      </label>
      {error && <p className={ERROR_MSG_STYLE}>{error}</p>}
    </div>
  );
};

export default InputField;
