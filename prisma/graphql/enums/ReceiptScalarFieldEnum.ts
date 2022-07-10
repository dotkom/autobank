import * as TypeGraphQL from "type-graphql";

export enum ReceiptScalarFieldEnum {
  id = "id",
  type = "type",
  account = "account",
  card = "card",
  paid_at = "paid_at",
  amount = "amount",
  occasion = "occasion",
  appendix = "appendix",
  applicationId = "applicationId"
}
TypeGraphQL.registerEnumType(ReceiptScalarFieldEnum, {
  name: "ReceiptScalarFieldEnum",
  description: undefined,
});
