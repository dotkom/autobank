import * as TypeGraphQL from "type-graphql";

export enum ApplicationScalarFieldEnum {
  id = "id",
  userId = "userId",
  fullname = "fullname",
  email = "email",
  created_at = "created_at",
  approved_at = "approved_at",
  approvedById = "approvedById",
  last_updated = "last_updated",
  status = "status",
  responsible_committee = "responsible_committee",
  comments = "comments",
  error = "error",
  error_fields = "error_fields"
}
TypeGraphQL.registerEnumType(ApplicationScalarFieldEnum, {
  name: "ApplicationScalarFieldEnum",
  description: undefined,
});
