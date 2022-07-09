import * as TypeGraphQL from "type-graphql";

export enum receiptType {
  card = "card",
  deposit = "deposit"
}
TypeGraphQL.registerEnumType(receiptType, {
  name: "receiptType",
  description: undefined,
});
