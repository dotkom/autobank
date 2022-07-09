import * as TypeGraphQL from "type-graphql";

export enum InvoiceScalarFieldEnum {
  id = "id",
  orgnr = "orgnr",
  occasion = "occasion",
  method = "method",
  po_nr = "po_nr",
  duedays = "duedays",
  applicationId = "applicationId"
}
TypeGraphQL.registerEnumType(InvoiceScalarFieldEnum, {
  name: "InvoiceScalarFieldEnum",
  description: undefined,
});
