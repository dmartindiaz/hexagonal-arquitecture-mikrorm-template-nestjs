import { Property, PrimaryProperty, PrimaryKey, Entity } from "@mikro-orm/core"
import { ObjectId } from "@mikro-orm/mongodb"

@Entity({ collection: 'users' })
class UserEntity {
    @PrimaryKey()
    _id: ObjectId

    @Property()
    name: string

    @Property()
    surname: string
}

export {
    UserEntity
}