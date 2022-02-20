import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import Navigation from "./Navigation";

export const EMAIL_REGEX = new RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const validationSchema = Yup.object().shape({
  fullname: Yup.string().test(
    "required and valid name",
    "Du må inkludere både fornavn og etternavn",
    (fullname) => fullname !== null && fullname.split(" ").length > 1
  ),
  email: Yup.string()
    .required("Feltet må inneholde en gyldig e-postadresse")
    .test(
      "valid e-mail",
      "Feltet må inneholde en gyldig e-postadresse",
      (email) => email !== null && EMAIL_REGEX.test(email)
    ),
  //TODO: Validation for signature
});

type props = {
  changeStep: (step: number) => void;
};

const UserSection = ({ changeStep }: props) => {
  const formOptions = { resolver: yupResolver(validationSchema) };

  const submitForm = (data) => {
    //TODO: Update parent component state.
    console.log(data);
    changeStep(1);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm(formOptions);

  return (
    <form
      className="max-w-lg w-full flex items-center flex-col justify-center bg-slate-100 p-10 rounded-lg"
      onSubmit={handleSubmit(submitForm)}
    >
      <label className="block text-gray-700 text-sm font-bold mb-2 max-w-lg w-full text-left">
        Navn
        <InputField
          id="fullname"
          name="fullname"
          type="text"
          placeholder="Ditt fulle navn"
          classNames={errors.fullname?.message ? "border-red-500" : ""}
          register={register}
        />
      </label>
      {errors.fullname?.message ? (
        <p className="text-red-500 text-xs italic">{errors.fullname.message}</p>
      ) : (
        ""
      )}
      <label className="block text-gray-700 text-sm font-bold mb-2 max-w-lg w-full">
        E-post
        <InputField
          id="email"
          name="email"
          type="email"
          placeholder="Din e-postadresse. Onlinemail hvis du har."
          classNames={errors.email?.message ? "border-red-500" : ""}
          register={register}
        />
      </label>
      {errors.email?.message ? (
        <p className="text-red-500 text-xs italic">{errors.email.message}</p>
      ) : (
        ""
      )}
      <label className="block text-gray-700 text-sm font-bold mb-2 max-w-lg w-full">
        Signatur
        <InputField
          type="text"
          name="signatur"
          id="signatur"
          placeholder="TBI - to be implemented"
          register={register}
        />
      </label>
      <Navigation changeStep={changeStep} step={0} />
    </form>
  );
};

export default UserSection;
