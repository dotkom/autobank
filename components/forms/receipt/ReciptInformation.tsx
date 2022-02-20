import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import * as Yup from "yup";
import InputField from "../InputField";
import GroupDropdown from "./GroupDropdown";
import Navigation from "./Navigation";
import AccountInput from "./AccountInput";
import { useState } from "react";

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
      <div
        className={`w-full flex flex-row justify-around pb-5 ${
          errors.type?.message ? "border-red-500" : ""
        }`}
      >
        <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2 max-w-lg w-full">
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
          <label className="block text-gray-700 text-sm font-bold mb-2 max-w-lg w-full">
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
        {errors.type?.message ? (
          <p className="text-red-500 text-xs italic">{errors.type.message}</p>
        ) : (
          ""
        )}
      </div>
      {type == "deposit" ? (
        <AccountInput register={register} errors={errors.account?.message} />
      ) : (
        <>
          <label className="block text-gray-700 text-sm font-bold mb-2 max-w-lg w-full">
            Kortinformasjon
            <InputField
              id="cardDetails"
              name="cardDetails"
              type="text"
              placeholder="Kortinformasjon/Hvilken komite kortet tilhører"
              classNames={errors.cardDetails?.message ? "border-red-500" : ""}
              register={register}
            />
          </label>
          {errors.cardDetails?.message && (
            <p className="text-red-500 text-xs italic">
              {errors.cardDetails.message}
            </p>
          )}
        </>
      )}
      <div className="flex flex-row justify-between w-full">
        <div className="w-2/5">
          <label className="block text-gray-700 text-sm font-bold mb-2 max-w-lg w-full">
            Beløp
            <InputField
              id="amount"
              name="amount"
              type="number"
              placeholder="Beløpet i NOK"
              classNames={errors.amount?.message ? "border-red-500" : ""}
              register={register}
            />
          </label>
          {errors.amount?.message && (
            <p className="text-red-500 text-xs italic">
              {errors.amount.message}
            </p>
          )}
        </div>
        <GroupDropdown
          register={register}
          errors={errors.responsible_unit?.message}
        />
      </div>
      <label className="block text-gray-700 text-sm font-bold mb-2 max-w-lg w-full">
        Anledning
        <InputField
          id="occation"
          name="occation"
          type="text"
          placeholder="Grunnlag for kjøpet"
          classNames={errors.amount?.message ? "border-red-500" : ""}
          register={register}
        />
      </label>
      {errors.occation?.message ? (
        <p className="text-red-500 text-xs italic">{errors.occation.message}</p>
      ) : (
        ""
      )}
      <Navigation
        changeStep={(step: number) => console.log("Change step feil")}
        step={1}
      />
    </form>
  );
};

export default ReciptInformation;
