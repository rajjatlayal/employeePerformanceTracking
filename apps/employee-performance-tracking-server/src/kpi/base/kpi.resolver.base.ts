/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Kpi } from "./Kpi";
import { KpiCountArgs } from "./KpiCountArgs";
import { KpiFindManyArgs } from "./KpiFindManyArgs";
import { KpiFindUniqueArgs } from "./KpiFindUniqueArgs";
import { CreateKpiArgs } from "./CreateKpiArgs";
import { UpdateKpiArgs } from "./UpdateKpiArgs";
import { DeleteKpiArgs } from "./DeleteKpiArgs";
import { EmployeeProfile } from "../../employeeProfile/base/EmployeeProfile";
import { KpiService } from "../kpi.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Kpi)
export class KpiResolverBase {
  constructor(
    protected readonly service: KpiService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Kpi",
    action: "read",
    possession: "any",
  })
  async _kpisMeta(
    @graphql.Args() args: KpiCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Kpi])
  @nestAccessControl.UseRoles({
    resource: "Kpi",
    action: "read",
    possession: "any",
  })
  async kpis(@graphql.Args() args: KpiFindManyArgs): Promise<Kpi[]> {
    return this.service.kpis(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Kpi, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Kpi",
    action: "read",
    possession: "own",
  })
  async kpi(@graphql.Args() args: KpiFindUniqueArgs): Promise<Kpi | null> {
    const result = await this.service.kpi(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Kpi)
  @nestAccessControl.UseRoles({
    resource: "Kpi",
    action: "create",
    possession: "any",
  })
  async createKpi(@graphql.Args() args: CreateKpiArgs): Promise<Kpi> {
    return await this.service.createKpi({
      ...args,
      data: {
        ...args.data,

        employeeProfile: args.data.employeeProfile
          ? {
              connect: args.data.employeeProfile,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Kpi)
  @nestAccessControl.UseRoles({
    resource: "Kpi",
    action: "update",
    possession: "any",
  })
  async updateKpi(@graphql.Args() args: UpdateKpiArgs): Promise<Kpi | null> {
    try {
      return await this.service.updateKpi({
        ...args,
        data: {
          ...args.data,

          employeeProfile: args.data.employeeProfile
            ? {
                connect: args.data.employeeProfile,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Kpi)
  @nestAccessControl.UseRoles({
    resource: "Kpi",
    action: "delete",
    possession: "any",
  })
  async deleteKpi(@graphql.Args() args: DeleteKpiArgs): Promise<Kpi | null> {
    try {
      return await this.service.deleteKpi(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => EmployeeProfile, {
    nullable: true,
    name: "employeeProfile",
  })
  @nestAccessControl.UseRoles({
    resource: "EmployeeProfile",
    action: "read",
    possession: "any",
  })
  async getEmployeeProfile(
    @graphql.Parent() parent: Kpi
  ): Promise<EmployeeProfile | null> {
    const result = await this.service.getEmployeeProfile(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
