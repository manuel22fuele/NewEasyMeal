import { prismaClient } from "../../../../shared/infra/prisma/prismaClient";
import { IUserDTO } from "../entities/User";
import { IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository{

     async register({email,name,password,phone}: IUserDTO): Promise<void> {
        await prismaClient.user.create({
          data:{
            name:name,
            password:password,
            phone:phone,
            email:email
          }
        })
    }

}

export {UserRepository}