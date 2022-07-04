import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
// import { PrismaService } from "../../prisma/prisma.service";


@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector ,) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>  {
    // const routePermissions = this.reflector.get<string[]>(
    //   'permissions',
    //   context.getHandler(),
    // );

       //for example
    const routePermissions = ["read:users"]
    

    const userInfo = context.getArgs()[0].user;


    // const  userPermissions =  await this.validateRequest(userInfo);

    //for example
    const  userPermissions = [{"permission":{"resource":"users","method":"read"}},{"permission":{"resource":"book","method":"create"}}]

    
    const  userPermissionsList = userPermissions.map(item => (item.permission.method + ":" + item.permission.resource) )

    


    if (!routePermissions) {
      return true;
    }


  
    const hasPermission = () =>
      routePermissions.some(routePermission =>
        userPermissionsList.includes(routePermission),
      );

    return hasPermission();
  }

  async validateRequest(user: any): Promise<any>{

    //ur quray from database here to get user permissions
}

}