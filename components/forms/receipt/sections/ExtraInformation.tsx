import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Navigation from "../Navigation";
import { LABEL_STYLE } from "../../styles";
import { ExtraInformationValidationSchema } from "../validation/ExtraInformationValidation";

type props = {
  changeStep: (step: number) => void;
};

const ExtraInformation = ({ changeStep }: props) => {
  const submitForm = (data) => {
    console.log(data);
    changeStep(1);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ExtraInformationValidationSchema) });

  return (
    <form
      className="max-w-lg w-full flex items-center flex-col justify-center bg-slate-100 p-10 rounded-lg"
      onSubmit={handleSubmit(submitForm)}
    >
      <label className={`${LABEL_STYLE} flex flex-col`}>
        Kommentarer
        <textarea
          name="comments"
          rows={4}
          {...register("comments")}
          placeholder="Andre kommentarer eller viktig informasjon rundt kjøpet kan skrives her Hvis det gjelder teambuilding, skriv også inn navn på alle deltakere"
          className={errors.comments?.message ? "border-red-500" : ""}
        ></textarea>
      </label>
      {errors.comments?.message ? (
        <p className="text-red-500 text-xs italic">{errors.comments.message}</p>
      ) : (
        ""
      )}
      <label className={LABEL_STYLE}>
        Vedlegg/Kvittering
        <input
          type="file"
          name="attachment"
          accept="image/png,image/jpeg,image/jpg,application/pdf,.pdf"
          multiple
          className={errors.attachment?.message ? "border-red-500" : ""}
          {...register("attachment")}
        />
      </label>
      {errors.attachment?.message ? (
        <p className="text-red-500 text-xs italic">
          {errors.attachment.message}
        </p>
      ) : (
        ""
      )}
      <Navigation changeStep={(step: number) => console.log(step)} step={2} />
    </form>
  );
};

export default ExtraInformation;
