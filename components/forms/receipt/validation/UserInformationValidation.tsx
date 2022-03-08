import * as Yup from "yup";

export const EMAIL_REGEX = new RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export const UserInformationValidationSchema = Yup.object().shape({
  fullname: Yup.string().test(
    "required and valid name",
    "Du må inkludere både fornavn og etternavn",
    (fullname) => fullname !== null && fullname.split(" ").length > 1
  ),
  email: Yup.string()
    .required("Feltet må inneholde en gyldig e-postadresse")
    .test(
      "valid e-mail",
      "Feltet må inneholde en gyldig e-postadresse",
      (email) => email !== null && EMAIL_REGEX.test(email)
    ),
  toc: Yup.boolean().test(
    "isChecked",
    "Du må godkjenne vår TOC for å kunne sende inn kvitteringsskjema",
    (toc) => toc
  ),
});
