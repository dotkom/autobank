import * as Yup from 'yup'
import axios from 'axios'

export const CompanyInfoValidationSchema = Yup.object().shape({
  organizationNumber: Yup.string()
    .min(9, 'Organisasjonsnummeret må være 9 siffre')
    .max(9, 'Organisasjonsnummeret må være 9 siffre')
    // eslint-disable-next-line no-async-promise-executor
    .test(
      'validateOrgnr',
      'Organisasjonsnummeret finnes ikke i Brønnøysundregistrene',
      (value) =>
        new Promise((resolve) => {
          if (value && value.length === 9) {
            axios
              .get(
                `https://data.brreg.no/enhetsregisteret/api/enheter/${encodeURIComponent(
                  value
                )}`
              )
              .then(() => {
                resolve(true)
              })
              .catch(() => {
                resolve(false)
              })
          } else {
            resolve(false)
          }
        })
    )
    .required('Dette feltet er påkrevd'),
  companyName: Yup.string()
    .required('Dette feltet er påkrevd')
    .max(250, 'Navnet er for langt'),
})
