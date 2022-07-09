import * as Yup from 'yup'
import { formatBytes } from 'utils/bytes'

export const EMAIL_REGEX = new RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
)
export const CARD_DETAIL_REGEX = new RegExp(/^.{5,30}$/)
export const ACCOUNT_NUMBER_REGEX = new RegExp(/^\d{4} \d{2} \d{5}$/)

export const FILE_SIZE_MAX = 9 * 1024 * 1024 // 9 MB

export const ReceiptValidationSchema = Yup.object().shape({
  fullname: Yup.string().test(
    'required and valid name',
    'Du må inkludere både fornavn og etternavn',
    (fullname) => fullname !== null && fullname.split(' ').length > 1
  ),
  email: Yup.string()
    .required('Feltet må inneholde en gyldig e-postadresse')
    .test(
      'valid e-mail',
      'Feltet må inneholde en gyldig e-postadresse',
      (email) => email !== null && EMAIL_REGEX.test(email)
    ),
  toc: Yup.boolean().test(
    'isChecked',
    'Du må godkjenne vår TOC for å kunne sende inn kvitteringsskjema',
    (toc) => toc
  ),

  amount: Yup.number()
    .typeError('En kvittering må føres på en positiv pengeverdi')
    .test(
      'Valid and required',
      'En kvittering må føres på en positiv pengeverdi',
      (amount) => amount !== null && amount > 0
    ),
  occasion: Yup.string().test(
    'Valid and required',
    'Du må legge ved et grunnlag for kjøpet på minst 3 tegn',
    (occasion) => occasion !== null && occasion.length >= 3
  ),
  type: Yup.string().test(
    'Valid type',
    'Det har skjedd en feil ved valg av type, vennligst last inn siden på nytt',
    (type) => type === 'card' || type === 'deposit'
  ),
  account_nr: Yup.string()
    .nullable()
    .test(
      'Account validity',
      'Kontonummeret må være på 11 siffer',
      (account_nr) =>
        account_nr === 'unused' ||
        (account_nr !== null && ACCOUNT_NUMBER_REGEX.test(account_nr))
    ),
  card: Yup.string()
    .nullable()
    .test(
      'Card detail validity',
      'Informasjonen burde være på mellom 5 og 30 tegn',
      (card) =>
        card === 'unused' || (card !== null && CARD_DETAIL_REGEX.test(card))
    ),
  responsible_unit: Yup.string().test(
    'Group chosen test',
    'Du må velge en komité eller gruppe',
    (unit) => unit !== 'default'
  ),
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
