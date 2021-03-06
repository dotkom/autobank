import * as TypeGraphQL from "type-graphql";

export enum OnlinepottenScalarFieldEnum {
  id = "id",
  occasion = "occasion",
  planned_date = "planned_date",
  hours = "hours",
  description = "description",
  participants = "participants",
  payment_method = "payment_method",
  recipt_id = "recipt_id",
  applicationId = "applicationId"
}
TypeGraphQL.registerEnumType(OnlinepottenScalarFieldEnum, {
  name: "OnlinepottenScalarFieldEnum",
  description: undefined,
});
