import { UserModelDomain } from "../models/user.model";

interface IUserRepositoryDomain {
    create: (userModelDomain: UserModelDomain) => Promise<UserModelDomain>,
    findById: (id: string) => Promise<UserModelDomain>
}

export {
    IUserRepositoryDomain
}