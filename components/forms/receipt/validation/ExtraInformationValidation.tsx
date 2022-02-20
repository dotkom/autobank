import * as Yup from "yup";
import { formatBytes } from "../../../../utils/bytes";

export const FILE_SIZE_MAX = 9 * 1024 * 1024; // 9 MB

export const ExtraInformationValidationSchema = Yup.object().shape({
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
