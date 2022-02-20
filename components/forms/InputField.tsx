import { FieldValues, UseFormRegister } from "react-hook-form";

type props = {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  classNames?: string;
  pattern?: string;
  register: UseFormRegister<FieldValues>;
};

const InputField = ({
  type,
  name,
  id,
  placeholder,
  classNames,
  register,
}: props) => {
  return (
    <input
      className={`${classNames} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
      type={type}
      name={name}
      {...register(name)}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default InputField;
