import * as Yup from "yup";

export const ACCOUNT_NUMBER_REGEX = new RegExp(/^\d{4} \d{2} \d{5}$/);
export const CARD_DETAIL_REGEX = new RegExp(/^.{5,30}$/);

export const ReceiptInformationValidationSchema = Yup.object().shape({
  amount: Yup.number()
    .typeError("En kvittering må føres på en positiv pengeverdi")
    .test(
      "Valid and required",
      "En kvittering må føres på en positiv pengeverdi",
      (amount) => amount !== null && amount > 0
    ),
  occation: Yup.string().test(
    "Valid and required",
    "Du må legge ved et grunnlag for kjøpet på minst 3 tegn",
    (occation) => occation !== null && occation.length >= 3
  ),
  type: Yup.string().test(
    "Valid type",
    "Det har skjedd en feil ved valg av type, vennligst last inn siden på nytt",
    (type) => type === "card" || type === "deposit"
  ),
  account: Yup.string()
    .nullable()
    .test(
      "Account validity",
      "Kontonummeret må være på 11 siffer",
      (account) =>
        account === "unused" ||
        (account !== null && ACCOUNT_NUMBER_REGEX.test(account))
    ),
  cardDetails: Yup.string()
    .nullable()
    .test(
      "Card detail validity",
      "Informasjonen burde være på mellom 5 og 30 tegn",
      (cardDetails) =>
        cardDetails === "unused" ||
        (cardDetails !== null && CARD_DETAIL_REGEX.test(cardDetails))
    ),
  responsible_unit: Yup.string().test(
    "Group chosen test",
    "Du må velge en komité eller gruppe",
    (unit) => unit !== "default"
  ),
});
