import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import GroupDropdown from "../GroupDropdown";
import Navigation from "../Navigation";
import AccountInput from "../AccountInput";
import { Dispatch, SetStateAction, useState } from "react";
import ReciptTypeGroup from "../ReciptTypeGroup";
import InputField from "../../InputField";
import { ReceiptInformationValidationSchema } from "../validation/ReceiptInformationValidation";
import { IReceiptData } from "../state";

type props = {
  changeStep: (step: number) => void;
  setFormData: Dispatch<SetStateAction<IReceiptData>>;
};

const ReciptInformation = ({ changeStep, setFormData }: props) => {
  const [type, setType] = useState<"card" | "deposit">("deposit");

  const submitForm = (data: IReceiptData) => {
    setFormData(data);
    changeStep(1);
  };

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ReceiptInformationValidationSchema),
    mode: "all",
  });

  const changeType = (type: "card" | "deposit") => {
    if (type === "card") {
      setValue("account", "unused");
      setValue("cardDetails", null);
    } else {
      setValue("cardDetails", "unused");
      setValue("account", null);
    }
    setType(type);
  };

  return (
    <form
      className=" max-w-lg w-full flex items-center flex-col justify-center bg-slate-100 p-10 rounded-lg"
      onSubmit={handleSubmit(submitForm)}
    >
      <ReciptTypeGroup register={register} changeType={changeType} />
      {type == "deposit" ? (
        <AccountInput register={register} errors={errors.account?.message} />
      ) : (
        <InputField
          name="cardDetails"
          type="text"
          label="Kortinformasjon"
          placeholder="Kortinformasjon/Hvilken komite kortet tilhører"
          error={errors.cardDetails?.message}
          register={register}
        />
      )}
      <div className="flex flex-row justify-between w-full mb-3">
        <div className="w-2/5">
          <InputField
            name="amount"
            type="number"
            label="Beløp"
            placeholder="Beløpet i NOK"
            error={errors.amount?.message}
            register={register}
          />
        </div>
        <GroupDropdown
          register={register}
          errors={errors.responsible_unit?.message}
        />
      </div>
      <InputField
        name="occation"
        type="text"
        label="Anledning"
        placeholder="Grunnlag for kjøpet"
        error={errors.amount?.message}
        register={register}
      />
      <Navigation step={1} changeStep={changeStep} />
    </form>
  );
};

export default ReciptInformation;
