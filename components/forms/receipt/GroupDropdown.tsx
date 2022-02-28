import { UseFormRegister } from "react-hook-form";
import { ERROR_MSG_STYLE } from "../styles";
import { getAllGroups, OnlineGroup } from "./groups";
import { IReceiptData } from "./state";

type props = {
  register: UseFormRegister<IReceiptData>;
  errors?: string;
};

//TODO: Need to fetch the actual groups from OW4 and use them.
const GroupDropdown = ({ register, errors }: props) => {
  return (
    <div className="w-2/3 ml-4">
      <label className="block text-lg font-bold max-w-lg ml-1 text-left text-online-blue-500">
        Ansvarlig enhet
      </label>
      <div className="relative inline-flex pb-3">
        <svg
          className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 412 232"
        >
          <path
            d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
            fill="#648299"
            fill-rule="nonzero"
          />
        </svg>
        <select
          className={`border ${
            errors ? "border-red-500" : "border-gray-500"
          } rounded text-gray-700 border shadow h-10 bg-white focus:outline-none appearance-none`}
          {...register("responsible_unit")}
          defaultValue="default"
        >
          <option disabled value="default">
            Velg komite/gruppe
          </option>
          {getAllGroups().map((group, index) => (
            <option key={`group-${index}`} value={group.name_long}>
              {group.name_long}
            </option>
          ))}
        </select>
      </div>
      {errors && <p className={ERROR_MSG_STYLE}>{errors}</p>}
    </div>
  );
};

export default GroupDropdown;