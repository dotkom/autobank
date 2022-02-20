import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import * as Yup from "yup";
import InputField from "../InputField";
import GroupDropdown from "./GroupDropdown";
import Navigation from "./Navigation";
import AccountInput from "./AccountInput";
import { useState } from "react";
import ReciptTypeGroup from "./ReciptTypeGroup";

export const ACCOUNT_NUMBER_REGEX = new RegExp(/^\d{4} \d{2} \d{5}$/);
export const CARD_DETAIL_REGEX = new RegExp(/^.{5,30}$/);

const validationSchema = Yup.object().shape({
  amount: Yup.number()
    .typeError("En kvittering må føres på en positiv pengeverdi")
    .test(
      "Valid and required",
      "En kvittering må føres på en positiv pengeverdi",
      (amount) => amount !== null && amount > 0
    ),
  occation: Yup.string().test(
    "Valid and required",
    "Du må legge ved et grunnlag for kjøpet på minst 3 tegn",
    (occation) => occation !== null && occation.length >= 3
  ),
  type: Yup.string().test(
    "Valid type",
    "Det har skjedd en feil ved valg av type, vennligst last inn siden på nytt",
    (type) => type === "card" || type === "deposit"
  ),
  account: Yup.string()
    .nullable()
    .test(
      "Account validity",
      "Kontonummeret må være på 11 siffer",
      (account) =>
        account === "unused" ||
        (account !== null && ACCOUNT_NUMBER_REGEX.test(account))
    ),
  cardDetails: Yup.string()
    .nullable()
    .test(
      "Card detail validity",
      "Informasjonen burde være på mellom 5 og 30 tegn",
      (cardDetails) =>
        cardDetails === "unused" ||
        (cardDetails !== null && CARD_DETAIL_REGEX.test(cardDetails))
    ),
  responsible_unit: Yup.string().test(
    "Group chosen test",
    "Du må velge en komité eller gruppe",
    (unit) => unit !== "default"
  ),
});

type props = {
  changeStep: (step: number) => void;
};

const ReciptInformation = ({ changeStep }: props) => {
  const [type, setType] = useState<"card" | "deposit">("deposit");

  const submitForm = (data) => {
    console.log("Submittitng");
    console.log(data);
    changeStep(1);
  };

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema), mode: "all" });

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
      <div className="flex flex-row justify-between w-full">
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
      <Navigation
        changeStep={(step: number) => console.log("Change step feil")}
        step={1}
      />
    </form>
  );
};

export default ReciptInformation;
