import { MongoDriver } from "@mikro-orm/mongodb"
import { UserEntity } from "./entities/user.entity"

const mikrOrmConfig = {
    driver: MongoDriver,
    entities: [UserEntity]
}

export {
    mikrOrmConfig
}