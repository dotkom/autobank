import * as Yup from "yup";
import { formatBytes } from "../../../../utils/bytes";

export const FILE_SIZE_MAX = 9 * 1024 * 1024; // 9 MB

export const ExtraInformationValidationSchema = Yup.object().shape({
  comments: Yup.string().required(
    "Du må legge ved en kommentar om utlegget ditt"
  ),
  attachments: Yup.mixed()
    .test(
      "fileSize",
      `Det er ikke tillat å legge ved filer på over ${formatBytes(
        FILE_SIZE_MAX
      )}`,
      (attachments) => {
        const tempArray: File[] = Array.from(attachments);
        return (
          tempArray.filter((file) => file.size >= FILE_SIZE_MAX).length === 0
        );
      }
    )
    .test(
      "Files exists",
      "Du må legge ved kvitteringen din som et vedlegg",
      (attachments) => attachments.length !== 0
    ),
});
