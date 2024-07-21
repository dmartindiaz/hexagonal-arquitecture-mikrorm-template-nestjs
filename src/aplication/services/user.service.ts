import { Injectable } from "@nestjs/common";
import { IUserRepositoryDomain } from "src/domain/repositories/user.repository";
import { IUserInDTO } from "../dto/userIn.dto";
import { plainToClass } from "class-transformer";
import { UserModelDomain } from "src/domain/models/user.model";
import { IUserOutDTO } from "../dto/userOut.dto";

@Injectable()
class UserService {
    constructor(private readonly userRepositoryDomain: IUserRepositoryDomain){}

    async createUser(userInDTO: IUserInDTO) {
        const userDomain = plainToClass(UserModelDomain, userInDTO)
        this.userRepositoryDomain.create(userDomain)
        return this.userInToOut(userInDTO) 
    }

    userInToOut(userInDTO: IUserInDTO){
        return {
            name: userInDTO.name,
            surname: userInDTO.surname
        } as IUserOutDTO
    }
}

export {
    UserService
}