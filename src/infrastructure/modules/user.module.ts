import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { UserEntity } from "../entities/user.entity";
import { UserController } from "../controllers/user.controller";
import { UserMikrOrmRepository } from "../repositories/user.mikrorm.repository";
import { UserService } from "src/aplication/services/user.service";

@Module({
    imports: [MikroOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [
        {
            provide: 'UserRepository',
            useClass: UserMikrOrmRepository
        },
        {
            provide: 'UserService',
            useFactory: (repository: UserMikrOrmRepository) => new UserService(repository),
            inject: ['UserRepository']
        }
    ]
})

export class UserModule {}