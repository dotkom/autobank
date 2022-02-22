import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Navigation from "../Navigation";
import InputField from "../../InputField";
import { UserInformationValidationSchema } from "../validation/UserInformationValidation";
import { Dispatch, SetStateAction } from "react";
import { ERROR_MSG_STYLE, LABEL_STYLE } from "../../styles";
import { IUserData } from "../state";

type props = {
  changeStep: (step: number) => void;
  setFormData: Dispatch<SetStateAction<IUserData>>;
};

const UserInformation = ({ changeStep, setFormData }: props) => {
  const submitForm = (data: IUserData) => {
    setFormData(data);
    changeStep(1);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(UserInformationValidationSchema) });

  return (
    <form
      className="max-w-lg w-full flex items-center flex-col justify-center bg-slate-100 p-10 rounded-lg"
      onSubmit={handleSubmit(submitForm)}
    >
      <InputField
        name="fullname"
        type="text"
        label="Navn"
        placeholder="Ditt fulle navn"
        error={errors.fullname?.message}
        register={register}
      />
      <InputField
        name="email"
        type="email"
        label="E-post"
        placeholder="Din e-postadresse. Onlinemail hvis du har."
        error={errors.email?.message}
        register={register}
      />
      <label className={LABEL_STYLE}>
        <input
          type="checkbox"
          name="toc"
          {...register("toc")}
          className="form-checkbox h-5 w-5 mr-1 text-online-blue-500 hover:cursor-pointer hover:border-online-blue-500 hover:border-2"
        />
        Aksepterer TOC
      </label>
      {errors.toc?.message && (
        <p className={ERROR_MSG_STYLE}>{errors.toc.message}</p>
      )}
      <Navigation step={0} />
    </form>
  );
};

export default UserInformation;
