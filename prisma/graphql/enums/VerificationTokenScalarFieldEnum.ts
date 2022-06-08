import * as TypeGraphQL from "type-graphql";

export enum VerificationTokenScalarFieldEnum {
  identifier = "identifier",
  token = "token",
  expires = "expires"
}
TypeGraphQL.registerEnumType(VerificationTokenScalarFieldEnum, {
  name: "VerificationTokenScalarFieldEnum",
  description: undefined,
});
