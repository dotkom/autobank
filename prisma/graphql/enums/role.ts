import * as TypeGraphQL from "type-graphql";

export enum role {
  USER = "USER",
  ADMIN = "ADMIN",
  SUPERADMIN = "SUPERADMIN"
}
TypeGraphQL.registerEnumType(role, {
  name: "role",
  description: undefined,
});
