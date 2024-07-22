import { InjectRepository } from "@mikro-orm/nestjs";
import { Log } from "../../domain/logs/general.log"
import { UserEntity } from "../entities/user.entity";
import { IUserRepositoryDomain } from "src/domain/repositories/user.repository";
import { plainToClass } from "class-transformer";
import { EntityManager, EntityRepository } from "@mikro-orm/mongodb";
import { UserModelDomain } from "src/domain/models/user.model";
import { HttpException, HttpStatus } from "@nestjs/common";

class UserMikrOrmRepository implements IUserRepositoryDomain  {
    constructor(
        @InjectRepository(UserEntity) private readonly userEntity: EntityRepository<UserEntity>,
        private readonly em: EntityManager
    ){}

    async create (userModelDomain: UserModelDomain): Promise<UserModelDomain> {
        const toUserEntity = plainToClass(UserEntity, userModelDomain)
        this.userEntity.create(toUserEntity)
        await this.em.persistAndFlush(toUserEntity)
        Log.log("User created", `The user ${toUserEntity.name} ${toUserEntity.surname} was created in database`)
        const findUserById = await this.findById(toUserEntity._id.toString())
        return findUserById
    }

    async findById(id: string){
        const findOneUser = await this.userEntity.findOne(id)
        if(findOneUser){
            return plainToClass(UserModelDomain, findOneUser)
        }else{
            throw new HttpException("USER NOT FOUND", HttpStatus.NOT_FOUND)
        }
    }
}

export {
    UserMikrOrmRepository
}