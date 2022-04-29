import * as TypeGraphQL from "type-graphql";

export enum ApplicationScalarFieldEnum {
  id = "id",
  userId = "userId",
  full_name = "full_name",
  email = "email",
  created_at = "created_at",
  approved_at = "approved_at",
  approvedById = "approvedById",
  last_updated = "last_updated",
  status = "status",
  comments = "comments",
  error = "error",
  error_fields = "error_fields"
}
TypeGraphQL.registerEnumType(ApplicationScalarFieldEnum, {
  name: "ApplicationScalarFieldEnum",
  description: undefined,
});
