import * as Yup from 'yup'

export const PHONE_REGEX = new RegExp('') //TODO: Create/Cook regex

export const ContactPersonValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Dette feltet er påkrevd')
    .max(150, 'Navnet er for langt'),
  email: Yup.string()
    .required('Dette feltet er påkrevd')
    .email('Ugyldig format på mailen')
    .max(200, 'Mailen er for lang'),
  phone: Yup.string()
    .required('Dette feltet er påkrevd')
    .matches(
      /([+]{0,1}[0-9\s]+)/,
      'Telefonnummer er ugyldig og bør kun inneholde tall og maks 1 "+"'
    )
    .min(8, 'Telefonnummer for kort!')
    .max(16, 'Telefonnummeret er for langt!'),
})
