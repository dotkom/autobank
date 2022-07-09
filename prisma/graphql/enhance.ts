import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Account: crudResolvers.AccountCrudResolver,
  Session: crudResolvers.SessionCrudResolver,
  User: crudResolvers.UserCrudResolver,
  VerificationToken: crudResolvers.VerificationTokenCrudResolver,
  Application: crudResolvers.ApplicationCrudResolver,
  Receipt: crudResolvers.ReceiptCrudResolver,
  Onlinepotten: crudResolvers.OnlinepottenCrudResolver,
  Invoice: crudResolvers.InvoiceCrudResolver
};
const actionResolversMap = {
  Account: {
    account: actionResolvers.FindUniqueAccountResolver,
    findFirstAccount: actionResolvers.FindFirstAccountResolver,
    accounts: actionResolvers.FindManyAccountResolver,
    createAccount: actionResolvers.CreateAccountResolver,
    createManyAccount: actionResolvers.CreateManyAccountResolver,
    deleteAccount: actionResolvers.DeleteAccountResolver,
    updateAccount: actionResolvers.UpdateAccountResolver,
    deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
    updateManyAccount: actionResolvers.UpdateManyAccountResolver,
    upsertAccount: actionResolvers.UpsertAccountResolver,
    aggregateAccount: actionResolvers.AggregateAccountResolver,
    groupByAccount: actionResolvers.GroupByAccountResolver
  },
  Session: {
    session: actionResolvers.FindUniqueSessionResolver,
    findFirstSession: actionResolvers.FindFirstSessionResolver,
    sessions: actionResolvers.FindManySessionResolver,
    createSession: actionResolvers.CreateSessionResolver,
    createManySession: actionResolvers.CreateManySessionResolver,
    deleteSession: actionResolvers.DeleteSessionResolver,
    updateSession: actionResolvers.UpdateSessionResolver,
    deleteManySession: actionResolvers.DeleteManySessionResolver,
    updateManySession: actionResolvers.UpdateManySessionResolver,
    upsertSession: actionResolvers.UpsertSessionResolver,
    aggregateSession: actionResolvers.AggregateSessionResolver,
    groupBySession: actionResolvers.GroupBySessionResolver
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  VerificationToken: {
    verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
    findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
    verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
    createVerificationToken: actionResolvers.CreateVerificationTokenResolver,
    createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
    deleteVerificationToken: actionResolvers.DeleteVerificationTokenResolver,
    updateVerificationToken: actionResolvers.UpdateVerificationTokenResolver,
    deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
    updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
    upsertVerificationToken: actionResolvers.UpsertVerificationTokenResolver,
    aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
    groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver
  },
  Application: {
    application: actionResolvers.FindUniqueApplicationResolver,
    findFirstApplication: actionResolvers.FindFirstApplicationResolver,
    applications: actionResolvers.FindManyApplicationResolver,
    createApplication: actionResolvers.CreateApplicationResolver,
    createManyApplication: actionResolvers.CreateManyApplicationResolver,
    deleteApplication: actionResolvers.DeleteApplicationResolver,
    updateApplication: actionResolvers.UpdateApplicationResolver,
    deleteManyApplication: actionResolvers.DeleteManyApplicationResolver,
    updateManyApplication: actionResolvers.UpdateManyApplicationResolver,
    upsertApplication: actionResolvers.UpsertApplicationResolver,
    aggregateApplication: actionResolvers.AggregateApplicationResolver,
    groupByApplication: actionResolvers.GroupByApplicationResolver
  },
  Receipt: {
    receipt: actionResolvers.FindUniqueReceiptResolver,
    findFirstReceipt: actionResolvers.FindFirstReceiptResolver,
    receipts: actionResolvers.FindManyReceiptResolver,
    createReceipt: actionResolvers.CreateReceiptResolver,
    createManyReceipt: actionResolvers.CreateManyReceiptResolver,
    deleteReceipt: actionResolvers.DeleteReceiptResolver,
    updateReceipt: actionResolvers.UpdateReceiptResolver,
    deleteManyReceipt: actionResolvers.DeleteManyReceiptResolver,
    updateManyReceipt: actionResolvers.UpdateManyReceiptResolver,
    upsertReceipt: actionResolvers.UpsertReceiptResolver,
    aggregateReceipt: actionResolvers.AggregateReceiptResolver,
    groupByReceipt: actionResolvers.GroupByReceiptResolver
  },
  Onlinepotten: {
    onlinepotten: actionResolvers.FindUniqueOnlinepottenResolver,
    findFirstOnlinepotten: actionResolvers.FindFirstOnlinepottenResolver,
    onlinepottens: actionResolvers.FindManyOnlinepottenResolver,
    createOnlinepotten: actionResolvers.CreateOnlinepottenResolver,
    createManyOnlinepotten: actionResolvers.CreateManyOnlinepottenResolver,
    deleteOnlinepotten: actionResolvers.DeleteOnlinepottenResolver,
    updateOnlinepotten: actionResolvers.UpdateOnlinepottenResolver,
    deleteManyOnlinepotten: actionResolvers.DeleteManyOnlinepottenResolver,
    updateManyOnlinepotten: actionResolvers.UpdateManyOnlinepottenResolver,
    upsertOnlinepotten: actionResolvers.UpsertOnlinepottenResolver,
    aggregateOnlinepotten: actionResolvers.AggregateOnlinepottenResolver,
    groupByOnlinepotten: actionResolvers.GroupByOnlinepottenResolver
  },
  Invoice: {
    invoice: actionResolvers.FindUniqueInvoiceResolver,
    findFirstInvoice: actionResolvers.FindFirstInvoiceResolver,
    invoices: actionResolvers.FindManyInvoiceResolver,
    createInvoice: actionResolvers.CreateInvoiceResolver,
    createManyInvoice: actionResolvers.CreateManyInvoiceResolver,
    deleteInvoice: actionResolvers.DeleteInvoiceResolver,
    updateInvoice: actionResolvers.UpdateInvoiceResolver,
    deleteManyInvoice: actionResolvers.DeleteManyInvoiceResolver,
    updateManyInvoice: actionResolvers.UpdateManyInvoiceResolver,
    upsertInvoice: actionResolvers.UpsertInvoiceResolver,
    aggregateInvoice: actionResolvers.AggregateInvoiceResolver,
    groupByInvoice: actionResolvers.GroupByInvoiceResolver
  }
};
const crudResolversInfo = {
  Account: ["account", "findFirstAccount", "accounts", "createAccount", "createManyAccount", "deleteAccount", "updateAccount", "deleteManyAccount", "updateManyAccount", "upsertAccount", "aggregateAccount", "groupByAccount"],
  Session: ["session", "findFirstSession", "sessions", "createSession", "createManySession", "deleteSession", "updateSession", "deleteManySession", "updateManySession", "upsertSession", "aggregateSession", "groupBySession"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  VerificationToken: ["verificationToken", "findFirstVerificationToken", "verificationTokens", "createVerificationToken", "createManyVerificationToken", "deleteVerificationToken", "updateVerificationToken", "deleteManyVerificationToken", "updateManyVerificationToken", "upsertVerificationToken", "aggregateVerificationToken", "groupByVerificationToken"],
  Application: ["application", "findFirstApplication", "applications", "createApplication", "createManyApplication", "deleteApplication", "updateApplication", "deleteManyApplication", "updateManyApplication", "upsertApplication", "aggregateApplication", "groupByApplication"],
  Receipt: ["receipt", "findFirstReceipt", "receipts", "createReceipt", "createManyReceipt", "deleteReceipt", "updateReceipt", "deleteManyReceipt", "updateManyReceipt", "upsertReceipt", "aggregateReceipt", "groupByReceipt"],
  Onlinepotten: ["onlinepotten", "findFirstOnlinepotten", "onlinepottens", "createOnlinepotten", "createManyOnlinepotten", "deleteOnlinepotten", "updateOnlinepotten", "deleteManyOnlinepotten", "updateManyOnlinepotten", "upsertOnlinepotten", "aggregateOnlinepotten", "groupByOnlinepotten"],
  Invoice: ["invoice", "findFirstInvoice", "invoices", "createInvoice", "createManyInvoice", "deleteInvoice", "updateInvoice", "deleteManyInvoice", "updateManyInvoice", "upsertInvoice", "aggregateInvoice", "groupByInvoice"]
};
const argsInfo = {
  FindUniqueAccountArgs: ["where"],
  FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAccountArgs: ["data"],
  CreateManyAccountArgs: ["data", "skipDuplicates"],
  DeleteAccountArgs: ["where"],
  UpdateAccountArgs: ["data", "where"],
  DeleteManyAccountArgs: ["where"],
  UpdateManyAccountArgs: ["data", "where"],
  UpsertAccountArgs: ["where", "create", "update"],
  AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSessionArgs: ["where"],
  FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSessionArgs: ["data"],
  CreateManySessionArgs: ["data", "skipDuplicates"],
  DeleteSessionArgs: ["where"],
  UpdateSessionArgs: ["data", "where"],
  DeleteManySessionArgs: ["where"],
  UpdateManySessionArgs: ["data", "where"],
  UpsertSessionArgs: ["where", "create", "update"],
  AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueVerificationTokenArgs: ["where"],
  FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateVerificationTokenArgs: ["data"],
  CreateManyVerificationTokenArgs: ["data", "skipDuplicates"],
  DeleteVerificationTokenArgs: ["where"],
  UpdateVerificationTokenArgs: ["data", "where"],
  DeleteManyVerificationTokenArgs: ["where"],
  UpdateManyVerificationTokenArgs: ["data", "where"],
  UpsertVerificationTokenArgs: ["where", "create", "update"],
  AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueApplicationArgs: ["where"],
  FindFirstApplicationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyApplicationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateApplicationArgs: ["data"],
  CreateManyApplicationArgs: ["data", "skipDuplicates"],
  DeleteApplicationArgs: ["where"],
  UpdateApplicationArgs: ["data", "where"],
  DeleteManyApplicationArgs: ["where"],
  UpdateManyApplicationArgs: ["data", "where"],
  UpsertApplicationArgs: ["where", "create", "update"],
  AggregateApplicationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByApplicationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueReceiptArgs: ["where"],
  FindFirstReceiptArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyReceiptArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateReceiptArgs: ["data"],
  CreateManyReceiptArgs: ["data", "skipDuplicates"],
  DeleteReceiptArgs: ["where"],
  UpdateReceiptArgs: ["data", "where"],
  DeleteManyReceiptArgs: ["where"],
  UpdateManyReceiptArgs: ["data", "where"],
  UpsertReceiptArgs: ["where", "create", "update"],
  AggregateReceiptArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByReceiptArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueOnlinepottenArgs: ["where"],
  FindFirstOnlinepottenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOnlinepottenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateOnlinepottenArgs: ["data"],
  CreateManyOnlinepottenArgs: ["data", "skipDuplicates"],
  DeleteOnlinepottenArgs: ["where"],
  UpdateOnlinepottenArgs: ["data", "where"],
  DeleteManyOnlinepottenArgs: ["where"],
  UpdateManyOnlinepottenArgs: ["data", "where"],
  UpsertOnlinepottenArgs: ["where", "create", "update"],
  AggregateOnlinepottenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByOnlinepottenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueInvoiceArgs: ["where"],
  FindFirstInvoiceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyInvoiceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateInvoiceArgs: ["data"],
  CreateManyInvoiceArgs: ["data", "skipDuplicates"],
  DeleteInvoiceArgs: ["where"],
  UpdateInvoiceArgs: ["data", "where"],
  DeleteManyInvoiceArgs: ["where"],
  UpdateManyInvoiceArgs: ["data", "where"],
  UpsertInvoiceArgs: ["where", "create", "update"],
  AggregateInvoiceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByInvoiceArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Account: relationResolvers.AccountRelationsResolver,
  Session: relationResolvers.SessionRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  Application: relationResolvers.ApplicationRelationsResolver,
  Receipt: relationResolvers.ReceiptRelationsResolver,
  Onlinepotten: relationResolvers.OnlinepottenRelationsResolver,
  Invoice: relationResolvers.InvoiceRelationsResolver
};
const relationResolversInfo = {
  Account: ["user"],
  Session: ["user"],
  User: ["applications", "approvedApplications"],
  Application: ["user", "approvedBy", "Receipt", "Onlinepotten", "Invoice"],
  Receipt: ["application"],
  Onlinepotten: ["application"],
  Invoice: ["application"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Account: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  Session: ["id", "sessionToken", "userId", "expires"],
  User: ["id", "name", "email", "emailVerified", "image", "role"],
  VerificationToken: ["identifier", "token", "expires"],
  Application: ["id", "userId", "full_name", "email", "created_at", "approved_at", "approvedById", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields"],
  Receipt: ["id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "appendix", "applicationId"],
  Onlinepotten: ["id", "occasion", "planned_date", "hours", "description", "participants", "payment_method", "recipt_id", "applicationId"],
  Invoice: ["id", "orgnr", "occasion", "method", "po_nr", "duedays", "applicationId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
  AccountGroupBy: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSession: ["_count", "_min", "_max"],
  SessionGroupBy: ["id", "sessionToken", "userId", "expires", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "name", "email", "emailVerified", "image", "role", "_count", "_min", "_max"],
  AggregateVerificationToken: ["_count", "_min", "_max"],
  VerificationTokenGroupBy: ["identifier", "token", "expires", "_count", "_min", "_max"],
  AggregateApplication: ["_count", "_min", "_max"],
  ApplicationGroupBy: ["id", "userId", "full_name", "email", "created_at", "approved_at", "approvedById", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields", "_count", "_min", "_max"],
  AggregateReceipt: ["_count", "_avg", "_sum", "_min", "_max"],
  ReceiptGroupBy: ["id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "appendix", "applicationId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOnlinepotten: ["_count", "_avg", "_sum", "_min", "_max"],
  OnlinepottenGroupBy: ["id", "occasion", "planned_date", "hours", "description", "participants", "payment_method", "recipt_id", "applicationId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateInvoice: ["_count", "_avg", "_sum", "_min", "_max"],
  InvoiceGroupBy: ["id", "orgnr", "occasion", "method", "po_nr", "duedays", "applicationId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  AccountCountAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_all"],
  AccountAvgAggregate: ["expires_at"],
  AccountSumAggregate: ["expires_at"],
  AccountMinAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountMaxAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionCountAggregate: ["id", "sessionToken", "userId", "expires", "_all"],
  SessionMinAggregate: ["id", "sessionToken", "userId", "expires"],
  SessionMaxAggregate: ["id", "sessionToken", "userId", "expires"],
  UserCount: ["accounts", "sessions", "applications", "approvedApplications"],
  UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "role", "_all"],
  UserMinAggregate: ["id", "name", "email", "emailVerified", "image", "role"],
  UserMaxAggregate: ["id", "name", "email", "emailVerified", "image", "role"],
  VerificationTokenCountAggregate: ["identifier", "token", "expires", "_all"],
  VerificationTokenMinAggregate: ["identifier", "token", "expires"],
  VerificationTokenMaxAggregate: ["identifier", "token", "expires"],
  ApplicationCountAggregate: ["id", "userId", "full_name", "email", "created_at", "approved_at", "approvedById", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields", "_all"],
  ApplicationMinAggregate: ["id", "userId", "full_name", "email", "created_at", "approved_at", "approvedById", "last_updated", "status", "responsible_unit", "comments", "error"],
  ApplicationMaxAggregate: ["id", "userId", "full_name", "email", "created_at", "approved_at", "approvedById", "last_updated", "status", "responsible_unit", "comments", "error"],
  ReceiptCountAggregate: ["id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "appendix", "applicationId", "_all"],
  ReceiptAvgAggregate: ["account_nr", "amount"],
  ReceiptSumAggregate: ["account_nr", "amount"],
  ReceiptMinAggregate: ["id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "applicationId"],
  ReceiptMaxAggregate: ["id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "applicationId"],
  OnlinepottenCountAggregate: ["id", "occasion", "planned_date", "hours", "description", "participants", "payment_method", "recipt_id", "applicationId", "_all"],
  OnlinepottenAvgAggregate: ["hours", "recipt_id"],
  OnlinepottenSumAggregate: ["hours", "recipt_id"],
  OnlinepottenMinAggregate: ["id", "occasion", "planned_date", "hours", "description", "payment_method", "recipt_id", "applicationId"],
  OnlinepottenMaxAggregate: ["id", "occasion", "planned_date", "hours", "description", "payment_method", "recipt_id", "applicationId"],
  InvoiceCountAggregate: ["id", "orgnr", "occasion", "method", "po_nr", "duedays", "applicationId", "_all"],
  InvoiceAvgAggregate: ["duedays"],
  InvoiceSumAggregate: ["duedays"],
  InvoiceMinAggregate: ["id", "orgnr", "occasion", "method", "po_nr", "duedays", "applicationId"],
  InvoiceMaxAggregate: ["id", "orgnr", "occasion", "method", "po_nr", "duedays", "applicationId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  AccountWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountOrderByWithRelationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountWhereUniqueInput: ["id", "provider_providerAccountId"],
  AccountOrderByWithAggregationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_max", "_min", "_sum"],
  AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires", "user"],
  SessionOrderByWithRelationInput: ["id", "sessionToken", "userId", "expires", "user"],
  SessionWhereUniqueInput: ["id", "sessionToken"],
  SessionOrderByWithAggregationInput: ["id", "sessionToken", "userId", "expires", "_count", "_max", "_min"],
  SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "applications", "approvedApplications"],
  UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "applications", "approvedApplications"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "image", "role", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "role"],
  VerificationTokenWhereInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
  VerificationTokenOrderByWithRelationInput: ["identifier", "token", "expires"],
  VerificationTokenWhereUniqueInput: ["token", "identifier_token"],
  VerificationTokenOrderByWithAggregationInput: ["identifier", "token", "expires", "_count", "_max", "_min"],
  VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
  ApplicationWhereInput: ["AND", "OR", "NOT", "id", "user", "userId", "full_name", "email", "created_at", "approved_at", "approvedBy", "approvedById", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields", "Receipt", "Onlinepotten", "Invoice"],
  ApplicationOrderByWithRelationInput: ["id", "user", "userId", "full_name", "email", "created_at", "approved_at", "approvedBy", "approvedById", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields", "Receipt", "Onlinepotten", "Invoice"],
  ApplicationWhereUniqueInput: ["id"],
  ApplicationOrderByWithAggregationInput: ["id", "userId", "full_name", "email", "created_at", "approved_at", "approvedById", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields", "_count", "_max", "_min"],
  ApplicationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "full_name", "email", "created_at", "approved_at", "approvedById", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields"],
  ReceiptWhereInput: ["AND", "OR", "NOT", "id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "appendix", "application", "applicationId"],
  ReceiptOrderByWithRelationInput: ["id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "appendix", "application", "applicationId"],
  ReceiptWhereUniqueInput: ["id", "applicationId"],
  ReceiptOrderByWithAggregationInput: ["id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "appendix", "applicationId", "_count", "_avg", "_max", "_min", "_sum"],
  ReceiptScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "appendix", "applicationId"],
  OnlinepottenWhereInput: ["AND", "OR", "NOT", "id", "occasion", "planned_date", "hours", "description", "participants", "payment_method", "recipt_id", "application", "applicationId"],
  OnlinepottenOrderByWithRelationInput: ["id", "occasion", "planned_date", "hours", "description", "participants", "payment_method", "recipt_id", "application", "applicationId"],
  OnlinepottenWhereUniqueInput: ["id", "applicationId"],
  OnlinepottenOrderByWithAggregationInput: ["id", "occasion", "planned_date", "hours", "description", "participants", "payment_method", "recipt_id", "applicationId", "_count", "_avg", "_max", "_min", "_sum"],
  OnlinepottenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "occasion", "planned_date", "hours", "description", "participants", "payment_method", "recipt_id", "applicationId"],
  InvoiceWhereInput: ["AND", "OR", "NOT", "id", "orgnr", "occasion", "method", "po_nr", "duedays", "application", "applicationId"],
  InvoiceOrderByWithRelationInput: ["id", "orgnr", "occasion", "method", "po_nr", "duedays", "application", "applicationId"],
  InvoiceWhereUniqueInput: ["id", "applicationId"],
  InvoiceOrderByWithAggregationInput: ["id", "orgnr", "occasion", "method", "po_nr", "duedays", "applicationId", "_count", "_avg", "_max", "_min", "_sum"],
  InvoiceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "orgnr", "occasion", "method", "po_nr", "duedays", "applicationId"],
  AccountCreateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountUpdateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountCreateManyInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountUpdateManyMutationInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionCreateInput: ["id", "sessionToken", "expires", "user"],
  SessionUpdateInput: ["id", "sessionToken", "expires", "user"],
  SessionCreateManyInput: ["id", "sessionToken", "userId", "expires"],
  SessionUpdateManyMutationInput: ["id", "sessionToken", "expires"],
  UserCreateInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "applications", "approvedApplications"],
  UserUpdateInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "applications", "approvedApplications"],
  UserCreateManyInput: ["id", "name", "email", "emailVerified", "image", "role"],
  UserUpdateManyMutationInput: ["id", "name", "email", "emailVerified", "image", "role"],
  VerificationTokenCreateInput: ["identifier", "token", "expires"],
  VerificationTokenUpdateInput: ["identifier", "token", "expires"],
  VerificationTokenCreateManyInput: ["identifier", "token", "expires"],
  VerificationTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
  ApplicationCreateInput: ["id", "user", "full_name", "email", "created_at", "approved_at", "approvedBy", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields", "Receipt", "Onlinepotten", "Invoice"],
  ApplicationUpdateInput: ["id", "user", "full_name", "email", "created_at", "approved_at", "approvedBy", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields", "Receipt", "Onlinepotten", "Invoice"],
  ApplicationCreateManyInput: ["id", "userId", "full_name", "email", "created_at", "approved_at", "approvedById", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields"],
  ApplicationUpdateManyMutationInput: ["id", "full_name", "email", "created_at", "approved_at", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields"],
  ReceiptCreateInput: ["id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "appendix", "application"],
  ReceiptUpdateInput: ["id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "appendix", "application"],
  ReceiptCreateManyInput: ["id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "appendix", "applicationId"],
  ReceiptUpdateManyMutationInput: ["id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "appendix"],
  OnlinepottenCreateInput: ["id", "occasion", "planned_date", "hours", "description", "participants", "payment_method", "recipt_id", "application"],
  OnlinepottenUpdateInput: ["id", "occasion", "planned_date", "hours", "description", "participants", "payment_method", "recipt_id", "application"],
  OnlinepottenCreateManyInput: ["id", "occasion", "planned_date", "hours", "description", "participants", "payment_method", "recipt_id", "applicationId"],
  OnlinepottenUpdateManyMutationInput: ["id", "occasion", "planned_date", "hours", "description", "participants", "payment_method", "recipt_id"],
  InvoiceCreateInput: ["id", "orgnr", "occasion", "method", "po_nr", "duedays", "application"],
  InvoiceUpdateInput: ["id", "orgnr", "occasion", "method", "po_nr", "duedays", "application"],
  InvoiceCreateManyInput: ["id", "orgnr", "occasion", "method", "po_nr", "duedays", "applicationId"],
  InvoiceUpdateManyMutationInput: ["id", "orgnr", "occasion", "method", "po_nr", "duedays"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRelationFilter: ["is", "isNot"],
  AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
  AccountCountOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountAvgOrderByAggregateInput: ["expires_at"],
  AccountMaxOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountMinOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountSumOrderByAggregateInput: ["expires_at"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  SessionCountOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  SessionMaxOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  SessionMinOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumroleFilter: ["equals", "in", "notIn", "not"],
  AccountListRelationFilter: ["every", "some", "none"],
  SessionListRelationFilter: ["every", "some", "none"],
  ApplicationListRelationFilter: ["every", "some", "none"],
  AccountOrderByRelationAggregateInput: ["_count"],
  SessionOrderByRelationAggregateInput: ["_count"],
  ApplicationOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "role"],
  UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "role"],
  UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "role"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumroleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  VerificationTokenIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
  VerificationTokenCountOrderByAggregateInput: ["identifier", "token", "expires"],
  VerificationTokenMaxOrderByAggregateInput: ["identifier", "token", "expires"],
  VerificationTokenMinOrderByAggregateInput: ["identifier", "token", "expires"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  ReceiptRelationFilter: ["is", "isNot"],
  OnlinepottenRelationFilter: ["is", "isNot"],
  InvoiceRelationFilter: ["is", "isNot"],
  ApplicationCountOrderByAggregateInput: ["id", "userId", "full_name", "email", "created_at", "approved_at", "approvedById", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields"],
  ApplicationMaxOrderByAggregateInput: ["id", "userId", "full_name", "email", "created_at", "approved_at", "approvedById", "last_updated", "status", "responsible_unit", "comments", "error"],
  ApplicationMinOrderByAggregateInput: ["id", "userId", "full_name", "email", "created_at", "approved_at", "approvedById", "last_updated", "status", "responsible_unit", "comments", "error"],
  EnumreceiptTypeFilter: ["equals", "in", "notIn", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ApplicationRelationFilter: ["is", "isNot"],
  ReceiptCountOrderByAggregateInput: ["id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "appendix", "applicationId"],
  ReceiptAvgOrderByAggregateInput: ["account_nr", "amount"],
  ReceiptMaxOrderByAggregateInput: ["id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "applicationId"],
  ReceiptMinOrderByAggregateInput: ["id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "applicationId"],
  ReceiptSumOrderByAggregateInput: ["account_nr", "amount"],
  EnumreceiptTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  OnlinepottenCountOrderByAggregateInput: ["id", "occasion", "planned_date", "hours", "description", "participants", "payment_method", "recipt_id", "applicationId"],
  OnlinepottenAvgOrderByAggregateInput: ["hours", "recipt_id"],
  OnlinepottenMaxOrderByAggregateInput: ["id", "occasion", "planned_date", "hours", "description", "payment_method", "recipt_id", "applicationId"],
  OnlinepottenMinOrderByAggregateInput: ["id", "occasion", "planned_date", "hours", "description", "payment_method", "recipt_id", "applicationId"],
  OnlinepottenSumOrderByAggregateInput: ["hours", "recipt_id"],
  InvoiceCountOrderByAggregateInput: ["id", "orgnr", "occasion", "method", "po_nr", "duedays", "applicationId"],
  InvoiceAvgOrderByAggregateInput: ["duedays"],
  InvoiceMaxOrderByAggregateInput: ["id", "orgnr", "occasion", "method", "po_nr", "duedays", "applicationId"],
  InvoiceMinOrderByAggregateInput: ["id", "orgnr", "occasion", "method", "po_nr", "duedays", "applicationId"],
  InvoiceSumOrderByAggregateInput: ["duedays"],
  UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneRequiredWithoutAccountsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutSessionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  ApplicationCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  ApplicationCreateNestedManyWithoutApprovedByInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  EnumroleFieldUpdateOperationsInput: ["set"],
  AccountUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SessionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ApplicationUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ApplicationUpdateManyWithoutApprovedByInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutApplicationsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutApprovedApplicationsInput: ["create", "connectOrCreate", "connect"],
  ApplicationCreateerror_fieldsInput: ["set"],
  ReceiptCreateNestedOneWithoutApplicationInput: ["create", "connectOrCreate", "connect"],
  OnlinepottenCreateNestedOneWithoutApplicationInput: ["create", "connectOrCreate", "connect"],
  InvoiceCreateNestedOneWithoutApplicationInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutApplicationsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserUpdateOneWithoutApprovedApplicationsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ApplicationUpdateerror_fieldsInput: ["set", "push"],
  ReceiptUpdateOneWithoutApplicationInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  OnlinepottenUpdateOneWithoutApplicationInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  InvoiceUpdateOneWithoutApplicationInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ReceiptCreateappendixInput: ["set"],
  ApplicationCreateNestedOneWithoutReceiptInput: ["create", "connectOrCreate", "connect"],
  EnumreceiptTypeFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ReceiptUpdateappendixInput: ["set", "push"],
  ApplicationUpdateOneRequiredWithoutReceiptInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  OnlinepottenCreateparticipantsInput: ["set"],
  ApplicationCreateNestedOneWithoutOnlinepottenInput: ["create", "connectOrCreate", "connect"],
  OnlinepottenUpdateparticipantsInput: ["set", "push"],
  ApplicationUpdateOneRequiredWithoutOnlinepottenInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ApplicationCreateNestedOneWithoutInvoiceInput: ["create", "connectOrCreate", "connect"],
  ApplicationUpdateOneRequiredWithoutInvoiceInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumroleFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumroleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumreceiptTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumreceiptTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserCreateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "role", "sessions", "applications", "approvedApplications"],
  UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
  UserUpsertWithoutAccountsInput: ["update", "create"],
  UserUpdateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "role", "sessions", "applications", "approvedApplications"],
  UserCreateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "applications", "approvedApplications"],
  UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
  UserUpsertWithoutSessionsInput: ["update", "create"],
  UserUpdateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "applications", "approvedApplications"],
  AccountCreateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountCreateOrConnectWithoutUserInput: ["where", "create"],
  AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  SessionCreateWithoutUserInput: ["id", "sessionToken", "expires"],
  SessionCreateOrConnectWithoutUserInput: ["where", "create"],
  SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ApplicationCreateWithoutUserInput: ["id", "full_name", "email", "created_at", "approved_at", "approvedBy", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields", "Receipt", "Onlinepotten", "Invoice"],
  ApplicationCreateOrConnectWithoutUserInput: ["where", "create"],
  ApplicationCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ApplicationCreateWithoutApprovedByInput: ["id", "user", "full_name", "email", "created_at", "approved_at", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields", "Receipt", "Onlinepotten", "Invoice"],
  ApplicationCreateOrConnectWithoutApprovedByInput: ["where", "create"],
  ApplicationCreateManyApprovedByInputEnvelope: ["data", "skipDuplicates"],
  AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
  ApplicationUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ApplicationUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ApplicationUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  ApplicationScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "full_name", "email", "created_at", "approved_at", "approvedById", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields"],
  ApplicationUpsertWithWhereUniqueWithoutApprovedByInput: ["where", "update", "create"],
  ApplicationUpdateWithWhereUniqueWithoutApprovedByInput: ["where", "data"],
  ApplicationUpdateManyWithWhereWithoutApprovedByInput: ["where", "data"],
  UserCreateWithoutApplicationsInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "approvedApplications"],
  UserCreateOrConnectWithoutApplicationsInput: ["where", "create"],
  UserCreateWithoutApprovedApplicationsInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "applications"],
  UserCreateOrConnectWithoutApprovedApplicationsInput: ["where", "create"],
  ReceiptCreateWithoutApplicationInput: ["id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "appendix"],
  ReceiptCreateOrConnectWithoutApplicationInput: ["where", "create"],
  OnlinepottenCreateWithoutApplicationInput: ["id", "occasion", "planned_date", "hours", "description", "participants", "payment_method", "recipt_id"],
  OnlinepottenCreateOrConnectWithoutApplicationInput: ["where", "create"],
  InvoiceCreateWithoutApplicationInput: ["id", "orgnr", "occasion", "method", "po_nr", "duedays"],
  InvoiceCreateOrConnectWithoutApplicationInput: ["where", "create"],
  UserUpsertWithoutApplicationsInput: ["update", "create"],
  UserUpdateWithoutApplicationsInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "approvedApplications"],
  UserUpsertWithoutApprovedApplicationsInput: ["update", "create"],
  UserUpdateWithoutApprovedApplicationsInput: ["id", "name", "email", "emailVerified", "image", "role", "accounts", "sessions", "applications"],
  ReceiptUpsertWithoutApplicationInput: ["update", "create"],
  ReceiptUpdateWithoutApplicationInput: ["id", "type", "account_nr", "card", "paid_at", "amount", "occasion", "appendix"],
  OnlinepottenUpsertWithoutApplicationInput: ["update", "create"],
  OnlinepottenUpdateWithoutApplicationInput: ["id", "occasion", "planned_date", "hours", "description", "participants", "payment_method", "recipt_id"],
  InvoiceUpsertWithoutApplicationInput: ["update", "create"],
  InvoiceUpdateWithoutApplicationInput: ["id", "orgnr", "occasion", "method", "po_nr", "duedays"],
  ApplicationCreateWithoutReceiptInput: ["id", "user", "full_name", "email", "created_at", "approved_at", "approvedBy", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields", "Onlinepotten", "Invoice"],
  ApplicationCreateOrConnectWithoutReceiptInput: ["where", "create"],
  ApplicationUpsertWithoutReceiptInput: ["update", "create"],
  ApplicationUpdateWithoutReceiptInput: ["id", "user", "full_name", "email", "created_at", "approved_at", "approvedBy", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields", "Onlinepotten", "Invoice"],
  ApplicationCreateWithoutOnlinepottenInput: ["id", "user", "full_name", "email", "created_at", "approved_at", "approvedBy", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields", "Receipt", "Invoice"],
  ApplicationCreateOrConnectWithoutOnlinepottenInput: ["where", "create"],
  ApplicationUpsertWithoutOnlinepottenInput: ["update", "create"],
  ApplicationUpdateWithoutOnlinepottenInput: ["id", "user", "full_name", "email", "created_at", "approved_at", "approvedBy", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields", "Receipt", "Invoice"],
  ApplicationCreateWithoutInvoiceInput: ["id", "user", "full_name", "email", "created_at", "approved_at", "approvedBy", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields", "Receipt", "Onlinepotten"],
  ApplicationCreateOrConnectWithoutInvoiceInput: ["where", "create"],
  ApplicationUpsertWithoutInvoiceInput: ["update", "create"],
  ApplicationUpdateWithoutInvoiceInput: ["id", "user", "full_name", "email", "created_at", "approved_at", "approvedBy", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields", "Receipt", "Onlinepotten"],
  AccountCreateManyUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionCreateManyUserInput: ["id", "sessionToken", "expires"],
  ApplicationCreateManyUserInput: ["id", "full_name", "email", "created_at", "approved_at", "approvedById", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields"],
  ApplicationCreateManyApprovedByInput: ["id", "userId", "full_name", "email", "created_at", "approved_at", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields"],
  AccountUpdateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionUpdateWithoutUserInput: ["id", "sessionToken", "expires"],
  ApplicationUpdateWithoutUserInput: ["id", "full_name", "email", "created_at", "approved_at", "approvedBy", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields", "Receipt", "Onlinepotten", "Invoice"],
  ApplicationUpdateWithoutApprovedByInput: ["id", "user", "full_name", "email", "created_at", "approved_at", "last_updated", "status", "responsible_unit", "comments", "error", "error_fields", "Receipt", "Onlinepotten", "Invoice"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

