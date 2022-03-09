import * as Yup from 'yup'

export const InvoiceInformationValidationSchema = Yup.object().shape({
  occation: Yup.string().not(['default'], 'Dette feltet er påkrevd'),
  delivery: Yup.string().not(['default'], 'Dette feltet er påkrevd'),
  deliveryAdress: Yup.string().when('delivery', {
    is: (delivery: string) => delivery === 'epost' || delivery === 'adresse',
    then: Yup.string().required('Dette feltet er påkrevd'),
  }),
  comments: Yup.string()
    .notRequired()
    .max(2000, 'Prøv å skriv under 2000 tegn'),
  isDueDate: Yup.boolean(),
  dueDate: Yup.string().when('isDueDate', {
    is: (isduedate: boolean) => isduedate,
    then: Yup.string().required('Dette feltet er påkrevd'),
  }),
  isPoNumber: Yup.boolean(),
  poNumber: Yup.string().when('isPoNumber', {
    is: (isponumber: boolean) => isponumber,
    then: Yup.string().required('Dette feltet er påkrevd'),
  }),
})
