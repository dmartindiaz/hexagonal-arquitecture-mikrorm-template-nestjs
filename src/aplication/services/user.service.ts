import { Injectable } from "@nestjs/common";
import { IUserRepositoryDomain } from "src/domain/repositories/user.repository";
import { IUserInDTO } from "../dto/userIn.dto.interface";
import { plainToClass } from "class-transformer";
import { UserModelDomain } from "src/domain/models/user.model";
import { IUserOutDTO } from "../dto/userOut.dto.interface";

@Injectable()
class UserService {
    constructor(private readonly userRepositoryDomain: IUserRepositoryDomain){}

    async createUser(userInDTO: IUserInDTO) {
        const userInToUserModelDomain = plainToClass(UserModelDomain, userInDTO)
        const userCreated = await this.userRepositoryDomain.create(userInToUserModelDomain)
        return UserService.userInToOut(userCreated) 
    }

    async findUserById(id: string){
        return this.userRepositoryDomain.findById(id)
    }

    static userInToOut(userDomain: UserModelDomain){
        return {
            userId: userDomain.getId(),
            name: userDomain.getName(),
            surname: userDomain.getSurname()
        } as IUserOutDTO
    }
}

export {
    UserService
}