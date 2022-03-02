import * as Yup from 'yup'

export const CompanyInfoValidationSchema = Yup.object().shape({
  organizationNumber: Yup.number()
    .typeError('Dette feltet er påkrevd')
    .test(
      'Existing company',
      'Organisasjonsnummeret finnes ikke i Brønnøysundregistrene',
      (orgNum) => orgNum > 10 //TODO: Proper validation (request to brønnøysundregistrene)
    ),
  companyName: Yup.string().required('Dette feltet er påkrevd'),
})
