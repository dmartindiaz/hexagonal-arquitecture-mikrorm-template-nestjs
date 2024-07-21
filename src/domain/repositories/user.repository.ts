import { UserModelDomain } from "../models/user.model";

interface IUserRepositoryDomain {
    create: (userModelDomain: UserModelDomain) => Promise<UserModelDomain>
}

export {
    IUserRepositoryDomain
}