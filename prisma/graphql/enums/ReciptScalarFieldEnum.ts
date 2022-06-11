import * as TypeGraphQL from "type-graphql";

export enum ReciptScalarFieldEnum {
  id = "id",
  reimbursement = "reimbursement",
  account_nr = "account_nr",
  card = "card",
  paid_at = "paid_at",
  amount = "amount",
  occasion = "occasion",
  appendix = "appendix"
}
TypeGraphQL.registerEnumType(ReciptScalarFieldEnum, {
  name: "ReciptScalarFieldEnum",
  description: undefined,
});
