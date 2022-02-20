import { FieldValues, UseFormRegister } from "react-hook-form";

type props = {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  classNames?: string;
  register: UseFormRegister<FieldValues>;
};

const InputField = ({
  type,
  name,
  placeholder,
  label,
  classNames,
  register,
}: props) => {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2 max-w-lg w-full text-left">
      {label}
      <input
        className={`${classNames} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        type={type}
        name={name}
        {...register(name)}
        placeholder={placeholder}
      />
    </label>
  );
};

export default InputField;
