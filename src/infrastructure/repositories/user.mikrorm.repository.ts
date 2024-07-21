import { InjectRepository } from "@mikro-orm/nestjs";
import { UserEntity } from "../entities/user.entity";
import { IUserRepositoryDomain } from "src/domain/repositories/user.repository";
import { plainToClass } from "class-transformer";
import { EntityManager, EntityRepository } from "@mikro-orm/mongodb";
import { UserModelDomain } from "src/domain/models/user.model";

class UserMikrOrmRepository implements IUserRepositoryDomain  {
    constructor(
        @InjectRepository(UserEntity) private readonly userEntity: EntityRepository<UserEntity>,
        private readonly em: EntityManager
    ){}

    async create (userModelDomain: UserModelDomain): Promise<UserModelDomain> {
        const toUserEntity = plainToClass(UserEntity, userModelDomain)
        this.userEntity.create(toUserEntity)
        await this.em.persistAndFlush(toUserEntity)
        return userModelDomain
    }
}

export {
    UserMikrOrmRepository
}