import { FieldValues, UseFormRegister } from "react-hook-form";
import { ERROR_MSG_STYLE, LABEL_STYLE } from "../styles";

type props = {
  error?: string;
  register: UseFormRegister<FieldValues>;
  changeType: (type: string) => void;
};

const ReciptTypeGroup = ({ error, register, changeType }: props) => {
  return (
    <div
      className={`w-full flex flex-row justify-around pb-5 ${
        error && "border-red-500"
      }`}
    >
      <div className="flex flex-col">
        <label className={LABEL_STYLE + " hover:cursor-pointer"}>
          <input
            type="radio"
            name="type"
            value="deposit"
            className="form-radio h-5 w-5 mr-1 mb-1 form-checkbox text-online-blue-500 hover:border-online-blue-500 hover:border-2"
            onClick={() => changeType("deposit")}
            {...register("type")}
            defaultChecked
          />
          Utlegg
        </label>
        <p className="text-xs text-gray-500">
          Hvis du har lagt ut med ditt eget kort
        </p>
      </div>
      <div className="flex flex-col">
        <label className={LABEL_STYLE + " hover:cursor-pointer"}>
          <input
            type="radio"
            name="type"
            value="card"
            className="form-radio h-5 w-5 mr-1 mb-1 form-checkbox text-online-blue-500 hover:border-online-blue-500 hover:border-2"
            onClick={() => changeType("card")}
            {...register("type")}
          />
          Bankkort
        </label>
        <p className="text-xs text-gray-500">
          Hvis du har betalt for noe med ett av Online sine kort
        </p>
      </div>
      {error && <p className={ERROR_MSG_STYLE}>{error}</p>}
    </div>
  );
};

export default ReciptTypeGroup;
