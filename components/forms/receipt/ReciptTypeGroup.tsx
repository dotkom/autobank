import { FieldValues, UseFormRegister } from "react-hook-form";

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
        <label className="block text-gray-700 text-lg font-bold mb-2 max-w-lg w-full">
          <input
            type="radio"
            name="type"
            value="deposit"
            className="h-5 w-5 mr-1"
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
        <label className="block text-gray-700 text-lg font-bold mb-2 max-w-lg w-full">
          <input
            type="radio"
            name="type"
            value="card"
            className="h-5 w-5 mr-1"
            onClick={() => changeType("card")}
            {...register("type")}
          />
          Bankkort
        </label>
        <p className="text-xs text-gray-500">
          Hvis du har betalt for noe med ett av Online sine kort
        </p>
      </div>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default ReciptTypeGroup;
