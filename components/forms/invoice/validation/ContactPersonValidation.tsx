import * as Yup from 'yup'
import { EMAIL_REGEX } from '../../receipt/validation/UserInformationValidation'

export const PHONE_REGEX = new RegExp('') //TODO: Create/Cook regex

export const ContactPersonValidationSchema = Yup.object().shape({
  name: Yup.string().required('Dette feltet er påkrevd'),
  email: Yup.string().test('Email regex', 'Ugyldig format på mailen', (email) =>
    EMAIL_REGEX.test(email)
  ),
  phone: Yup.string().required('Ehhh'), //TODO: Fix
})
