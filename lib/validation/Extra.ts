import * as Yup from 'yup'
import { formatBytes } from 'utils/bytes'

export const FILE_SIZE_MAX = 9 * 1024 * 1024 // 9 MB

export const ExtraSchema = Yup.object().shape({
  comments: Yup.string().required(
    'Du må legge ved en kommentar om utlegget ditt'
  ),
  attachments: Yup.mixed()
    // .typeError("Du må legge ved kvitteringen din som et vedlegg")
    .nullable()
    .test(
      'fileSize',
      `Det er ikke tillat å legge ved filer på over ${formatBytes(
        FILE_SIZE_MAX
      )}`,
      (attachments) => {
        if (attachments === null || attachments === undefined) return true
        // Skip this test, and validate with the File Exists one.

        const tempArray: File[] = Array.from(attachments)
        return (
          tempArray.filter((file) => file.size >= FILE_SIZE_MAX).length === 0
        )
      }
    )
    .test(
      'Files exists',
      'Du må legge ved kvitteringen din som et vedlegg',
      (attachments) => attachments && attachments.length !== 0
    ),
})
