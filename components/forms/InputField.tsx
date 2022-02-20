import { FieldValues, UseFormRegister } from "react-hook-form";
import { LABEL_STYLE } from "./styles";

type props = {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  error?: string;
  classNames?: string;
  register: UseFormRegister<FieldValues>;
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
          } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type={type}
          name={name}
          {...register(name)}
          placeholder={placeholder}
        />
      </label>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default InputField;
