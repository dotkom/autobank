import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { formatBytes } from "../../../utils/bytes";
import Navigation from "./Navigation";

export const FILE_SIZE_MAX = 9 * 1024 * 1024; // 9 MB

type props = {
  changeStep: (step: number) => void;
};

const ExtraInformation = ({ changeStep }: props) => {
  const validationSchema = Yup.object().shape({
    comments: Yup.string().required(
      "Du må legge ved en kommentar om utlegget ditt"
    ),
    attachment: Yup.array()
      .required("Du må laste opp kvitteringen din som et vedlegg")
      .nullable()
      .test(
        "fileSize",
        `Det er ikke tillat å legge ved filer på over ${formatBytes(
          FILE_SIZE_MAX
        )}`,
        (value) => value && value[0].size <= FILE_SIZE_MAX
      ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const submitForm = (data) => {
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
      <label className="block text-gray-700 text-sm font-bold mb-2 max-w-lg w-full flex flex-col">
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
      <label className="block text-gray-700 text-sm font-bold mb-2 max-w-lg w-full">
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
