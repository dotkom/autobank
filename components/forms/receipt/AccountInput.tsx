import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

const FORMAT_ACCOUNT_VALUE = (value: string): string => {
  const chars = value.replace(/\D/g, "").split("");
  let insertedSpace = "";
  for (let i = 0; i < chars.length; i++) {
    if (i >= 11) {
      break;
    } else if (i === 4 || i === 6) {
      insertedSpace += " ";
    }
    const char = chars[i];
    insertedSpace += char;
  }
  return insertedSpace;
};

type props = {
  classNames?: string;
  errors?: string;
  register: UseFormRegister<FieldValues>;
};

const AccountInput = ({ classNames, errors, register }: props) => {
  const [account, setAccount] = useState<string>();

  const updateValue = (value: string) => {
    setAccount(FORMAT_ACCOUNT_VALUE(value));
  };

  return (
    <div className="w-full text-left">
      <label className="block text-gray-700 text-lg font-bold mb-2 max-w-lg w-full">
        Kontonummer
        <input
          className={`${classNames} ${
            errors && "border-red-500"
          } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type="text"
          name="account"
          value={account}
          {...register("account")}
          onChange={(e) => updateValue(e.target.value)}
          placeholder="Kontonummer for tilbakebetaling"
        />
      </label>
      {errors && <p className="text-red-500 text-xs italic">{errors}</p>}
    </div>
  );
};

export default AccountInput;
